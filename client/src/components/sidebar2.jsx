'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, Package, LayoutDashboard, Menu } from 'lucide-react'
import { useState } from 'react'

const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/super-admin' },
    { icon: Users, label: 'Users', href: '/super-admin/users' },
    { icon: Package, label: 'Products', href: '/super-admin/products' },
  ]

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>
      <aside className={`bg-white w-64 min-h-screen fixed left-0 top-0 border-r z-10 border-gray-200 shadow-sm transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center flex-col mt-6 justify-center h-16 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[black]">Mama Marketplace</h1>
          <p className='mb-4'>Super Admin Panel</p>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#FF9EAA] transition-colors ${
                    pathname === item.href ? 'bg-gray-100 text-[#FF9EAA] border-r-4 border-[#FF9EAA]' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

