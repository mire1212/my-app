export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <p className="text-sm text-gray-600">© Helsingin kaupunki</p>
            <p className="text-sm text-gray-600">p. 09 310 1691</p>
            <a href="https://www.hel.fi" className="text-sm text-blue-600 hover:underline">www.hel.fi</a>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">About Service</a>
              </li>
              <li>
                <a href="/feedback" className="text-gray-600 hover:text-gray-900">Give Feedback</a>
              </li>
              <li>
                <a href="/support" className="text-gray-600 hover:text-gray-900">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              </li>
              <li>
                <a href="/accessibility" className="text-gray-600 hover:text-gray-900">Accessibility</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

