"use client";

import { useState, useEffect } from "react";
import { Search, Filter, MoreVertical, Edit, Trash, Plus } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

export default function MyAds() {
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("active");
  const [activatingAdId, setActivatingAdId] = useState(null);

  useEffect(() => {
    async function fetchAds() {
      setIsLoading(true);
      setError(null);
      try {
        let endpoint = `${process.env.NEXT_PUBLIC_API_URL}/product/`;

        // Adjust endpoint based on active tab
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

        console.log("Response data:", response);
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
  }, [activeTab]); // Refetch when tab changes

  const deleteAd = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/product/delete-product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );
      setAds(ads.filter((ad) => ad._id !== id));
      toast.success("Ad deleted successfully");
    } catch (error) {
      console.error("Error deleting ad:", error);
      toast.error("Failed to delete ad");
    }
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

  // Filter ads based on search term
  const filteredAds = ads.filter(
    (ad) =>
      ad.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <h1 className="text-2xl font-bold">My Ads</h1>
      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <div className="relative flex-grow sm:flex-grow-0">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search ads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-2 focus:border-[#9DD5E3] focus:outline-none sm:w-64"
          />
        </div>
        <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filter
        </button>
        <Link
          href="/dashboard/add-ad"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#9DD5E3] px-4 py-2 text-white hover:bg-[#8bc5d3] transition-colors duration-200"
        >
          <Plus className="h-4 w-4" />
          Add New Ad
        </Link>
      </div>
    </div>

    {/* Tabs */}
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

    {/* Error State */}
    {error && <div className="text-red-500 text-center py-4">{error}</div>}

    {/* Loading State */}
    {isLoading ? (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9DD5E3] mx-auto"></div>
      </div>
    ) : filteredAds.length > 0 ? (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAds.map((ad) => (
          <div
            key={ad._id}
            className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
          >
            <Image
              src={ad.images[0].url || "/placeholder.svg"}
              alt={ad.title || "Placeholder"}
              width={400}
              height={192}
              objectFit="cover"
              className="h-48 w-full"
            />

            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{ad.title}</h3>
                  <p className="text-sm text-gray-500">{ad.category}</p>
                </div>
                <div className="relative">
                  <button className="rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
                    <MoreVertical className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-semibold text-[#FF9EAA]">
                  ${ad.price}
                </div>
                <div className="flex items-center gap-2">
                  {activeTab === "inactive" && (
                    <button
                      onClick={() => activateAd(ad._id)}
                      disabled={activatingAdId === ad._id}
                      className="rounded-lg px-3 py-2 text-white bg-[#9DD5E3] hover:bg-[#8bc5d3] transition-colors duration-200 disabled:opacity-50"
                    >
                      {activatingAdId === ad._id ? "Activating..." : "Activate"}
                    </button>
                  )}
                  <button
                    onClick={() => deleteAd(ad._id)}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Trash className="h-5 w-5" />
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
        <h2 className="mt-4 text-xl font-semibold">No Ads Yet</h2>
        <p className="mt-2 text-center text-gray-500">
          Get started by creating your first ad. It's easy and only takes a few
          minutes!
        </p>
        <Link
          href="/dashboard/add-ad"
          className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#9DD5E3] px-6 py-3 font-medium text-white hover:bg-[#8bc5d3] transition-colors duration-200"
        >
          <Plus className="h-5 w-5" />
          Create Your First Ad
        </Link>
      </div>
    )}
  </div>
  );
}
