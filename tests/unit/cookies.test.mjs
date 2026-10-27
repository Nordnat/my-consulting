import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// Import pure functions and constants
const VALID_COMPETENCY_IDS = [
  'agile-lean-practitioner',
  'serving',
  'coaching',
  'facilitating',
  'guiding-learning',
  'advising',
  'leading',
  'transforming',
  'self-mastery',
];

const DEFAULT_RATINGS = {
  'agile-lean-practitioner': 1,
  'serving': 1,
  'coaching': 1,
  'facilitating': 1,
  'guiding-learning': 1,
  'advising': 1,
  'leading': 1,
  'transforming': 1,
  'self-mastery': 1,
};

function isValidCompetencyId(val) {
  return typeof val === 'string' && VALID_COMPETENCY_IDS.includes(val);
}

function isValidRating(val) {
  return typeof val === 'number' && Number.isInteger(val) && val >= 1 && val <= 5;
}

function parseRatingsCookie(raw) {
  if (!raw) return null;
  try {
    const decoded = raw.startsWith('%') ? decodeURIComponent(raw) : raw;
    const parsed = JSON.parse(decoded);
    if (!parsed || typeof parsed !== 'object') return null;

    let hasAnyValid = false;
    const result = { ...DEFAULT_RATINGS };

    for (const id of VALID_COMPETENCY_IDS) {
      const rawVal = parsed[id];
      const numVal = typeof rawVal === 'string' ? parseInt(rawVal, 10) : rawVal;
      if (isValidRating(numVal)) {
        result[id] = numVal;
        hasAnyValid = true;
      }
    }

    return hasAnyValid ? result : null;
  } catch {
    return null;
  }
}

function parseActiveCompetencyCookie(raw) {
  if (!raw) return null;
  const decoded = raw.startsWith('%') ? decodeURIComponent(raw) : raw;
  const trimmed = decoded.trim();
  return isValidCompetencyId(trimmed) ? trimmed : null;
}

function parsePrioritiesCookie(raw) {
  if (!raw) return null;
  try {
    const decoded = raw.startsWith('%') ? decodeURIComponent(raw) : raw;
    const parsed = JSON.parse(decoded);
    if (!Array.isArray(parsed)) return null;
    const valid = parsed.filter(isValidCompetencyId);
    return valid.length > 0 ? valid : null;
  } catch {
    return null;
  }
}

describe('Growth Wheel Cookies & State Persistence', () => {
  describe('isValidCompetencyId', () => {
    it('accepts all 9 valid competency IDs', () => {
      for (const id of VALID_COMPETENCY_IDS) {
        assert.equal(isValidCompetencyId(id), true, `Failed for ${id}`);
      }
    });

    it('rejects invalid or unknown IDs', () => {
      assert.equal(isValidCompetencyId(''), false);
      assert.equal(isValidCompetencyId('random-id'), false);
      assert.equal(isValidCompetencyId(null), false);
      assert.equal(isValidCompetencyId(123), false);
    });
  });

  describe('isValidRating', () => {
    it('accepts integers from 1 to 5', () => {
      for (let r = 1; r <= 5; r++) {
        assert.equal(isValidRating(r), true, `Failed for ${r}`);
      }
    });

    it('rejects out of bounds and non-integers', () => {
      assert.equal(isValidRating(0), false);
      assert.equal(isValidRating(6), false);
      assert.equal(isValidRating(2.5), false);
      assert.equal(isValidRating('3'), false);
      assert.equal(isValidRating(null), false);
      assert.equal(isValidRating(undefined), false);
    });
  });

  describe('parseRatingsCookie', () => {
    it('returns null for empty or null raw cookie', () => {
      assert.equal(parseRatingsCookie(null), null);
      assert.equal(parseRatingsCookie(''), null);
      assert.equal(parseRatingsCookie(undefined), null);
    });

    it('returns null for invalid JSON', () => {
      assert.equal(parseRatingsCookie('not-a-json'), null);
    });

    it('parses valid JSON ratings and defaults missing competencies', () => {
      const raw = JSON.stringify({
        coaching: 4,
        facilitating: 5,
        'self-mastery': 3,
      });

      const parsed = parseRatingsCookie(raw);
      assert.ok(parsed);
      assert.equal(parsed.coaching, 4);
      assert.equal(parsed.facilitating, 5);
      assert.equal(parsed['self-mastery'], 3);
      // Missing should have default 1
      assert.equal(parsed.serving, 1);
      assert.equal(parsed['agile-lean-practitioner'], 1);
    });

    it('handles URL-encoded cookies', () => {
      const raw = encodeURIComponent(JSON.stringify({ advising: 5, leading: 4 }));
      const parsed = parseRatingsCookie(raw);
      assert.ok(parsed);
      assert.equal(parsed.advising, 5);
      assert.equal(parsed.leading, 4);
    });

    it('ignores invalid ratings and retains defaults', () => {
      const raw = JSON.stringify({
        coaching: 99, // out of range
        serving: -1,  // out of range
        leading: 3,   // valid
      });
      const parsed = parseRatingsCookie(raw);
      assert.ok(parsed);
      assert.equal(parsed.leading, 3);
      assert.equal(parsed.coaching, 1); // default
      assert.equal(parsed.serving, 1);  // default
    });
  });

  describe('parseActiveCompetencyCookie', () => {
    it('returns null for missing or invalid values', () => {
      assert.equal(parseActiveCompetencyCookie(null), null);
      assert.equal(parseActiveCompetencyCookie(''), null);
      assert.equal(parseActiveCompetencyCookie('unknown-skill'), null);
    });

    it('parses valid competency ID properly', () => {
      assert.equal(parseActiveCompetencyCookie('facilitating'), 'facilitating');
      assert.equal(parseActiveCompetencyCookie('%20coaching%20'), 'coaching');
    });
  });

  describe('parsePrioritiesCookie', () => {
    it('returns null for invalid or empty priorities', () => {
      assert.equal(parsePrioritiesCookie(null), null);
      assert.equal(parsePrioritiesCookie('[]'), null);
      assert.equal(parsePrioritiesCookie('invalid-json'), null);
    });

    it('extracts only valid IDs from priority list', () => {
      const raw = JSON.stringify(['coaching', 'invalid-comp', 'transforming']);
      const parsed = parsePrioritiesCookie(raw);
      assert.deepEqual(parsed, ['coaching', 'transforming']);
    });
  });
});
