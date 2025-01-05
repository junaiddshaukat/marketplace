'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Package, Trash2 } from 'lucide-react'
import SearchBar from '../../../components/SearchBar'
import DeleteModal from '../../../components/DeleteModal'
import StatsCard from '../../../components/StatsCard'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get("http://localhost:8000/product/getall-products")
      const productsData = response.data.ads || [] // Handle the ads array
      setProducts(productsData)
      setFilteredProducts(productsData)
    } catch (error) {
      console.error('Error fetching products:', error)
      setError('Failed to load products')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (query) => {
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  const handleDelete = (product) => {
    setProductToDelete(product)
    setDeleteModalOpen(true)
  }

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/product/delete-product/${productToDelete._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })

      // Update local state after successful deletion
      const updatedProducts = products.filter(p => p._id !== productToDelete._id)
      setProducts(updatedProducts)
      setFilteredProducts(updatedProducts)
      setDeleteModalOpen(false)
    } catch (error) {
      console.error('Error deleting product:', error)
      // You might want to show an error message to the user here
    }
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading products...</div>
  }

  if (error) {
    return <div className="text-red-500 text-center h-64 flex items-center justify-center">{error}</div>
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Products Management</h1>
      <div className="mb-6 md:mb-8">
        <StatsCard title="Total Products" value={products.length} icon={Package} />
      </div>
      <div className="mb-6">
        <SearchBar placeholder="Search products..." onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProducts.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
            <Image 
              src={product.images[0] || 'https://res.cloudinary.com/junaidshaukat/image/upload/v1726802723/uvlyj6jquxlk263zjqzn.png'} 
              alt={product.title} 
              width={200} 
              height={200} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-[#9DD5E3] font-bold mb-4">${product.price?.toFixed(2)}</p>
              <button
                onClick={() => handleDelete(product)}
                className="w-full px-4 py-2 bg-[#FF9EAA] text-white rounded-md hover:bg-[#ff8c9a] transition-colors flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        itemName="product"
      />
    </div>
  )
}

export default ProductsPage

