import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <nav>
            <ul className="flex space-x-4 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-products" className="hover:text-gray-900">
                 Products
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="hover:text-gray-900">
                  Subscription
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Mama Marketplace. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  )
}

