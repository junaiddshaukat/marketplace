'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Search, ChevronDown, MapPin, X } from 'lucide-react';
import axios from 'axios';
import Image from 'next/image';

const categories = ['Alle', 'Kinderwagen', 'Unterwegs', 'Kindersitze', 'Spielzeug', 'Ernährung', 'Wohnen', 'Bekleidung'];
const cantons = ['Alle', 'Bern', 'Zürich', 'Basel', 'Luzern', 'St. Gallen'];

export default function AllProductsPage({ products = [], user }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [selectedCanton, setSelectedCanton] = useState('Alle');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const category = searchParams?.get('category');
    const search = searchParams?.get('search');

    if (category) {
      setSelectedCategory(category);
      setSearchTerm('');
    } else if (search) {
      setSearchTerm(search);
      setSelectedCategory('Alle');
    }
  }, [searchParams]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Alle' || product.category === selectedCategory;
      const matchesCanton = selectedCanton === 'Alle' || product.canton === selectedCanton;
      const matchesPrice = (!priceMin || product.price >= Number(priceMin)) && 
                           (!priceMax || product.price <= Number(priceMax));
      return matchesSearch && matchesCategory && matchesCanton && matchesPrice;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedCanton, priceMin, priceMax, products]);

  const clearFilters = () => {
    setSelectedCategory('Alle');
    setSelectedCanton('Alle');
    setPriceMin('');
    setPriceMax('');
    setSearchTerm('');
  };

  const hasActiveFilters = selectedCategory !== 'Alle' || selectedCanton !== 'Alle' || searchTerm !== '' || priceMin !== '' || priceMax !== '';

  const handleLike = async (productId, e) => {
    e.stopPropagation();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/product/like/${productId}`,
        { email: user.email },
        { 
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          },
          withCredentials: true
        }
      );
      // Update the product's like status in the local state
      setFilteredProducts(prevProducts => 
        prevProducts.map(p => 
          p.id === productId ? { ...p, isLiked: !p.isLiked } : p
        )
      );
    } catch (error) {
      console.error('Error liking product:', error);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Produkt suchen"
                className="w-full rounded-xl border border-gray-200 p-3 pl-12 focus:outline-none focus:border-[#B4E4E8] transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button className="px-8 py-2 bg-[#B4E4E8] text-white rounded-xl hover:bg-[#a3d3d7] transition-colors">
              Suchen
            </button>
          </div>

          {/* Title, Count, and Clear Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl text-gray-700">Produkte</h1>
              <span className="px-4 py-1 bg-[#B4E4E8] text-white rounded-full text-sm">
                {filteredProducts.length} Artikel
              </span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
                Filter zurücksetzen
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 p-3 pr-10 bg-white focus:outline-none focus:border-[#91d2e3] transition-colors"
              >
                <option value="" disabled>Kategorien</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative">
              <select
                value={selectedCanton}
                onChange={(e) => setSelectedCanton(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 p-3 pr-10 bg-white focus:outline-none focus:border-[#B4E4E8] transition-colors"
              >
                <option value="" disabled>Kanton</option>
                {cantons.map(canton => (
                  <option key={canton} value={canton}>{canton}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Preis</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">CHF</span>
                <input
                  type="number"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  placeholder="Min"
                  className="w-20 rounded-lg border border-gray-200 p-3 focus:outline-none focus:border-[#B4E4E8] transition-colors"
                />
                <span className="text-gray-600">CHF</span>
                <input
                  type="number"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  placeholder="Max"
                  className="w-20 rounded-lg border border-gray-200 p-3 focus:outline-none focus:border-[#B4E4E8] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="bg-[#F8FDFE] p-8 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router.push(`/product-details/${product.id}`)}
                >
                  <div className="p-4  relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full rounded-xl h-full object-cover"
                    />
                    
                 
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-[#FF8A8A] font-medium text-lg mb-3">CHF {product.price.toFixed(2)}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 px-3 py-1 bg-[#FFE5E5] text-[#FF8A8A] rounded-full text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{product.canton}</span>
                      </div>
                      <button className="px-4 py-1 bg-[#B4E4E8] text-white rounded-full text-sm hover:bg-[#a3d3d7] transition-colors">
                        Details anzeigen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}