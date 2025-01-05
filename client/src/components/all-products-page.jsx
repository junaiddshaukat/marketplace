'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, ChevronDown } from 'lucide-react'

import ProductCard from './product-card'

const categories = ['Alle', 'Wohnen', 'Unterwegs', 'Spielzeug', 'Kinderwagen', 'Ernahrung', 'Bekleidung', 'Fur Mama']
const priceRanges = ['Alle', '0€ - 20€', '20€ - 50€', '50€ - 100€', '100€+']

export default function AllProductsPage({ products }) {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [selectedPriceRange, setSelectedPriceRange] = useState('Alle')
  const [showCategoryFilter, setShowCategoryFilter] = useState(false)
  const [showPriceFilter, setShowPriceFilter] = useState(false)

  // Handle URL parameters on component mount and when they change
  useEffect(() => {
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    if (category) {
      setSelectedCategory(category)
      setSearchTerm('')
    } else if (search) {
      setSearchTerm(search)
      setSelectedCategory('Alle')
    }
  }, [searchParams])

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Alle' || product.category === selectedCategory
    const matchesPriceRange = selectedPriceRange === 'Alle' || (
      selectedPriceRange === '0€ - 20€' && product.price <= 20 ||
      selectedPriceRange === '20€ - 50€' && product.price > 20 && product.price <= 50 ||
      selectedPriceRange === '50€ - 100€' && product.price > 50 && product.price <= 100 ||
      selectedPriceRange === '100€+' && product.price > 100
    )
    return matchesSearch && matchesCategory && matchesPriceRange
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Produkt suchen..."
              className="w-full rounded-full border-0 p-4 pl-12 pr-4 shadow-lg focus:ring-2 focus:ring-[#FFB5C7]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Heading and Product Count */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{selectedCategory} Produkte</h1>
          <span className="rounded-full bg-[#FFB5C7] px-3 py-1 text-sm font-semibold text-white">
            {filteredProducts.length} Produkte
          </span>
        </div>

        {/* Filters and Products Grid */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 space-y-4">
            {/* Category Filter */}
            <div className="bg-white rounded-lg shadow p-4">
              <button
                className="flex items-center justify-between w-full text-left font-semibold"
                onClick={() => setShowCategoryFilter(!showCategoryFilter)}
              >
                Kategorie
                <ChevronDown className={`transform transition-transform ${showCategoryFilter ? 'rotate-180' : ''}`} />
              </button>
              {showCategoryFilter && (
                <div className="mt-2 space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2 text-[#FFB5C7] focus:ring-[#FFB5C7]"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-lg shadow p-4">
              <button
                className="flex items-center justify-between w-full text-left font-semibold"
                onClick={() => setShowPriceFilter(!showPriceFilter)}
              >
                Preis
                <ChevronDown className={`transform transition-transform ${showPriceFilter ? 'rotate-180' : ''}`} />
              </button>
              {showPriceFilter && (
                <div className="mt-2 space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range}
                        checked={selectedPriceRange === range}
                        onChange={() => setSelectedPriceRange(range)}
                        className="mr-2 text-[#FFB5C7] focus:ring-[#FFB5C7]"
                      />
                      {range}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

