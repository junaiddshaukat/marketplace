'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { KeyRound, X } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function ContactModal({ isOpen, onClose, isLoggedIn, owner }) {
  const router = useRouter()
  const modalRef = useRef(null)

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg w-full max-w-md relative"
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Kontaktinformationen</h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Owner Info */}
          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
            {owner?.avatar?.url ? (
              <Image
                src={owner.avatar.url}
                alt={owner.name || "Seller"}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  {owner?.contactInformation.sellername?.charAt(0).toUpperCase() || 'S'}
                </span>
              </div>
            )}
            <div>
              <h3 className="font-medium text-gray-900">{owner?.contactInformation.sellername || "Admin"}</h3>
            </div>
          </div>

          {isLoggedIn ? (
            <div className="space-y-4">
              {owner?.email && (
                <div className="flex flex-col gap-1">
                    
                    {owner?.contactInformation?.email?.visibility === "public"  ? (
  <>
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">Email</span>
      <span className="font-medium">{owner.contactInformation.email.value}</span>
    </div>
   
  </>
) : (
  <span className="text-sm text-gray-500"></span>
)}


{owner?.contactInformation?.phone?.visibility === "public"  ? (
  <>
   
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">Phone</span>
      <span className="font-medium">{owner.contactInformation.phone.value}</span>
    </div>
  </>
) : (
  <span className="text-sm text-gray-500"></span>
)}

                </div>
              )}
              {owner?.phone && (
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-500">Phone</span>
                  <span className="font-medium">{owner.phone}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-4">
              <KeyRound className="mx-auto h-12 w-12 text-gray-400" />
              <p className="text-gray-600">Login/Register to see details</p>
              <button 
                className="w-full bg-[#FF4400] hover:bg-[#E63E00] text-white py-3 rounded-lg font-medium transition-colors"
                onClick={() => {
                  onClose()
                  router.push('/login')
                }}
              >
                Login/Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
