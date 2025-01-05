'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
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
    <div className="relative mx-auto mt-10 mb-8 overflow-hidden rounded-2xl bg-[#FFB5C7]">
      <div className="relative flex min-h-[300px] w-full flex-col items-center justify-center px-4 py-12 md:min-h-[300px] lg:px-8">
        {/* Decorative Hearts
        <div className="absolute left-6 top-12 z-10 md:left-12">
          <div className="flex flex-col gap-3">
            <div className="h-8 w-8 rotate-[-15deg] text-[#ffffff] md:h-12 md:w-12">
              ❤
            </div>
            <div className="h-8 w-8 rotate-[15deg] text-[#FFE5EC] md:h-12 md:w-12">
              ❤
            </div>
            <div className="h-8 w-8 text-[#FFE5EC] md:h-12 md:w-12">
              ❤
            </div>
          </div>
        </div> */}

        {/* Vector Image - Left Side */}
        <div className="absolute bottom-0 left-0 w-1/2 md:bottom-0 md:w-[45%] ">
          <Image
            src="https://res.cloudinary.com/junaidshaukat/image/upload/v1735066530/Untitled_design_1_eqfguu.png"
            alt="Mother and child illustration"
            width={900}
            height={900}
            className="object-contain"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="flex w-full flex-col items-center justify-center">
          {/* Text Content */}
          <div className="mb-8 w-full text-right md:mb-12">
            <h1 className="ml-auto max-w-[600px] text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              We have everything you need for your little treasure.
            </h1>
          </div>

          {/* Search Form */}
          <div className="relative z-10 w-full max-w-[1000px]">
            <form onSubmit={handleSubmit} className="flex w-full gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for product"
                className="h-14 w-full flex-1 rounded-2xl border-0 px-6 shadow-lg outline-none transition-all focus:ring-2 focus:ring-[#98D8E1] md:h-16"
              />
              <button 
                type="submit"
                className="h-14 rounded-2xl bg-[#98D8E1] px-8 text-lg font-medium text-white transition-all hover:bg-[#7AC9D3] md:h-16 md:px-12"
              >
                Seek
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

