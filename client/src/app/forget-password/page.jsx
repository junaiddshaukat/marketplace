'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { userTemporary } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ForgetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/forgetpassword`, formData);
      toast.success(response.data.message);
      dispatch(userTemporary(response.data.user));
      dispatch({
        type: 'auth/userRegistration',
        payload: {
          token: response.data.activationToken,
        },
      });
      router.push("/reset-password");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";
      toast.error("Something went wrong!!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link 
            href="/login" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
          
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your name and email to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FFB5C7] focus:outline-none focus:ring-1 focus:ring-[#FFB5C7]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FFB5C7] focus:outline-none focus:ring-1 focus:ring-[#FFB5C7]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-md bg-[#FFB5C7] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ff9fb8] focus:outline-none focus:ring-2 focus:ring-[#FFB5C7] focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}