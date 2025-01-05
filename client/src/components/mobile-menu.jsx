'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'



export default function MobileMenu({ isLoggedIn, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-gray-600"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Home
            </Link>
            <Link href="/all-products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Products
            </Link>
            <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              About Us
            </Link>
            <Link href="/subscription" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Subscription
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                  Log In
                </Link>
                <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

