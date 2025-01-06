'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function ProductSection({ title, products }) {
  const [user, setUser] = useState(null)
  const [likedProducts, setLikedProducts] = useState([])

  // Fetch the user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        })

        if (response.data.success) {
          setUser(response.data.session)
          const userEmail = response.data.session.email
          const likedIds = products
            .filter((product) => product.likes.includes(userEmail))
            .map((product) => product._id)
          setLikedProducts(likedIds)
        }
      } catch (error) {
        // console.error("Error fetching user session or user not logged in:", error)
      }
    }

    fetchUser()
  }, [products])

  const handleLikeClick = async (productId) => {
    if (!user) {
      // alert("Please log in to like this product")
      toast.error("Please login to like the product");
      return
    }

    // Optimistic update
    const updatedLikes = likedProducts.includes(productId)
      ? likedProducts.filter((id) => id !== productId)
      : [...likedProducts, productId]
    setLikedProducts(updatedLikes)

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/product/like/${productId}`,
        { email: user.email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      )
    } catch (error) {
      console.error("Error toggling like:", error)
      // Revert UI if request fails
      setLikedProducts(likedProducts.includes(productId)
        ? [...likedProducts, productId]
        : likedProducts.filter((id) => id !== productId))
    }
  }

  return (
    <div className="mb-12 rounded-xl bg-[#F5F8FF] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <Link
          href={`/all-products?category=${encodeURIComponent(title)}`}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          Mehr anzeigen
          <span className="ml-1">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleLikeClick(product._id)
                }}
                className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow-sm"
              >
                <Heart
                  className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                    likedProducts.includes(product._id)
                      ? 'fill-red-500 stroke-red-500'
                      : 'fill-transparent stroke-gray-400 hover:stroke-gray-600'
                  }`}
                />
              </button>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-semibold text-gray-800">{product.title}</h3>
              <p className="mb-2 text-lg font-bold text-[#FF8A00]">€{product.price}</p>
              <p className="mb-4 text-sm text-gray-500">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-full bg-[#FFE6F0] px-3 py-1">
                    <span className="text-sm text-[#FFB5C7]">{product.location}</span>
                  </div>
                </div>
                <Link
                  href={`/product-details/${product._id}`}
                  className="rounded-full bg-[#E6F0FF] px-4 py-1 text-sm text-[#6B9FFF] transition hover:bg-[#d9e7ff]"
                >
                  Details anzeigen
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


