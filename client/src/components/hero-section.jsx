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
      <div className="relative flex min-h-[400px] w-full flex-col items-center justify-center px-4 py-12 md:min-h-[350px] lg:px-8">
        {/* Vector Image - Left Side */}
        <div className="absolute -bottom-10 left-0 w-1/2 md:bottom-0 md:w-[45%]">
          <Image
            src="https://res.cloudinary.com/junaidshaukat/image/upload/v1736234983/Untitled_design_4_sbr0bv.png"
            alt="Mother and child illustration"
            width={900}
            height={900}
            className="object-contain"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="flex w-full flex-col gap-8 items-center justify-center">
          {/* Text Content */}
          <div className="mb-16 w-full text-right md:mb-20"> {/* Updated margin bottom */}
            <h1 className="ml-auto max-w-[600px]  text-2xl font-bold leading text-white sm:text-3xl md:text-4xl lg:text-5xl">
              We have everything you need for your little treasure.
            </h1>
          </div>

          {/* Search Form */}
          <div className="relative z-10  w-full max-w-[95%]">
            <form onSubmit={handleSubmit} className="flex w-full gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Produkt suchen"
                className="h-10 w-full text-[20px] flex-1 rounded-xl border-0 px-6 outline-none transition-all focus:ring-2 focus:ring-[#91d2e3] md:h-[54px]"
              />
              <button 
                type="submit"
                className="h-14 rounded-xl bg-[#91d2e3] px-8 text-lg font-normal text-white transition-all hover:bg-[#7AC9D3] md:h-[54px] md:px-12"
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

