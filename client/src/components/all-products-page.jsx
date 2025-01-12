'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Search, ChevronDown, MapPin, X } from 'lucide-react';
import axios from 'axios';
import Image from 'next/image';

const categories = ['Alle', 'Kinderwagen', 'Unterwegs', 'Kindersitze', 'Spielzeug', 'Ernährung', 'Wohnen', 'Bekleidung'];
const cities = [
  'Alle', 'Aargau', 'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'Basel-Landschaft', 
  'Basel-Stadt', 'Bern', 'Freiburg', 'Genf', 'Glarus', 'Graubünden', 'Jura', 'Luzern', 
  'Neuenburg', 'Nidwalden', 'Obwalden', 'Schaffhausen', 'Schwyz', 'Solothurn', 'St. Gallen', 
  'Tessin', 'Thurgau', 'Uri', 'Waadt', 'Wallis', 'Zug', 'Zürich'
];;

export default function AllProductsPage({ products = [], user }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // Initialize search parameters
  useEffect(() => {
    const category = searchParams?.get('category');
    const search = searchParams?.get('search');

    if (category) {
      setSelectedCategories([category]);
      setSearchTerm('');
    } else if (search) {
      setSearchTerm(search);
      setSelectedCategories([]);
    }
  }, [searchParams]);

  // Filter products based on search criteria
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesCity = selectedCities.length === 0 || selectedCities.includes(product.canton) || selectedCities.includes(product.location);
      const matchesPrice = (!priceMin || product.price >= Number(priceMin)) && 
                           (!priceMax || product.price <= Number(priceMax));
      return matchesSearch && matchesCategory && matchesCity && matchesPrice;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategories, selectedCities, priceMin, priceMax, products]);

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedCities([]);
    setPriceMin('');
    setPriceMax('');
    setSearchTerm('');
  };

  // Check if any filters are active
  const hasActiveFilters = selectedCategories.length > 0 || selectedCities.length > 0 || searchTerm !== '' || priceMin !== '' || priceMax !== '';

  // Handle category selection
  const handleCategoryChange = (category) => {
    if (category === 'Alle') {
      setSelectedCategories(selectedCategories.length === 0 ? ['Alle'] : []);
    } else {
      setSelectedCategories(prev => {
        const newCategories = prev.filter(c => c !== 'Alle');
        return newCategories.includes(category) ? newCategories.filter(c => c !== category) : [...newCategories, category];
      });
    }
  };

  // Handle city selection
  const handleCityChange = (city) => {
    if (city === 'Alle') {
      setSelectedCities(selectedCities.length === 0 ? ['Alle'] : []);
    } else {
      setSelectedCities(prev => {
        const newCities = prev.filter(c => c !== 'Alle');
        return newCities.includes(city) ? newCities.filter(c => c !== city) : [...newCities, city];
      });
    }
  };

  // Handle liking a product
  const handleLike = async (productId, e) => {
    e.stopPropagation();
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/product/like/${productId}`,
        { email: user.email },
        { 
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          withCredentials: true
        }
      );
      // Update local state optimistically
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

          {/* Title and Clear Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl text-gray-700">Produkte</h1>
              <span className="px-4 py-1 bg-[#B4E4E8] text-white rounded-full text-sm">
                {filteredProducts.length} Artikel
              </span>
            </div>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                <X className="w-4 h-4" />
                Filter zurücksetzen
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Categories Dropdown */}
            <div className="relative">
              <button onClick={() => setShowCategoryDropdown(!showCategoryDropdown)} className="w-full rounded-lg border border-gray-200 p-3 pr-10 bg-white focus:outline-none focus:border-[#91d2e3] transition-colors text-left">
                Kategorien ({selectedCategories.length === 0 ? 'Alle' : selectedCategories.length})
              </button>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              {showCategoryDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {categories.map(category => (
                    <label key={category} className="flex items-center p-3 hover:bg-gray-100">
                      <input type="checkbox" checked={selectedCategories.includes(category) || (category === 'Alle' && selectedCategories.length === 0)} onChange={() => handleCategoryChange(category)} className="mr-2" />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Cities Dropdown */}
            <div className="relative">
              <button onClick={() => setShowCityDropdown(!showCityDropdown)} className="w-full rounded-lg border border-gray-200 p-3 pr-10 bg-white focus:outline-none focus:border-[#B4E4E8] transition-colors text-left">
                Kanton/Ort ({selectedCities.length === 0 ? 'Alle' : selectedCities.length})
              </button>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              {showCityDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {cities.map(city => (
                    <label key={city} className="flex items-center p-3 hover:bg-gray-100">
                      <input type="checkbox" checked={selectedCities.includes(city) || (city === 'Alle' && selectedCities.length === 0)} onChange={() => handleCityChange(city)} className="mr-2" />
                      {city}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filters */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Preis</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">CHF</span>
                <input type="number" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} placeholder="Min" className="w-20 rounded-lg border border-gray-200 p-3 focus:outline-none focus:border-[#B4E4E8] transition-colors" />
                <span className="text-gray-600">CHF</span>
                <input type="number" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} placeholder="Max" className="w-20 rounded-lg border border-gray-200 p-3 focus:outline-none focus:border-[#B4E4E8] transition-colors" />
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
                  <div className="p-4 relative h-48">
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
                        <span>{product.location}</span>
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

