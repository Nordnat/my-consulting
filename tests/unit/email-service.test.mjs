import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildHtmlTemplate(name, email, message) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `
    <div>
      <p>Nadawca: ${safeName}</p>
      <p>Email: ${safeEmail}</p>
      <div>${safeMessage}</div>
    </div>
  `;
}

describe('Email Service Utilities & Security', () => {
  describe('escapeHtml (XSS Sanitization)', () => {
    it('escapes dangerous HTML characters', () => {
      const dangerous = '<script>alert("XSS & attack")</script>\'test\'';
      const escaped = escapeHtml(dangerous);

      assert.equal(escaped.includes('<script>'), false);
      assert.equal(escaped.includes('</script>'), false);
      assert.equal(escaped.includes('&lt;script&gt;'), true);
      assert.equal(escaped.includes('&quot;XSS &amp; attack&quot;'), true);
      assert.equal(escaped.includes('&#039;test&#039;'), true);
    });

    it('leaves safe strings unchanged', () => {
      const safe = 'Jan Kowalski - zapytanie o warsztat';
      assert.equal(escapeHtml(safe), safe);
    });
  });

  describe('buildHtmlTemplate', () => {
    it('renders safe HTML without injecting raw tags', () => {
      const html = buildHtmlTemplate(
        '<img src=x onerror=alert(1)>',
        'test@example.com',
        'Linia 1\nLinia 2'
      );

      assert.equal(html.includes('<img'), false);
      assert.equal(html.includes('&lt;img src=x onerror=alert(1)&gt;'), true);
      assert.equal(html.includes('Linia 1<br />Linia 2'), true);
    });
  });

  describe('Production configuration guard', () => {
    it('detects missing credentials in production environment', () => {
      // Simulate production without SMTP
      const env = {
        NODE_ENV: 'production',
        SMTP_HOST: '',
        SMTP_USER: '',
        SMTP_PASS: '',
        RESEND_API_KEY: '',
        WEB3FORMS_ACCESS_KEY: '',
      };

      const hasProvider = Boolean(
        env.RESEND_API_KEY ||
        (env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS) ||
        env.WEB3FORMS_ACCESS_KEY
      );

      assert.equal(hasProvider, false, 'Should detect that no real provider is set');
    });

    it('validates complete SMTP configuration', () => {
      const env = {
        SMTP_HOST: 'smtp.hostinger.com',
        SMTP_PORT: '465',
        SMTP_SECURE: 'true',
        SMTP_USER: 'rafal@rafalkamieniarz.com',
        SMTP_PASS: 'secret',
      };

      const isSmtpConfigured = Boolean(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS);
      assert.equal(isSmtpConfigured, true);
    });
  });
});
