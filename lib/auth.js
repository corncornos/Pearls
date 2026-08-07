import crypto from 'crypto';

const SECRET = process.env.SESSION_SECRET || '';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 4; // 4 hours

function assertSecret() {
  if (!SECRET) {
    throw new Error('SESSION_SECRET env var is not set. Add it in Vercel Project Settings > Environment Variables.');
  }
}

export function createSessionToken() {
  assertSecret();
  const expires = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = String(expires);
  const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

export function verifySessionToken(token) {
  if (!token || !SECRET) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length) return false;
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return false;
  return Number(payload) > Date.now();
}

export function parseCookies(req) {
  const header = req.headers.cookie || '';
  return Object.fromEntries(
    header
      .split(';')
      .filter(Boolean)
      .map((c) => {
        const idx = c.indexOf('=');
        const k = c.slice(0, idx).trim();
        const v = c.slice(idx + 1).trim();
        return [k, decodeURIComponent(v)];
      })
  );
}

export function isAuthenticated(req) {
  const cookies = parseCookies(req);
  return verifySessionToken(cookies.admin_session);
}

export { SESSION_MAX_AGE_SECONDS };
