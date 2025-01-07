'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function AuthModal({ onClose, returnUrl }) {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Redirect back to return URL after login
    window.location.href = returnUrl || '/'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 text-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Logo"
            width={40}
            height={40}
            className="mx-auto mb-2 rounded-full"
          />
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-sm text-gray-500">
            {isLogin
              ? 'Please sign in to continue'
              : 'Sign up to view contact information'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ffa7b3] focus:outline-none focus:ring-1 focus:ring-[#ffa7b3]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ffa7b3] focus:outline-none focus:ring-1 focus:ring-[#ffa7b3]"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ffa7b3] focus:outline-none focus:ring-1 focus:ring-[#ffa7b3]"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-[#ffa7b3] px-4 py-2 text-white transition-colors hover:bg-[#ff9fb8] disabled:opacity-50"
          >
            {isLoading
              ? 'Loading...'
              : isLogin
              ? 'Sign In'
              : 'Create Account'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#ffa7b3] hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  )
}

