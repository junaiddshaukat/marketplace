'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/all-products?search=${encodeURIComponent(search.trim())}`)
    }
  }

  return (
    <div className="relative mx-auto mt-5 mb-8 overflow-hidden rounded-2xl bg-[#ffa7b3]">
      <div className="relative flex min-h-[300px] w-full flex-col justify-end px-4 pb-5 pt-8 sm:min-h-[350px] md:min-h-[200px] lg:px-8">
        {/* Vector Image - Left Side (hidden on small screens) */}
        <div className="absolute bottom-0 left-0 w-[45%] pointer-events-none hidden sm:block">
          <Image
            src="https://res.cloudinary.com/junaidshaukat/image/upload/v1736234983/Untitled_design_4_sbr0bv.png"
            alt="Mother and child illustration"
            width={900}
            height={900}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="flex w-full flex-col items-center z-10">
          {/* Text Content */}
          <div className="mb-8 md:mb-32 w-full px-4 text-center sm:text-right">
            <h1 className="mx-auto sm:ml-auto sm:mr-0 max-w-[600px] text-[28px] font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              We have everything you need for your little treasure.
            </h1>
          </div>

          {/* Search Form */}
          <div className="w-full md:mb-3 px-4">
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 sm:flex-row sm:gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Produkt suchen"
                className="h-[52px] w-full rounded-[12px] border-0 bg-white px-6 text-[16px] outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-[#91d2e3] sm:h-14"
              />
              <button 
                type="submit"
                className="h-[52px] w-full rounded-[12px] bg-[#91d2e3] px-6 text-[16px] font-normal text-white transition-all hover:bg-[#7AC9D3] sm:h-14 sm:w-auto"
              >
                Suchen
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

