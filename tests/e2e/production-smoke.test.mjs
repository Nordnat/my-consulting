import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const BASE_URL = process.env.BASE_URL || 'https://rafalkamieniarz.com';

async function fetchRoute(path, options = {}) {
  const url = `${BASE_URL.replace(/\/$/, '')}${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'User-Agent': 'Antigravity-E2E-Smoke-Tester/1.0',
      ...(options.headers || {}),
    },
  });
  return response;
}

describe(`E2E Production Smoke Suite [${BASE_URL}]`, () => {
  describe('Static & Content Pages', () => {
    it('serves Polish homepage (/) with status 200 and Agile Leader branding', async () => {
      const res = await fetchRoute('/');
      assert.equal(res.status, 200, `Expected 200 OK for /, got ${res.status}`);

      const html = await res.text();
      assert.ok(html.includes('Agile Leader · Engineering Manager'), 'Missing "Agile Leader · Engineering Manager" in body');
      assert.ok(html.includes('Rafał Kamieniarz'), 'Missing brand name');
      assert.ok(html.includes('lang="pl"'), 'Missing Polish lang attribute');
    });

    it('serves English homepage (/en) with status 200 and English branding', async () => {
      const res = await fetchRoute('/en');
      assert.equal(res.status, 200, `Expected 200 OK for /en, got ${res.status}`);

      const html = await res.text();
      assert.ok(html.includes('Agile Leader · Engineering Manager'), 'Missing badge in English page');
      assert.ok(html.includes('lang="en"'), 'Missing English lang attribute');
    });

    it('serves Polish Agile Growth Wheel page with status 200', async () => {
      const res = await fetchRoute('/metodyki-zwinne/agile-growth-wheel');
      assert.equal(res.status, 200, `Expected 200 OK for /metodyki-zwinne/agile-growth-wheel, got ${res.status}`);

      const html = await res.text();
      assert.ok(html.includes('Agile Coaching Growth Wheel'), 'Missing wheel title');
      assert.ok(html.includes('coaching') && html.includes('facilitating'), 'Missing core competency areas');
    });

    it('serves English Agile Growth Wheel page with status 200', async () => {
      const res = await fetchRoute('/en/agile-growth-wheel');
      assert.equal(res.status, 200, `Expected 200 OK for /en/agile-growth-wheel, got ${res.status}`);

      const html = await res.text();
      assert.ok(html.includes('Agile Coaching Growth Wheel'), 'Missing wheel title in English');
    });

    it('serves Privacy Policy in Polish and English with status 200', async () => {
      const plRes = await fetchRoute('/polityka-prywatnosci');
      assert.equal(plRes.status, 200, 'Expected 200 for Polish privacy policy');

      const enRes = await fetchRoute('/en/privacy-policy');
      assert.equal(enRes.status, 200, 'Expected 200 for English privacy policy');
    });
  });

  describe('SEO, Metadata & Bot Standards', () => {
    it('serves robots.txt with sitemap reference', async () => {
      const res = await fetchRoute('/robots.txt');
      assert.equal(res.status, 200);

      const text = await res.text();
      assert.ok(text.includes('Allow: /'), 'robots.txt should allow root');
      assert.ok(text.includes('sitemap.xml'), 'robots.txt should link sitemap');
    });

    it('serves sitemap.xml with valid XML structure', async () => {
      const res = await fetchRoute('/sitemap.xml');
      assert.equal(res.status, 200);

      const xml = await res.text();
      assert.ok(xml.includes('<?xml') || xml.includes('<urlset'), 'Invalid XML sitemap');
      assert.ok(xml.includes('rafalkamieniarz.com'), 'Sitemap missing domain URLs');
    });

    it('serves llms.txt with AI documentation and experience', async () => {
      const res = await fetchRoute('/llms.txt');
      assert.equal(res.status, 200);

      const text = await res.text();
      assert.ok(text.includes('Rafał Kamieniarz'), 'Missing author name in llms.txt');
      assert.ok(text.includes('Samsung'), 'Missing experience highlights in llms.txt');
    });
  });

  describe('HTTP Security Headers', () => {
    it('sets Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options and hides X-Powered-By', async () => {
      const res = await fetchRoute('/');
      assert.ok(res.headers.get('strict-transport-security'), 'Missing HSTS');
      assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
      assert.equal(res.headers.get('x-frame-options'), 'DENY');
      assert.equal(res.headers.get('x-powered-by'), null, 'X-Powered-By should be removed');
    });
  });

  describe('Contact Form API Endpoint (/api/contact)', () => {
    it('rejects incomplete POST requests with 400 Bad Request', async () => {
      const res = await fetchRoute('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Test User' }),
      });

      assert.equal(res.status, 400, 'Incomplete submission should return 400');
      const data = await res.json();
      assert.ok(data.error, 'Response should contain error explanation');
    });

    it('rejects invalid email formats with 400 Bad Request', async () => {
      const res = await fetchRoute('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Jan Kowalski',
          email: 'not-an-email',
          message: 'Dzień dobry, zapytanie o warsztat',
          consent: true,
        }),
      });

      assert.equal(res.status, 400);
      const data = await res.json();
      assert.match(data.error, /adres e-mail/i);
    });

    it('handles spam bot gracefully via Honeypot trap', async () => {
      const res = await fetchRoute('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Bot',
          email: 'bot@spam.com',
          message: 'Spam message',
          consent: true,
          company: 'Acme Spammer', // Honeypot trigger
        }),
      });

      // Bot receives fake success
      assert.equal(res.status, 200);
      const data = await res.json();
      assert.equal(data.ok, true);
    });
  });
});
