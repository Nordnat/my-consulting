import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

// Load and transpile translations.ts safely in-memory using TypeScript compiler API and Data URI
const tsPath = path.resolve('lib/i18n/translations.ts');
const tsContent = fs.readFileSync(tsPath, 'utf-8');

const { outputText } = ts.transpileModule(tsContent, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
});

const dataUri = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
const { TRANSLATIONS } = await import(dataUri);

function getKeysRecursively(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...getKeysRecursively(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

describe('Translations & Branding Consistency (PL & EN)', () => {
  it('contains both "pl" and "en" languages', () => {
    assert.ok(TRANSLATIONS.pl, 'Missing Polish translations');
    assert.ok(TRANSLATIONS.en, 'Missing English translations');
  });

  it('has "Agile Leader · Engineering Manager" badge in hero for both languages', () => {
    assert.equal(
      TRANSLATIONS.pl.home.hero.badge,
      'Agile Leader · Engineering Manager',
      'Polish hero badge does not match expected "Agile Leader · Engineering Manager"'
    );
    assert.equal(
      TRANSLATIONS.en.home.hero.badge,
      'Agile Leader · Engineering Manager',
      'English hero badge does not match expected "Agile Leader · Engineering Manager"'
    );
  });

  it('has "Agile Leader · Engineering Manager" tagline in nav for both languages', () => {
    assert.equal(
      TRANSLATIONS.pl.nav.tagline,
      'Agile Leader · Engineering Manager',
      'Polish nav tagline does not match expected "Agile Leader · Engineering Manager"'
    );
    assert.equal(
      TRANSLATIONS.en.nav.tagline,
      'Agile Leader · Engineering Manager',
      'English nav tagline does not match expected "Agile Leader · Engineering Manager"'
    );
  });

  it('has symmetric translation keys across PL and EN', () => {
    const plKeys = new Set(getKeysRecursively(TRANSLATIONS.pl));
    const enKeys = new Set(getKeysRecursively(TRANSLATIONS.en));

    const missingInEn = [...plKeys].filter((k) => !enKeys.has(k));
    const missingInPl = [...enKeys].filter((k) => !plKeys.has(k));

    assert.equal(
      missingInEn.length,
      0,
      `Keys present in PL but missing in EN: ${missingInEn.join(', ')}`
    );
    assert.equal(
      missingInPl.length,
      0,
      `Keys present in EN but missing in PL: ${missingInPl.join(', ')}`
    );
  });

  it('has non-empty text values for all home sections', () => {
    const plHome = TRANSLATIONS.pl.home;
    assert.ok(plHome.hero.title.length > 5);
    assert.ok(plHome.hero.description.length > 20);
    assert.ok(plHome.services.title.length > 5);
    assert.ok(plHome.about.lead.length > 10);
    assert.ok(plHome.contact.title.length > 5);

    const enHome = TRANSLATIONS.en.home;
    assert.ok(enHome.hero.title.length > 5);
    assert.ok(enHome.hero.description.length > 20);
    assert.ok(enHome.services.title.length > 5);
    assert.ok(enHome.about.lead.length > 10);
    assert.ok(enHome.contact.title.length > 5);
  });
});
