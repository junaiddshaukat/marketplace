'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import MobileMenu from './mobile-menu'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedIn } from '../app/redux/features/auth/authSlice'
import CategoryDropdown from './category-dropdown'

export default function NavBar() {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const isInitialMount = useRef(true)

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })
      setIsLoggedIn(response.data.success)
      
      dispatch(
        userLoggedIn({
          user: response.data.user,
          token: response.data.accessToken,
        })
      )
    } catch (error) {
      setIsLoggedIn(false)
    } finally {
      setIsLoading(false)
    }
  }, [dispatch])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      fetchUserDetails()
    }
  }, [fetchUserDetails])

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })

      if (response.data.success) {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        router.push('/login')
      } else {
        console.error('Logout failed:', response.data.message)
      }
    } catch (error) {
      localStorage.removeItem("token")
      setIsLoggedIn(false)
      router.push('/')
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-white ">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="https://res.cloudinary.com/junaidshaukat/image/upload/v1735666004/Untitled_design_2_uilhby.png" 
            alt="Logo" 
            width={200} 
            height={200} 
            className="rounded-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/" className="text-[#FF9FB8] hover:text-[#ff8da8]">
            Startseite
          </Link>
          <CategoryDropdown />
          <Link href="/all-products" className="text-[#FF9FB8] hover:text-[#ff8da8]">
            Alle Produkte
          </Link>
       
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <button className="text-[#ffa7b3] hover:text-[#ff9fb8]">
                    Dashboard
                  </button>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="rounded-full bg-[#ffa7b3] px-6 py-2 text-white hover:bg-[#ff9fb8]"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="rounded-full border border-[#FF9FB8] px-6 py-2 text-[#FF9FB8] hover:bg-[#FF9FB8] hover:text-white">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="rounded-full bg-[#9CD7E3] px-6 py-2 text-white hover:bg-[#8cc8d4]">
                    Registrieren
                  </button>
                </Link>
              </>
            )}
          </div>
          <MobileMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </div>
      </div>
    </nav>
  )
}

