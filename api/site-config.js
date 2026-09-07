import { put, head } from '@vercel/blob';
import { isAuthenticated } from '../lib/auth.js';

const BLOB_PATH = 'site/config.json';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const blob = await head(BLOB_PATH).catch(() => null);
      if (!blob) return res.status(200).json({ config: null });
      const response = await fetch(blob.url, { cache: 'no-store' });
      const data = await response.json();
      return res.status(200).json({ config: data });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to load site config', detail: String(err) });
    }
  }

  if (req.method === 'PUT') {
    if (!isAuthenticated(req)) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    const config = req.body;
    if (!config || typeof config !== 'object' || Array.isArray(config)) {
      return res.status(400).json({ error: 'Body must be a config object' });
    }
    try {
      await put(BLOB_PATH, JSON.stringify(config), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      return res.status(200).json({ ok: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to save site config', detail: String(err) });
    }
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });
}
