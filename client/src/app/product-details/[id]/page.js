'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { MapPin, Calendar, MoreVertical, Share2 } from 'lucide-react';
import axios from "axios";
import { useParams, useRouter } from 'next/navigation';
import ImageGallery from "../../../components/image-gallery";
import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader";
import ContactModal from "../../../components/contact-modal";

const getRandomColor = () => {
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-yellow-500', 'bg-red-500'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function ProductPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [owner, setOwner] = useState(null);
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);
  const [hasPayment, setHasPayment] = useState(false);
  const isInitialMount = useRef(true);
  const { id } = useParams();
  const router = useRouter();

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      setIsLoggedIn(response.data.success || false);
      setCurrentUser(response.data.session);
      setHasPayment(response.data.session?.payment_obj_id !== null);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setIsLoggedIn(false);
      setHasPayment(false);
    }
  }, []);

  const fetchProductDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getproduct/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProduct(response.data.ad);
      
      if (response.data.ad.postedBy) {
        const ownerResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getseller/${response.data.ad.postedBy}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOwner(ownerResponse.data.user);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      fetchUserDetails();
      fetchProductDetails();
    }
  }, [fetchUserDetails, fetchProductDetails]);

  const handleContactClick = () => {
    if (!isLoggedIn) {
      setIsContactModalOpen(true);
    } else if (!hasPayment) {
      toast.error("Please subscribe to a plan to view contact details. Visit the payment page to continue.");
    } else {
      setIsContactModalOpen(true);
    }
  };

  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setShowCopiedNotification(true);
      setTimeout(() => setShowCopiedNotification(false), 2000);
    });
  };

  if (isLoading || !product) {
    return <div className="min-h-screen flex items-center justify-center"><Loader/></div>;
  }

  return (
    <div className="min-h-screen mt-8 bg-white pb-12 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Image Gallery */}
          <ImageGallery images={product.images} />

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">
                {product.title}
              </h1>
              <div className="flex items-center gap-2">
                <button onClick={handleShareClick} className="rounded-full p-2 hover:bg-gray-100">
                  <Share2 className="h-5 w-5 text-gray-400" />
                </button>
                
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Published on {new Date(product.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="mt-2">
              <p className="text-2xl font-bold text-[#FF4400]">
                CHF {product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Seller Info */}
            <div className="mt-6 flex items-center gap-3">
              {owner?.avatar?.url ? (
                <Image
                  src={owner.avatar.url}
                  alt={owner.name || "Seller"}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">
                    {owner?.name?.charAt(0).toUpperCase() || 'S'}
                  </span>
                </div>
              )}
              <div>
                <h3 className="font-medium text-gray-900">{owner?.name || "Admin"}</h3>
              </div>
            </div>

            {/* Contact Button */}
            <button
              onClick={handleContactClick}
              className="w-full bg-[#FF4400] hover:bg-[#E63E00] text-white py-3 rounded-lg font-medium transition-colors"
            >
              Show contact information
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        isLoggedIn={isLoggedIn && hasPayment}
        owner={owner}
      />

      {/* Copied Notification */}
      {showCopiedNotification && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}

