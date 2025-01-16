"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { Heart, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FavoriteAds() {
  const [favoriteAds, setFavoriteAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [useremail, setuseremail] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchFavoriteAds();
  }, []);

  async function fetchFavoriteAds() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product/get-my-FavoriteAds`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );

      setFavoriteAds(response.data.favoriteAds);
      setuseremail(response.data.useremail)
    } catch (error) {
      console.error("Error fetching favorite ads:", error);
      toast.error("Failed to fetch favorite ads");
    } finally {
      setIsLoading(false);
    }
  }

  const removeFromFavorites = async (e, adId) => {
    e.stopPropagation();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/product/like/${adId}`,
        { email: useremail },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setFavoriteAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
        toast.success("Ad removed from favorites");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error removing ad from favorites:", error);
      toast.error("Failed to remove ad from favorites");
    }
  };

  const handleCardClick = (productId) => {
    router.push(`/product-details/${productId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-black mb-8 text-center">
          My Favorite Ads
        </h1>

        {favoriteAds.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">You have no favorite ads yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {favoriteAds.map((item) => (
              <div
                key={item._id}
                onClick={() => handleCardClick(item._id)}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col"
              >
                <div className="relative flex-shrink-0">
                  <button
                    onClick={(e) => removeFromFavorites(e, item._id)}
                    className="absolute right-6 top-6 z-10 rounded-xl bg-white p-2 shadow-sm transition-transform duration-200 hover:scale-110"
                  >
                    <Heart className="h-4 w-4 transition-all duration-300 ease-in-out fill-[#FF6B8B] stroke-[#FF6B8B]" />
                  </button>
                  <div className='p-4'>
                    <Image
                      src={item.images[0].url || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="h-48 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-medium text-[#4A5567]">{item.title}</h3>
                  <p className="mb-1 text-lg font-bold text-[#FF6B8B]">CHF {item.price.toFixed(2)}</p>
                  <p className="mb-4 text-sm leading-relaxed text-[#9CA5B4] flex-grow line-clamp-2">{item.description}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="flex items-center rounded-full bg-[#FFE6F0] px-3 py-1.5">
                      <MapPin className="w-3 h-4 mr-1 text-[#FF6B8B]" />
                      <span className="text-sm font-medium text-[#FF6B8B]">{item.location}</span>
                    </div>
                    <Link
                      href={`/product-details/${item._id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded-full bg-[#E6F0FF] px-5 py-1.5 text-sm font-medium text-[#6B9FFF] transition-all duration-200 hover:bg-[#d9e7ff] w-full sm:w-auto text-center"
                    >
                      Details anzeigen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

