import Link from 'next/link'

export function Footer2() {
  return (
    <footer className="bg-white shadow-sm mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2023 Your Company. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

