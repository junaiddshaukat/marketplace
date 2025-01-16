"use client";

import { useState, useEffect } from "react";
import { Search, Edit, Trash, Plus, MapPin } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';


export default function MyAds() {
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("active");
  const [activatingAdId, setActivatingAdId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [adToDelete, setAdToDelete] = useState(null);
  
  const router = useRouter();
  useEffect(() => {
    async function fetchAds() {
      setIsLoading(true);
      setError(null);
      try {
        let endpoint = `${process.env.NEXT_PUBLIC_API_URL}/product/`;

        switch (activeTab) {
          case "active":
            endpoint += "getMyActiveAds";
            break;
          case "Need Refresh":
            endpoint += "getMyNeed_to_refresh_ads";
            break;
          case "inactive":
            endpoint += "getMyInactiveAds";
            break;
          default:
            endpoint += "getMyActiveAds";
        }

        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        });

        setAds(response.data);
      } catch (error) {
        if (error.response) {
          console.error("Server responded with:", error.response.data);
          console.error("Status code:", error.response.status);
          setError(
            `Error: ${error.response.data.message || "Failed to fetch ads"}`
          );
        } else if (error.request) {
          console.error("No response received:", error.request);
          setError("Error: No response from server");
        } else {
          console.error("Error setting up request:", error.message);
          setError("Error: Failed to fetch ads");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchAds();
  }, [activeTab]);

  const openDeleteModal = (ad) => {
    setAdToDelete(ad);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (adToDelete) {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/product/delete-product/${adToDelete._id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          }
        );
        setAds(ads.filter((ad) => ad._id !== adToDelete._id));
        toast.success("Ad deleted successfully");
      } catch (error) {
        console.error("Error deleting ad:", error);
        toast.error("Failed to delete ad");
      }
    }
    setDeleteModalOpen(false);
    setAdToDelete(null);
  };

  const activateAd = async (adId) => {
    setActivatingAdId(adId);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/product/activateAd/${adId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
        toast.success("Ad activated successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error activating ad:", error);
      toast.error("Failed to activate ad");
    } finally {
      setActivatingAdId(null);
    }
  };
  const handleCardClick = (productId) => {
    router.push(`/product-details/${productId}`);
  };

  const filteredAds = ads.filter(
    (ad) =>
      ad.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold text-[#4A5567]">Meine Anzeigen  </h1>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <div className="relative flex-grow sm:flex-grow-0">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Suchen"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-2 focus:border-[#9DD5E3] focus:outline-none sm:w-64"
            />
          </div>
          <Link
            href="/dashboard/add-ad"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#9DD5E3] px-4 py-2 text-white hover:bg-[#8bc5d3] transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            Produkt hinzufügen 

          </Link>
        </div>
      </div>

      <div className="border-b border-gray-200 overflow-x-auto">
        <div className="flex space-x-8">
          {["active", "inactive"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 px-1 py-4 text-sm font-medium capitalize whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab
                  ? "border-[#9DD5E3] text-[#9DD5E3]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {error && <div className="text-red-500 text-center py-4">{error}</div>}

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9DD5E3] mx-auto"></div>
        </div>
      ) : filteredAds.length > 0 ? (
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          
          {filteredAds.map((ad) => (
            <div
            onClick={() => handleCardClick(ad._id)}
              key={ad._id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col"
            >
              <div className="relative flex-shrink-0">
                <div className='p-4'>
                  <Image
                    src={ad.images[0].url || "/placeholder.svg"}
                    alt={ad.title}
                    width={300}
                    height={200}
                    className="h-48 w-full rounded-2xl object-cover"
                  />
                </div>
                
              </div>
              <div className="p-4 pt-0 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-[#4A5567]">{ad.title}</h3>
                <p className="mb-1 text-lg font-bold text-[#FF6B8B]">CHF {ad.price.toFixed(2)}</p>
                <p className="mb-4 text-sm leading-relaxed text-[#9CA5B4] flex-grow line-clamp-2">{ad.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center rounded-full bg-[#FFE6F0] px-3 py-1.5">
                    <MapPin className="w-3 h-4 mr-1 text-[#FF6B8B]" />
                    <span className="text-sm font-medium text-[#FF6B8B]">{ad.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {activeTab === "inactive" && (
                      <button
                        onClick={() => activateAd(ad._id)}
                        disabled={activatingAdId === ad._id}
                        className="rounded-full bg-[#E6F0FF] px-3 py-1.5 text-sm font-medium text-[#6B9FFF] transition-all duration-200 hover:bg-[#d9e7ff] disabled:opacity-50"
                      >
                        {activatingAdId === ad._id ? "Activating..." : "Activate"}
                      </button>
                    )}
                    <Link
                      href={`/dashboard/edit-post/${ad._id}`}
                      className="rounded-full bg-[#E6F0FF] p-2 text-[#6B9FFF] hover:bg-[#d9e7ff] transition-colors duration-200"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDeleteModal(ad);
                      }}
                      className="rounded-full bg-[#FFE6F0] p-2 text-[#FF6B8B] hover:bg-[#ffd9e6] transition-colors duration-200"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-[#9DD5E3]/10 p-3">
            <Plus className="h-8 w-8 text-[#9DD5E3]" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Noch keine Produkte</h2>
          <p className="mt-2 text-center text-gray-500">
          Beginnen Sie mit der Erstellung Ihrer ersten Anzeige. Es ist einfach und dauert nur wenige Minuten!
          </p>
          <Link
            href="/dashboard/add-ad"
            className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#9DD5E3] px-6 py-3 font-medium text-white hover:bg-[#8bc5d3] transition-colors duration-200"
          >
            <Plus className="h-5 w-5" />
            Erstes Produkt hinzufügen
          </Link>
        </div>
      )}

      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Anzeigenbestätigung löschen            </h2>
            <p className="mb-6">Sind Sie sicher, dass Sie die Anzeige löschen möchten "{adToDelete?.title}"?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-200"
              >
               Stornieren
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              >
                  Löschen

              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

