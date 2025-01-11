'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Subscription() {
  const [isRedirectLoading, setIsRedirectLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [name, setname] = useState('');
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
      setUserId(userData.payment_obj_id); // Save user ID
      setname(userData.name || 'User'); // Save name
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
      
      if (response.data) {
        router.push(response.data);
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
    button: 'Manage Subscription',
    buttonStyle: 'bg-[#9DD5E3] hover:bg-[#8bc5d3] text-white',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Subscription</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#9DD5E3] to-[#FF9EAA] p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Account Information</h2>
            <p className="opacity-90">Welcome back, {name}!</p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-600">name</p>
              <p className="font-medium">{name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">User ID</p>
              <p className="font-medium">{userId || 'Loading...'}</p>
            </div>
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

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#9DD5E3] to-[#FF9EAA] p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{plan.name} Plan</h2>
            <p className="opacity-90">Your current subscription</p>
          </div>
          <div className="p-6">
            <p className="text-center mb-6">
              <span className="text-5xl font-bold">CHF {plan.price}</span>
              <span className="text-gray-600">/year</span>
            </p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full rounded-lg px-6 py-3 font-medium transition-colors duration-200 ${plan.buttonStyle}`}
              onClick={handleRedirect}
              disabled={isRedirectLoading}
            >
              {isRedirectLoading ? 'Redirecting...' : plan.button}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Subscription Benefits</h2>
        <p className="text-gray-600 mb-4">
          As a Premium subscriber, you enjoy exclusive benefits that enhance your experience on our platform. 
          Here's what you get with your current plan:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Post unlimited ads to reach a wider audience</li>
          <li>Access our secure marketplace for safe transactions</li>
          <li>Enjoy full access to all platform features</li>
          <li>Get your listings featured for increased visibility</li>
          <li>Boost your ads to appear at the top of search results</li>
        </ul>
      </div>
    </div>
  );
}

