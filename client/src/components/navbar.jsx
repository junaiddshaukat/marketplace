'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import MobileMenu from './mobile-menu'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn } from '../app/redux/features/auth/authSlice'
import { useLoginMutation } from '../app/redux/features/auth/authApi';
import Loader from "../components/Loader"
  

export default function NavBar() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth); // Access the user state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const isInitialMount = useRef(true);

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      setIsLoggedIn(response.data.success)

        // console.log('dispach chalne laga ha');
      
            dispatch(
              userLoggedIn({
                user: response.data.user,
                token: response.data.accessToken,
              })
            );
    } catch (error) {
    
      setIsLoggedIn(false)
    } finally {
      setIsLoading(false)
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      fetchUserDetails();
    }
  }, [fetchUserDetails]);

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

  // if (isLoading) {
  //   return <div ></div> // Or a more sophisticated loading component Loading...
  // }

  return (
    <nav className="sticky top-0 z-50 border-b shadow-sm bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="https://res.cloudinary.com/junaidshaukat/image/upload/v1735666004/Untitled_design_2_uilhby.png" 
            alt="Logo" 
            width={200} 
            height={200} 
            className="rounded-full"
          />
          {/* <span className="text-xl font-semibold text-gray-700">Mama Marketplace</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/all-products" className="text-gray-600 hover:text-gray-900">
            Products
          </Link>
          {/* <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link> */}
          <Link href="/subscription" className="text-gray-600 hover:text-gray-900">
           Subscription
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
                  <button className="text-[#ffa7b3] hover:text-[#ff9fb8]">
                    Log In
                  </button>
                </Link>
                <Link href="/register">
                  <button className="rounded-full bg-[#ffa7b3] px-6 py-2 text-white hover:bg-[#ff9fb8]">
                    Sign Up
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

