'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { LayoutDashboard, FileText, PlusCircle, Star, Phone, UserCircle, CreditCard, LogOut, Menu, X, Shield } from 'lucide-react'
import Navbar from './nav-dash'
import Footer from './Footer-2'

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
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
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
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
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

  return (<>
    <div className="min-h-screen bg-white">
      <Navbar userName={userName} />

      <div className="flex relative">
        {/* Floating Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:relative md:shadow-none`}
        >
          <div className="flex h-full flex-col overflow-y-auto  py-6 px-4">
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 md:hidden"
            >
              <X className="h-5 w-5" />
            </button>

            {/* User Profile */}
            <div className="mb-8 text-center">
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-r from-blue-400 to-teal-400 shadow-inner">
                {userAvatar ? (
                  <Image
                    src={userAvatar}
                    alt={userName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-3xl font-bold text-white">
                    {getInitials(userName)}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 ring-2 ring-white"></div>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{userName || 'Loading...'}</h2>
              <p className="text-sm text-gray-500">@{userName?.toLowerCase().replace(/\s+/g, '') || 'user'}</p>
              
              {/* Super Admin Badge */}
              {userEmail === 'zain9175zain@gmail.com' && (
                <Link href="/super-admin" className="mt-3 inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 text-sm font-medium text-white shadow-md transition-all hover:from-purple-600 hover:to-pink-600">
                  <Shield className="mr-1 h-4 w-4" />
                  Super Admin
                </Link>
              )}
            </div>

            {/* Navigation */}
            <nav className="mt-6 flex-1 space-y-2 px-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`mr-3 h-5 w-5 flex-shrink-0 ${
                      pathname === item.href ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`} aria-hidden="true" />
                    {item.name}
                  </Link>
                )
              })}

              {/* Logout */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <button
                onClick={handleLogout}
                className="group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
              >
                <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-500" aria-hidden="true" />
                Log out
              </button>
            </div>
            </nav>

            
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-x-hidden">
          {/* Mobile header */}
          <div className="sticky top-0 z-10 md:hidden">
            <div className="flex h-16 items-center justify-between bg-white px-4 shadow-sm">
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
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
    </div>
      <Footer/>
      </>
  )
}

