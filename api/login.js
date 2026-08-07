import { createSessionToken, SESSION_MAX_AGE_SECONDS } from '../lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(500).json({
      error: 'Server not configured. Set ADMIN_PASSWORD in Vercel Project Settings > Environment Variables.',
    });
  }

  const { password } = req.body || {};

  if (typeof password !== 'string' || password !== adminPassword) {
    // Small delay to slow down naive brute-force attempts.
    await new Promise((r) => setTimeout(r, 500));
    return res.status(401).json({ error: 'Incorrect password' });
  }

  let token;
  try {
    token = createSessionToken();
  } catch (err) {
    return res.status(500).json({ error: String(err.message || err) });
  }

  res.setHeader(
    'Set-Cookie',
    `admin_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_MAX_AGE_SECONDS}`
  );
  return res.status(200).json({ ok: true });
}
