'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Subscription() {
  const [isRedirectLoading, setIsRedirectLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        withCredentials: true,
      });
      const userData = response.data.session;
      setUserId(userData._id); // Save user ID
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, []);

  const handleRedirect = async () => {
    setIsRedirectLoading(true);
    try {
      if (!userId) {
        console.error('User ID not found');
        setIsRedirectLoading(false);
        return;
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payment/getSubscription`, { id: userId });
      console.log(response);
      
      if (response.data.link) {
        router.push(response.data.link);
      } else {
        console.error('No redirect link received');
      }
    } catch (error) {
      console.error('Error during redirect:', error?.response?.data?.message || error.message);
    } finally {
      setIsRedirectLoading(false);
    }
  };

  const plan = {
    name: 'Premium',
    price: '25',
    features: [
      'Unlimited Ads',
      'Secure Marketplace',
      'Full Access',
      'Featured Listings',
      'Ad Boost',
    ],
    button: 'You are the Premium User',
    buttonStyle: 'bg-[#9DD5E3] hover:bg-[#8bc5d3] text-white',
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Subscription</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Your Plan</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Current Plan</p>
              <p className="font-medium">{plan.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Billing Cycle</p>
              <p className="font-medium">Yearly</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Plan Details</h2>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="bg-gradient-to-r from-[#9DD5E3] to-[#FF9EAA] p-6 text-white">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="mt-2 opacity-90">Your current subscription plan</p>
          </div>
          <div className="p-6">
            <p className="text-center">
              <span className="text-4xl font-bold">CHF {plan.price}</span>
              <span className="text-gray-600">/year</span>
            </p>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full rounded-lg px-6 py-3 font-medium transition-colors duration-200 ${plan.buttonStyle}`}
              onClick={handleRedirect}
              disabled={isRedirectLoading}
            >
              {isRedirectLoading ? 'Redirecting...' : plan.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
