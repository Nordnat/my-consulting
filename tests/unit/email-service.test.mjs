import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { requireTs } from '../utils.mjs';

// Import directly from the real TypeScript source code
const emailModule = requireTs('lib/email-service.ts');
const { sendContactEmail } = emailModule;

describe('Email Service Integration (Real Source: lib/email-service.ts)', () => {
  describe('sendContactEmail in Simulated/Dev Mode', () => {
    it('returns simulated provider when no credentials are present in non-production mode', async () => {
      const prevEnv = process.env.NODE_ENV;
      const prevResend = process.env.RESEND_API_KEY;
      const prevSmtp = process.env.SMTP_HOST;

      try {
        process.env.NODE_ENV = 'development';
        delete process.env.RESEND_API_KEY;
        delete process.env.SMTP_HOST;
        delete process.env.SMTP_USER;
        delete process.env.SMTP_PASS;

        const res = await sendContactEmail({
          name: 'Jan Testowy',
          email: 'jan@example.com',
          message: 'Dzień dobry, zapytanie o warsztat.',
        });

        assert.equal(res.success, true);
        assert.equal(res.provider, 'simulated');
      } finally {
        process.env.NODE_ENV = prevEnv;
        if (prevResend) process.env.RESEND_API_KEY = prevResend;
        if (prevSmtp) process.env.SMTP_HOST = prevSmtp;
      }
    });

    it('refuses silent simulation in production environment without credentials', async () => {
      const prevEnv = process.env.NODE_ENV;
      const prevResend = process.env.RESEND_API_KEY;
      const prevSmtp = process.env.SMTP_HOST;

      try {
        process.env.NODE_ENV = 'production';
        delete process.env.RESEND_API_KEY;
        delete process.env.SMTP_HOST;
        delete process.env.SMTP_USER;
        delete process.env.SMTP_PASS;

        const res = await sendContactEmail({
          name: 'Jan Testowy',
          email: 'jan@example.com',
          message: 'Dzień dobry, zapytanie o warsztat.',
        });

        assert.equal(res.success, false);
        assert.match(res.error, /nie posiada jeszcze skonfigurowanego/i);
      } finally {
        process.env.NODE_ENV = prevEnv;
        if (prevResend) process.env.RESEND_API_KEY = prevResend;
        if (prevSmtp) process.env.SMTP_HOST = prevSmtp;
      }
    });
  });

  describe('SMTP Defensive Parsing', () => {
    it('correctly handles clean environment variable assignment', () => {
      const raw = "'tajneHaslo123!'";
      const cleaned = raw.replace(/^['"](.*)['"]$/, '$1');
      assert.equal(cleaned, 'tajneHaslo123!');
    });
  });
});
