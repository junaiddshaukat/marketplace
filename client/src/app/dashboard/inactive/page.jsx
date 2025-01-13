"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
export default function InactiveAds() {
  const [inactiveAds, setInactiveAds] = useState([]);
  const [activatingAdId, setActivatingAdId] = useState(null);

  useEffect(() => {
    fetchInactiveAds();
  }, []);

  async function fetchInactiveAds() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product/getMyInactiveAds`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );

      console.log("Response data:", response);
      setInactiveAds(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
        setInactiveAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
      } else {
        // alert(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error activating ad:", error);
    } finally {
      setActivatingAdId(null);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          My Inactive Ads
        </h1>

        {inactiveAds.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">You have no inactive ads.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {inactiveAds.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  {/* <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  /> */}
                  <Image
                    src={item.images[0].url}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-xl text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">{item.location}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-[#FF9EAA] bg-[#FF9EAA]/10 rounded-full">
                      {item.category}
                    </span>
                    <div className="text-xl font-bold text-[#FF9EAA]">
                      $ {item.price}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <p>{formatDate(item.createdAt)}</p>
                    <button
                      className="px-4 py-2 bg-transparent text-[#FF9EAA] border border-[#FF9EAA] rounded-md hover:bg-[#FF9EAA] hover:text-white transition-colors duration-300 disabled:opacity-50"
                      onClick={() => activateAd(item._id)}
                      disabled={activatingAdId === item._id}
                    >
                      {activatingAdId === item._id
                        ? "Activating..."
                        : "Activate"}
                    </button>
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
