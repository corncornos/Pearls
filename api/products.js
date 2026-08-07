import { put, head } from '@vercel/blob';
import { isAuthenticated } from '../lib/auth.js';

const BLOB_PATH = 'catalog/products.json';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const blob = await head(BLOB_PATH).catch(() => null);
      if (!blob) {
        // No live catalog saved yet - tell the frontend to use its bundled default.
        return res.status(200).json({ products: null });
      }
      const response = await fetch(blob.url, { cache: 'no-store' });
      const data = await response.json();
      return res.status(200).json({ products: data });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to load products', detail: String(err) });
    }
  }

  if (req.method === 'PUT') {
    if (!isAuthenticated(req)) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    const products = req.body;
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: 'Body must be an array of products' });
    }
    try {
      await put(BLOB_PATH, JSON.stringify(products), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      return res.status(200).json({ ok: true, count: products.length });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to save products', detail: String(err) });
    }
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });
}
