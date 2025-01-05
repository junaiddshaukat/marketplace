"use client";

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState([
    { title: 'Total Ads', value: 0, icon: '👥', color: 'bg-[#FF9EAA]', path: '/dashboard/my-ads' },
    { title: 'Active Ads', value: 0, icon: '📈', color: 'bg-[#9DD5E3]', path: '/dashboard/my-ads' },
    // { title: 'Need Refresh', value: 0, icon: '🔄', color: 'bg-[#FFB84C]', path: '/dashboard/my-ads' },
    { title: 'Inactive Ads', value: 0, icon: '⭐', color: 'bg-[#FF9EAA]', path: '/dashboard/inactive' },
  ]);
  const [ads, setAds] = useState([]);
  const [activeAds, setActiveAds] = useState([]);

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      setIsLoggedIn(response.data.success);
      setUserData(response.data.session);
      return response.data.session;
    } catch (error) {
      console.error('Error fetching user details:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchUserAds = async (userId) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/find-by-user-id/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const { success, stats, ads, activeAds } = response.data;

      if (success) {
        // const needToRefreshCount = ads.filter(ad => ad.status === 'NeedToRefresh').length;
        const inactiveCount = ads.filter(ad => ad.status === 'InActive').length;
        const activeCount = ads.filter(ad => ad.status === 'Active').length;

        setStats((prevStats) => [
          { ...prevStats[0], value: stats.totalAds },
          { ...prevStats[1], value: activeCount },
          // { ...prevStats[2], value: needToRefreshCount },
          { ...prevStats[2], value: inactiveCount },
        ]);
        setAds(ads);
        setActiveAds(ads.filter(ad => ad.status === 'Active'));
      }
    } catch (error) {
      console.error('Error fetching user ads:', error);
    }
  };

  const handleStatClick = (path) => {
    window.location.href = path;
  };

  useEffect(() => {
    const initializeDashboard = async () => {
      const user = await fetchUserDetails();
      if (user && user._id) {
        fetchUserAds(user._id);
      }
    };

    initializeDashboard();
  }, [fetchUserDetails]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {userData?.name || 'User'}!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-lg bg-white p-6 shadow-sm cursor-pointer"
            onClick={() => handleStatClick(stat.path)}
          >
            <div className="flex items-center">
              <div className={`rounded-full ${stat.color} p-3 text-white`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Your Ads</h2>
        {ads.length > 0 ? (
          <ul className="space-y-2">
            {ads.map((ad) => (
              <li key={ad._id} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium">{ad.title}</h3>
                <p className="text-sm text-gray-600">
                  Status: {' '}
                  <span className={`${
                    ad.status === 'Active' ? 'text-green-600' :
                    'text-red-600'
                  }`}>
                    {ad.status}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven&apos;t posted any ads yet.</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Active Ads</h2>
        {activeAds.length > 0 ? (
          <ul className="space-y-2">
            {activeAds.map((ad) => (
              <li key={ad._id} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium">{ad.title}</h3>
                <p className="text-sm text-gray-600">Status: {ad.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You don&apos;t have any active ads at the moment.</p>
        )}
      </div>

      <div>
        <Link href="/dashboard/add-ad" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create New Ad
        </Link>
      </div>
    </div>
  );
}
