'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { userRegistration } from '../redux/features/auth/authSlice'

export default function VerifyPage() {
  const dispatch = useDispatch();
  const router = useRouter()
  const { token } = useSelector((state) => state.auth)
  const reduxTempUser = useSelector((state) => state.auth.tempuser)

  const [tempuser, setTempuser] = useState(null)
  const [code, setCode] = useState(['', '', '', ''])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(60)
  const [showVerifyButton, setShowVerifyButton] = useState(true)
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  
  useEffect(() => {
    if (!token) {
      router.push('/register')
      return
    }

    const storedTempUser = localStorage.getItem('tempuser')
    if (storedTempUser) {
      setTempuser(JSON.parse(storedTempUser))
    } else if (reduxTempUser) {
      setTempuser(reduxTempUser)
      localStorage.setItem('tempuser', JSON.stringify(reduxTempUser))
    } else {
      router.push('/register')
      return
    }

    inputRefs[0].current?.focus()
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev === 1) {
          setShowVerifyButton(false)
        }
        return prev > 0 ? prev - 1 : 0
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [reduxTempUser, token, router])

  const handleInput = (index, value) => {
    setError('')
    if (value && !/^\d+$/.test(value)) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const paste = e.clipboardData.getData('text').slice(0, 4)
    if (/^\d+$/.test(paste)) {
      const digits = paste.split('')
      setCode(digits.concat(Array(4 - digits.length).fill('')))
      const focusIndex = Math.min(digits.length, 3)
      inputRefs[focusIndex].current?.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
  
    if (verificationCode.length !== 4) {
      setError('Please enter all 4 digits');
      return;
    }
  
    setIsLoading(true);
    setError('');
  
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/activate-user`, {
        activation_token: token,
        activation_code: verificationCode,
      });
  
      const paymentLink = response.data?.gateway?.link;
      if (paymentLink) {
        window.location.href = paymentLink;
      } else {
        setError('Payment link not provided in the response.');
        setTimeout(() => router.push('/register'), 3000);
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Something went wrong');
      setTimeout(() => router.push('/register'), 3000);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleResend = async () => {
    if (resendTimer > 0) return

    setIsLoading(true)
    try {
      if (!tempuser || !tempuser.email) {
        throw new Error('User information is missing. Please try again.')
      }
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/registration`, {
        user: tempuser,
      })
      dispatch(
        userRegistration({
          token: response.data.activationToken,
        })
      );
      toast.success(response.data?.message)
      setResendTimer(60)
      setShowVerifyButton(true)
      setError('A new code has been sent to your email')
    } catch (err) {
      console.error('Error in registration:', err)
      setError(err?.response?.data?.message || 'Failed to resend code. Please try again.')
      setTimeout(() => router.push('/register'), 3000);
    } finally {
      setIsLoading(false)
    }
  }

  if (!tempuser || !tempuser.email) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            User Information Missing
          </h2>
          <p className="text-sm text-red-600">
            We couldn&apos;t find your registration information. Please go back and try again.
          </p>
          <Link 
            href="/register" 
            className="inline-flex items-center text-sm text-blue-500 hover:text-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Registration
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link 
            href="/login" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
          
          <div className="mt-6 flex justify-center">
            <div className="relative h-20 w-20 rounded-full bg-[#FFE6F0] p-5">
              <Mail className="h-10 w-10 text-[#ffa7b3]" />
            </div>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Check your email
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;ve sent a 4-digit verification code to<br />
            <span className="font-medium text-gray-900">{tempuser.email}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInput(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`h-16 w-16 rounded-xl border-2 bg-white text-center text-2xl font-semibold 
                  ${error ? 'border-red-500 bg-red-50' : 'border-gray-200'} 
                  focus:border-[#ffa7b3] focus:outline-none focus:ring-2 focus:ring-[#ffa7b3] focus:ring-opacity-50`}
                required
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>

          {error && (
            <p className="text-center text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          {showVerifyButton && (
            <button
              type="submit"
              disabled={isLoading || code.some(digit => !digit)}
              className="group relative flex w-full justify-center rounded-lg bg-[#ffa7b3] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff9fb8] focus:outline-none focus:ring-2 focus:ring-[#ffa7b3] focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Verify Email'}
            </button>
          )}
        </form>

        <div className="text-center">
          <button
            onClick={handleResend}
            disabled={resendTimer > 0 || isLoading}
            className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
          >
            {resendTimer > 0 ? (
              <span>Resend code in {resendTimer}s</span>
            ) : (
              <span>Resend code</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

