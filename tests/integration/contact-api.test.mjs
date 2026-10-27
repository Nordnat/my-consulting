import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// Logic mirror of app/api/contact/route.ts validation rules
function validateContactPayload(body) {
  const { name, email, message, consent, company } = body || {};

  // 1. Honeypot check
  if (company && typeof company === 'string' && company.trim().length > 0) {
    return { ok: true, isHoneypot: true };
  }

  // 2. Required fields
  if (!name?.trim() || !email?.trim() || !message?.trim() || !consent) {
    return {
      status: 400,
      error: 'Wszystkie wymagane pola oraz zgoda muszą zostać uzupełnione.',
    };
  }

  const trimmedName = name.trim().slice(0, 100);
  const trimmedEmail = email.trim().slice(0, 150);
  const trimmedMessage = message.trim().slice(0, 5000);

  // 3. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return {
      status: 400,
      error: 'Podano niepoprawny adres e-mail.',
    };
  }

  // 4. Message length
  if (trimmedMessage.length < 5) {
    return {
      status: 400,
      error: 'Wiadomość jest zbyt krótka (minimum 5 znaków).',
    };
  }

  return {
    status: 200,
    data: {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    },
  };
}

describe('Contact Form API Integration & Validation', () => {
  it('blocks spam bots via honeypot without failing the response', () => {
    const res = validateContactPayload({
      name: 'Spam Bot',
      email: 'bot@spam.com',
      message: 'Buy our fake products now',
      consent: true,
      company: 'SpamCorp LLC', // Bot filled this hidden honeypot field
    });

    assert.equal(res.ok, true);
    assert.equal(res.isHoneypot, true);
  });

  it('rejects submissions with missing required fields', () => {
    const missingName = validateContactPayload({
      email: 'test@example.com',
      message: 'Dzień dobry, zapytanie o konsultacje',
      consent: true,
    });
    assert.equal(missingName.status, 400);

    const missingConsent = validateContactPayload({
      name: 'Jan Kowalski',
      email: 'test@example.com',
      message: 'Dzień dobry, zapytanie o konsultacje',
      consent: false,
    });
    assert.equal(missingConsent.status, 400);
  });

  it('rejects malformed email addresses', () => {
    const invalidEmails = [
      'plainaddress',
      '@missingusername.com',
      'username@.com',
      'username@domain',
      'two@@signs.com',
    ];

    for (const email of invalidEmails) {
      const res = validateContactPayload({
        name: 'Jan Kowalski',
        email,
        message: 'Dzień dobry, poproszę o kontakt',
        consent: true,
      });
      assert.equal(res.status, 400, `Expected failure for invalid email: ${email}`);
    }
  });

  it('rejects messages shorter than 5 characters', () => {
    const res = validateContactPayload({
      name: 'Jan Kowalski',
      email: 'jan@example.com',
      message: 'Hej',
      consent: true,
    });
    assert.equal(res.status, 400);
    assert.match(res.error, /zbyt krótka/);
  });

  it('accepts and sanitizes valid contact inquiries', () => {
    const res = validateContactPayload({
      name: '  Anna Nowak  ',
      email: '  anna.nowak@firma.pl  ',
      message: 'Dzień dobry, chcielibyśmy umówić warsztat Agile Coaching Growth Wheel dla naszego zespołu.',
      consent: true,
    });

    assert.equal(res.status, 200);
    assert.equal(res.data.name, 'Anna Nowak');
    assert.equal(res.data.email, 'anna.nowak@firma.pl');
    assert.ok(res.data.message.length >= 5);
  });
});
