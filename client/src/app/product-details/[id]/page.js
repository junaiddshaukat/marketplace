"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { MapPin, Calendar, MoreVertical, Share2 } from 'lucide-react';
import axios from "axios";
import { useParams, useRouter } from 'next/navigation';
import ImageGallery from "../../../components/image-gallery";
import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader";

const getRandomColor = () => {
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-yellow-500', 'bg-red-500'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function ProductPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
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
      const response = await axios.get("http://localhost:8000/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      setIsLoggedIn(response.data.success || false);
      setCurrentUser(response.data.session);
      // Check if user has payment
      setHasPayment(response.data.session?.payment_obj_id !== null);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setIsLoggedIn(false);
      setHasPayment(false);
    }
  }, []);

  const fetchProductDetails = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/product/getproduct/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProduct(response.data.ad);
      
      // Fetch owner details
      if (response.data.ad.postedBy) {
        const ownerResponse = await axios.get(`http://localhost:8000/user/getseller/${response.data.ad.postedBy}`, {
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
    
      router.push("/login");
    } else if (!hasPayment) {
      // alert("Please subscribe to a plan to view contact details. Visit the payment page to continue.");
      toast.error("Please subscribe to a plan to view contact details. Visit the payment page to continue.");
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
    return <div className="max-h-screen flex items-center justify-center"><Loader/></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Image Gallery */}
          <ImageGallery images={product.images} />

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-2">
                  <button 
                    className="rounded-full p-2 hover:bg-gray-100"
                    onClick={handleShareClick}
                  >
                    <Share2 className="h-6 w-6 text-gray-400" />
                  </button>
                </div>
              </div>
              <p className="text-2xl font-bold text-[#FF8A00] flex items-center gap-2">
                CHF {product.price.toFixed(2)}
                <span className="text-sm text-gray-500">
                  {product.likes?.length || 0} likes
                </span>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#FFE6F0] px-3 py-1 text-sm text-[#FFB5C7]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Publication Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Published on {new Date(product.createdAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {product.location}
              </span>
            </div>

            {/* Seller Info */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                {owner?.avatar?.url ? (
                  <Image
                    src={owner.avatar.url}
                    alt={owner.name || "Seller"}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-medium ${getRandomColor()}`}>
                    {owner?.name?.charAt(0).toUpperCase() || 'S'}
                  </div>
                )}
                <div>
                  <h3 className="font-medium">{owner?.name || "Seller"}</h3>
                </div>
              </div>

              {isLoggedIn && hasPayment ? (
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Contact Information:</h4>
                  <p className="text-gray-600">
                    <strong>Email:</strong> {owner?.contactInformation?.email || "No email provided"}
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> {owner?.contactInformation?.phone || "No phone provided"}
                  </p>
                  <p className="text-gray-600">
                    <strong>Website:</strong> {owner?.contactInformation?.website || "No website provided"}
                  </p>
                </div>
              ) : (
                <button
                  onClick={handleContactClick}
                  className="w-full rounded-lg bg-[#FFB5C7] px-4 py-3 font-medium text-white transition-colors hover:bg-[#ff9fb8]"
                >
                  Show contact information
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copied to Clipboard Notification */}
      {showCopiedNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          URL copied to clipboard!
        </div>
      )}
    </div>
  );
}

