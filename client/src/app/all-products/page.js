'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from "../../components/navbar"
import AllProductsPage from "../../components/all-products-page"
import Footer from "../../components/footer"

export default function Page() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/product/getall-products")
        const fetchedProducts = response.data.ads
          .filter(product => product.status !== 'InActive') // Filter out 'InActive' products
          .map(product => ({
            id: product._id,
            name: product.title,
            price: product.price,
            image: product.images.length > 0 ? product.images[0] : "/placeholder.svg?height=200&width=200",
            description: product.description,
            category: product.category,
            status: product.status,
            expiryDate: new Date(product.expiryDate),
            views: product.views,
            contactDetailsVisible: product.contactDetailsVisible,
            location: product.location,
            createdAt: new Date(product.createdAt),
            updatedAt: new Date(product.updatedAt),
            tags: product.tags,
            likes: product.likes // Get the number of likes by counting the emails in the 'likes' array
          }))
          .sort((a, b) => b.likesCount - a.likesCount) // Sort by the length of 'likes' array in descending order
          
        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <AllProductsPage products={products} />
      <Footer />
    </div>
  )
}
