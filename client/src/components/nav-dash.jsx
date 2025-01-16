import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar({ userName }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
          <Image 
            src="https://res.cloudinary.com/junaidshaukat/image/upload/v1735666004/Untitled_design_2_uilhby.png" 
            alt="Logo" 
            width={200} 
            height={200} 
            className="rounded-full"
          />
        </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
            Startseite

            </Link>
            <Link href="/all-products" className="text-gray-600 hover:text-gray-900">
            Alle Produkte

            </Link>
            <Link href="/subscription" className="text-gray-600 hover:text-gray-900">
            Abonnement
            </Link>
            <span className="text-sm font-medium text-gray-700">Welcome, {userName}</span>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#9DD5E3]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 pb-3 pt-2">
          <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
          Startseite

          </Link>
          <Link href="/all-products" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
          Alle Produkte

          </Link>
          <Link href="/subscription" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
          Abonnement

          </Link>
          <div className="px-3 py-2 text-base font-medium text-gray-600">
            Welcome, {userName}
          </div>
        </div>
      </div>
    </nav>
  )
}

