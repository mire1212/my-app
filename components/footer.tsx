'use client';

import { useTranslations } from 'next-intl'; // Import the useTranslations hook

export function Footer() {
  const t = useTranslations(); // Get the t function from next-intl for translations

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('contact')}</h3>
            <p className="text-sm text-gray-600">{t('city')}</p>
            <p className="text-sm text-gray-600">{t('phone')}</p>
            <a href="https://www.hel.fi" className="text-sm text-blue-600 hover:underline">
              {t('website')}
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  {t('aboutService')}
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-gray-600 hover:text-gray-900">
                  {t('feedback')}
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-600 hover:text-gray-900">
                  {t('support')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t('information')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="/accessibility" className="text-gray-600 hover:text-gray-900">
                  {t('accessibility')}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900">
                  {t('terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
