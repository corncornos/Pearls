import { put } from '@vercel/blob';
import { isAuthenticated } from '../lib/auth.js';

// Vercel Serverless Functions hard-cap request bodies at 4.5MB, so we
// enforce a slightly smaller limit here and surface a clear error.
const MAX_BYTES = 4 * 1024 * 1024; // 4MB

// Vercel's automatic body parsing only reliably covers application/json,
// application/x-www-form-urlencoded, and text/plain. For arbitrary binary
// content types like image/*, req.body may be undefined depending on the
// runtime version, so we read the raw request stream ourselves as the
// source of truth (falling back to req.body if it was already parsed).
async function readRawBody(req) {
  if (Buffer.isBuffer(req.body) && req.body.length > 0) {
    return req.body;
  }
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAuthenticated(req)) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const filename = typeof req.query.filename === 'string' ? req.query.filename : '';
  if (!filename) {
    return res.status(400).json({ error: 'Missing filename query param' });
  }

  const contentType = req.headers['content-type'] || '';
  if (!contentType.startsWith('image/')) {
    return res.status(400).json({ error: 'Only image uploads are allowed' });
  }

  let body;
  try {
    body = await readRawBody(req);
  } catch (err) {
    return res.status(400).json({ error: 'Failed to read request body', detail: String(err) });
  }
  if (!body || body.length === 0) {
    return res.status(400).json({ error: 'Empty or unreadable file body' });
  }

  if (body.length > MAX_BYTES) {
    return res.status(413).json({ error: `Image too large (max ${MAX_BYTES / (1024 * 1024)}MB)` });
  }

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  const path = `catalog/images/${Date.now()}-${safeName}`;

  try {
    const blob = await put(path, body, {
      access: 'public',
      contentType,
      addRandomSuffix: false,
    });
    return res.status(200).json({ url: blob.url });
  } catch (err) {
    return res.status(500).json({ error: 'Upload failed', detail: String(err) });
  }
}
