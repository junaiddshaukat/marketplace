'use client'

import { useState, useEffect } from 'react'
import { Heart, MapPin } from 'lucide-react'
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
    <div className="mb-12 rounded-3xl bg-[#F8FAFF] p-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-medium text-[#4A5567]">{title}</h2>
        <Link
          href={`/all-products?category=${encodeURIComponent(title)}`}
          className="flex items-center text-sm text-[#4A5567] hover:text-gray-900"
        >
          Mehr anzeigen
          <span className="ml-1">»</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => window.location.href = `/product-details/${product._id}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleLikeClick(product._id)
                }}
                className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-sm transition-transform duration-200 hover:scale-110"
              >
                <Heart
                  className={`h-5 w-5 transition-all duration-300 ease-in-out ${
                    likedProducts.includes(product._id)
                      ? 'fill-[#FF6B8B] stroke-[#FF6B8B]'
                      : 'fill-transparent stroke-[#9CA5B4] hover:stroke-[#4A5567]'
                  }`}
                />
              </button>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={200}
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-medium text-[#4A5567]">{product.title}</h3>
              <p className="mb-3 text-lg font-bold text-[#FF6B8B]">CHF {product.price.toFixed(2)}</p>
              <p className="mb-4 text-sm leading-relaxed text-[#9CA5B4]">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-full bg-[#FFE6F0] px-3 py-1.5">
                    <MapPin className="w-3 h-4 mr-1 text-[#FF6B8B]" />
                    <span className="text-sm font-medium text-[#FF6B8B]">{product.location}</span>
                  </div>
                </div>
                <Link
                  href={`/product-details/${product._id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full bg-[#E6F0FF] px-5 py-1.5 text-sm font-medium text-[#6B9FFF] transition-all duration-200 hover:bg-[#d9e7ff]"
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

