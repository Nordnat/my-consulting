import type { MetadataRoute } from 'next';
import { COMPETENCIES } from '@/lib/growth-wheel-data';
import { COMPETENCIES_EN } from '@/lib/growth-wheel-data-en';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rafalkamieniarz.com';
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    // Polish Home
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}`,
          'en-US': `${baseUrl}/en`,
        },
      },
    },
    // English Home
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}`,
          'en-US': `${baseUrl}/en`,
        },
      },
    },
    // Polish Growth Wheel
    {
      url: `${baseUrl}/metodyki-zwinne/agile-growth-wheel`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}/metodyki-zwinne/agile-growth-wheel`,
          'en-US': `${baseUrl}/en/agile-growth-wheel`,
        },
      },
    },
    // English Growth Wheel
    {
      url: `${baseUrl}/en/agile-growth-wheel`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}/metodyki-zwinne/agile-growth-wheel`,
          'en-US': `${baseUrl}/en/agile-growth-wheel`,
        },
      },
    },
    // Polish Domain Knowledge
    {
      url: `${baseUrl}/kompetencja/domain-knowledge`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}/kompetencja/domain-knowledge`,
          'en-US': `${baseUrl}/en/competency/domain-knowledge`,
        },
      },
    },
    // English Domain Knowledge
    {
      url: `${baseUrl}/en/competency/domain-knowledge`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}/kompetencja/domain-knowledge`,
          'en-US': `${baseUrl}/en/competency/domain-knowledge`,
        },
      },
    },
    // Polish Privacy Policy
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}/polityka-prywatnosci`,
          'en-US': `${baseUrl}/en/privacy-policy`,
        },
      },
    },
    // English Privacy Policy
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}/polityka-prywatnosci`,
          'en-US': `${baseUrl}/en/privacy-policy`,
        },
      },
    },
  ];

  // Competencies and subcompetencies
  for (let i = 0; i < COMPETENCIES.length; i++) {
    const plComp = COMPETENCIES[i];
    const enComp = COMPETENCIES_EN[i];

    // Competency pages
    entries.push({
      url: `${baseUrl}${plComp.href}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}${plComp.href}`,
          'en-US': `${baseUrl}${enComp.href}`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}${enComp.href}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'pl-PL': `${baseUrl}${plComp.href}`,
          'en-US': `${baseUrl}${enComp.href}`,
        },
      },
    });

    // Subcompetency pages
    for (let s = 0; s < plComp.subCompetencies.length; s++) {
      const plSub = plComp.subCompetencies[s];
      const enSub = enComp.subCompetencies[s];

      if (plSub && enSub) {
        entries.push({
          url: `${baseUrl}${plSub.href}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.7,
          alternates: {
            languages: {
              'pl-PL': `${baseUrl}${plSub.href}`,
              'en-US': `${baseUrl}${enSub.href}`,
            },
          },
        });

        entries.push({
          url: `${baseUrl}${enSub.href}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.7,
          alternates: {
            languages: {
              'pl-PL': `${baseUrl}${plSub.href}`,
              'en-US': `${baseUrl}${enSub.href}`,
            },
          },
        });
      }
    }
  }

  return entries;
}
