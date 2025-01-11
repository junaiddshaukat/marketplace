'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { name: "Wohnen", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-11-1.jpg" },
  { name: "Unterwegs", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-8-1.jpg" },
  { name: "Spielzeug", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-9-1.jpg" },
  { name: "Kinderwagen", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-6-1.jpg" },
  { name: "Kindersitze", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-7-1.jpg" },
  { name: "Ernährung", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-10-1.jpg" },
  { name: "Bekleidung", image: "https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/07/Beige-Playful-Baby-and-Child-Care-Desktop-Prototype-12-1.jpg" },
]

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 text-[#FF9FB8]  hover:text-[#ff8da8]">
        Kategorien
        <svg
          className={`h-4 w-4 text-black transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute left-1/2 mt-2 w-[90vw] -translate-x-1/2 transform bg-white p-6 ">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700">Alle Kategorien</h3>
              <Link href="/all-products" className="text-sm text-gray-500 hover:text-gray-700">
                Mehr anzeigen »
              </Link>
            </div>
            <div className="grid grid-cols-7 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/all-products?category=${encodeURIComponent(category.name)}`}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50 p-2 transition-all group-hover:scale-105">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-center text-sm font-medium text-gray-700">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

