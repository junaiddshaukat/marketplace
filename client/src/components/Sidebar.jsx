'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { LayoutDashboard, FileText, PlusCircle, Star, Phone, UserCircle, CreditCard, LogOut, Menu, X, Shield } from 'lucide-react'
import Navbar from './nav-dash'
import Footer from './footer'

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const router = useRouter()
  const [userAvatar, setUserAvatar] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Ads', href: '/dashboard/my-ads', icon: FileText },
    { name: 'Add Ad', href: '/dashboard/add-ad', icon: PlusCircle },
    { name: 'In Active Ads', href: '/dashboard/inactive', icon: Star },
    { name: 'Contact Information', href: '/dashboard/contact', icon: Phone },
    { name: 'Edit Profile', href: '/dashboard/profile', icon: UserCircle },
    { name: 'Subscription', href: '/dashboard/subscription', icon: CreditCard },
  ]

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      const userData = response.data.session;
      setUserName(userData.name);
      setUserAvatar(userData.avatar?.url || '');
      setUserEmail(userData.email || '');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });

      if (response.data.success) {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        router.push('/login')
      } else {
        console.error('Logout failed:', response.data.message)
      }
    } catch (error) {
      if (error.response) {
        console.error("Logout Error:", error.response.data);
      } else if (error.request) {
        console.error("No Response:", error.request);
      } else {
        console.error("Request Error:", error.message);
      }
      localStorage.removeItem("token")
      setIsLoggedIn(false)
      router.push('/')
    }
  }

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar userName={userName} />

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white transition-all duration-200 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0`}
        >
          <div className="flex h-full flex-col overflow-y-auto border-r border-gray-200 bg-white py-4 px-3">
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 md:hidden"
            >
              <X className="h-5 w-5" />
            </button>

            {/* User Profile */}
            <div className="mb-8 text-center">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-[#9DD5E3]">
                {userAvatar ? (
                  <Image
                    src={userAvatar}
                    alt={userName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-2xl text-white">
                    {getInitials(userName)}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></div>
              </div>
              <h2 className="mt-4 text-lg font-semibold">{userName || 'Loading...'}</h2>
              <p className="text-sm text-gray-500">@{userName?.toLowerCase().replace(/\s+/g, '') || 'user'}</p>
              
              {/* Super Admin Badge */}
              {userEmail === 'zain9175zain@gmail.com' && (
                <Link href="/super-admin" className="mt-2 inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 text-sm font-medium text-white shadow-lg transition-all hover:from-purple-600 hover:to-pink-600">
                  <Shield className="mr-1 h-4 w-4" />
                  Super Admin
                </Link>
              )}
            </div>

            {/* Navigation */}
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                      pathname === item.href
                        ? 'bg-[#9DD5E3]/10 text-[#9DD5E3]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    {item.name}
                  </Link>
                )
              })}
              <div className="mt-auto">
              <button
                onClick={handleLogout}
                className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <LogOut className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                Log out
              </button>
            </div>
            </nav>

            {/* Logout */}
            
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          {/* Mobile header */}
          <div className="sticky top-0 z-10 md:hidden">
            <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 md:px-8">
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              <button
                type="button"
                className="-mr-3 h-12 w-12 rounded-md bg-white p-2 text-gray-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Page content */}
          <main className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

