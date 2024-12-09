'use client';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Yhteystiedot</h3>
            <p className="text-sm text-gray-600">© Helsingin kaupunki</p>
            <p className="text-sm text-gray-600">p. 09 310 1691</p>
            <a href="https://www.hel.fi" className="text-sm text-blue-600 hover:underline">
              www.hel.fi
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Pikalinkit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  Tietoa palvelusta
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-gray-600 hover:text-gray-900">
                  Anna palautetta
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-600 hover:text-gray-900">
                  Tuki
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Tietoa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Tietosuojaseloste
                </a>
              </li>
              <li>
                <a href="/accessibility" className="text-gray-600 hover:text-gray-900">
                  Saavutettavuus
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900">
                  Käyttöehdot
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
