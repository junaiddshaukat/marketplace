'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
  const [user, setUser] = useState(null)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const checkUserAndLikes = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        });
  
      
  
        if (response.data.success) {
          try {
            const userEmail = response.data.session.email;
            setUser(response.data.session);
  
            
  
            // Check if the product's likes array includes the user's email
            const userHasLiked = product.likes.includes(userEmail);
            setIsLiked(userHasLiked);
  
        
          } catch (innerError) {
            console.error("Error processing user session or likes:", innerError);
          }
        }
      } catch (error) {
        console.error("Error fetching user session or user not logged in:", error);
      }
    };
  
    checkUserAndLikes();
  }, [product.likes]);
   // Depend on product.likes to re-run if likes array changes

  const handleLikeClick = async (e) => {
    e.preventDefault()
    
    if (!user) {
      // alert('Please log in to like this product')
      toast.error('Please log in to like this product')
      return
    }

    // Optimistically update UI
    setIsLiked(!isLiked)

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/product/like/${product.id}`,
        { email: user.email },
        { 
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          },
          withCredentials: true
        }
      )

      // Update the product's likes array in the parent component if needed
      // if (response.data.success) {
      //   // The backend should return the updated likes array
      //   product.likes = response.data.likes
      // }
    } catch (error) {
      // Revert UI if request fails
      // setIsLiked(!isLiked)
      console.error("Error toggling like", error)
    }
  }

  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <div className="relative">
        <button 
          onClick={handleLikeClick}
          className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow-sm transition-transform duration-200 hover:scale-110"
        >
          <Heart 
            className={`h-5 w-5 transition-all duration-300 ease-in-out ${
              isLiked 
                ? 'fill-red-500 stroke-red-500' 
                : 'fill-transparent stroke-gray-400 hover:stroke-gray-600'
            }`}
          />
        </button>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-semibold text-gray-800">{product.name}</h3>
        <p className="mb-2 text-lg font-bold text-[#FF8A00]">€{product.price.toFixed(2)}</p>
        <p className="mb-4 text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full bg-[#FFE6F0] px-3 py-1">
              <span className="text-sm text-[#FFB5C7]">{product.location}</span>
            </div>
          </div>
          <Link 
            href={`/product-details/${product.id}`} 
            className="rounded-full bg-[#E6F0FF] px-4 py-1 text-sm text-[#6B9FFF] transition hover:bg-[#d9e7ff]"
          >
            Details anzeigen
          </Link>
        </div>
      </div>
    </div>
  )
}