"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Eye, EyeOff } from 'lucide-react';
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [formData, setFormData] = useState({
    user: {
      name: "",
      email: "",
      password: "",
      _confirmEmail: "",
      _confirmPassword: "",
      contactInformation: {
        email: {
          value: "",
          visibility: "public"
        },
        phone: {
          value: "",
          visibility: "public"
        },
        address: "",
        location: "",
        website: "",
      },
    },
  });

  const validateEmail = () => {
    if (formData.user.email !== formData.user._confirmEmail) {
      setErrors((prev) => ({
        ...prev,
        email: "Emails do not match",
      }));
      return false;
    }
    setErrors((prev) => ({
      ...prev,
      email: "",
    }));
    return true;
  };

  const validatePassword = () => {
    if (formData.user.password !== formData.user._confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        password: "Passwords do not match",
      }));
      return false;
    }
    setErrors((prev) => ({
      ...prev,
      password: "",
    }));
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes("contactInformation")) {
      const [section, subsection, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          contactInformation: {
            ...prev.user.contactInformation,
            [subsection]: field
              ? {
                  ...prev.user.contactInformation[subsection],
                  [field]: value,
                }
              : value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          [name]: value,
        },
      }));
    }
    
    // Clear the specific field error
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleVisibilityChange = (e, field) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        contactInformation: {
          ...prev.user.contactInformation,
          [field]: {
            ...prev.user.contactInformation[field],
            visibility: value
          }
        }
      }
    }));
  };

  const validateField = (name, value) => {
    if (!value || (typeof value === 'string' && value.trim() === "")) {
      const errorKey = name.includes("contactInformation") 
        ? `user.${name}`
        : name;
      setFieldErrors((prev) => ({ ...prev, [errorKey]: "This field is required" }));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setError("");

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    let isFormValid = isEmailValid && isPasswordValid;

    // Validate all required fields
    const requiredFields = [
      { name: "name", value: formData.user.name },
      { name: "email", value: formData.user.email },
      { name: "password", value: formData.user.password },
      { name: "_confirmEmail", value: formData.user._confirmEmail },
      { name: "_confirmPassword", value: formData.user._confirmPassword },
      { name: "contactInformation.email.value", value: formData.user.contactInformation.email.value },
      { name: "contactInformation.phone.value", value: formData.user.contactInformation.phone.value },
      { name: "contactInformation.address", value: formData.user.contactInformation.address },
      { name: "contactInformation.location", value: formData.user.contactInformation.location },
    ];

    requiredFields.forEach(({ name, value }) => {
      if (!validateField(name, value)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      return;
    }

    setIsLoading(true);
    try {
      const submissionData = {
        user: {
          name: formData.user.name,
          email: formData.user.email,
          password: formData.user.password,
          contactInformation: {
            email: formData.user.contactInformation.email,
            phone: formData.user.contactInformation.phone,
            address: formData.user.contactInformation.address,
            location: formData.user.contactInformation.location,
            website: formData.user.contactInformation.website || "",
          },
        },
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/registration`,
        submissionData,
        {
          withCredentials: true,
        }
      );
      const paymentLink = response.data?.gateway?.link;
      if (paymentLink) {
        window.location.href = paymentLink;
      } else {
        setError('Payment link not provided in the response.');
        setTimeout(() => router.push('/register'), 3000);
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Something went wrong');
      setTimeout(() => router.push('/register'), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          {/* Features Panel */}
          <div className="bg-white rounded-lg border p-6 h-fit">
            <div className="mb-4">
              <h3 className="text-pink-600 font-semibold">Mama Marketplace</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">CHF 25</span>
                <span className="text-gray-600 ml-1">/year</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Premium Plan</p>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>3 Users</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Up to 5 collections/month</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>5% sales fees for the platform</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>5% resale royalty</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Complete your Registration</h2>
                </div>

                {/* Account Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Account Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-1 font-medium">
                          Username <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className={`w-full p-2.5 border rounded-lg  focus:border-pink-500 ${
                            fieldErrors["name"] ? "border-red-500" : "border-gray-300"
                          }`}
                          value={formData.user.name}
                          onChange={handleChange}
                        />
                        {fieldErrors["name"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldErrors["name"]}
                          </p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1 font-medium">
                            Password <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              required
                              className={`w-full p-2.5 border rounded-lg  focus:border-pink-500 ${
                                fieldErrors["password"] ? "border-red-500" : "border-gray-300"
                              }`}
                              value={formData.user.password}
                              onChange={handleChange}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                          {fieldErrors["password"] && (
                            <p className="text-red-500 text-sm mt-1">
                              {fieldErrors["password"]}
                            </p>
                          )}
                          {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.password}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block mb-1 font-medium">
                            Confirm Password <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="password"
                            name="_confirmPassword"
                            required
                            className={`w-full p-2.5 border rounded-lg  focus:border-pink-500 ${
                              fieldErrors["_confirmPassword"] ? "border-red-500" : "border-gray-300"
                            }`}
                            value={formData.user._confirmPassword}
                            onChange={handleChange}
                          />
                          {fieldErrors["_confirmPassword"] && (
                            <p className="text-red-500 text-sm mt-1">
                              {fieldErrors["_confirmPassword"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-1 font-medium">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            className={`w-full p-2.5 border rounded-lg  focus:border-pink-500 ${
                              fieldErrors["email"] ? "border-red-500" : "border-gray-300"
                            }`}
                            value={formData.user.email}
                            onChange={handleChange}
                          />
                          {fieldErrors["email"] && (
                            <p className="text-red-500 text-sm mt-1">
                              {fieldErrors["email"]}
                            </p>
                          )}
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block mb-1 font-medium">
                            Confirm Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="_confirmEmail"
                            required
                            className={`w-full p-2.5 border rounded-lg  focus:border-pink-500 ${
                              fieldErrors["_confirmEmail"] ? "border-red-500" : "border-gray-300"
                            }`}
                            value={formData.user._confirmEmail}
                            onChange={handleChange}
                          />
                          {fieldErrors["_confirmEmail"] && (
                            <p className="text-red-500 text-sm mt-1">
                              {fieldErrors["_confirmEmail"]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-1 font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="email"
                            name="contactInformation.email.value"
                            required
                            className={`flex-grow p-2.5 border rounded-lg focus:border-pink-500 ${
                              fieldErrors["user.contactInformation.email.value"] ? "border-red-500" : "border-gray-300"
                            }`}
                            value={formData.user.contactInformation.email.value}
                            onChange={handleChange}
                          />
                          <select
                            className="p-2.5 border border-gray-300 rounded-lg focus:border-pink-500"
                            value={formData.user.contactInformation.email.visibility}
                            onChange={(e) => handleVisibilityChange(e, "email")}
                          >
                           <option value="public">Public</option>
                            <option value="private">Private</option>
                          </select>
                        </div>
                        {fieldErrors["user.contactInformation.email.value"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldErrors["user.contactInformation.email.value"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="tel"
                            name="contactInformation.phone.value"
                            required
                            className={`flex-grow p-2.5 border rounded-lg focus:border-pink-500 ${
                              fieldErrors["user.contactInformation.phone.value"] ? "border-red-500" : "border-gray-300"
                            }`}
                            value={formData.user.contactInformation.phone.value}
                            onChange={handleChange}
                          />
                          <select
                            className="p-2.5 border border-gray-300 rounded-lg focus:border-pink-500"
                            value={formData.user.contactInformation.phone.visibility}
                            onChange={(e) => handleVisibilityChange(e, "phone")}
                          >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                          </select>
                        </div>
                        {fieldErrors["user.contactInformation.phone.value"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldErrors["user.contactInformation.phone.value"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">
                          Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactInformation.address"
                          required
                          className={`w-full p-2.5 border rounded-lg focus:border-pink-500 ${
                            fieldErrors["user.contactInformation.address"] ? "border-red-500" : "border-gray-300"
                          }`}
                          value={formData.user.contactInformation.address}
                          onChange={handleChange}
                        />
                        {fieldErrors["user.contactInformation.address"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldErrors["user.contactInformation.address"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactInformation.location"
                          required
                          className={`w-full p-2.5 border rounded-lg focus:border-pink-500 ${
                            fieldErrors["user.contactInformation.location"] ? "border-red-500" : "border-gray-300"
                          }`}
                          value={formData.user.contactInformation.location}
                          onChange={handleChange}
                        />
                        {fieldErrors["user.contactInformation.location"] && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldErrors["user.contactInformation.location"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-1 font-medium">Website</label>
                        <input
                          type="url"
                          name="contactInformation.website"
                          className="w-full p-2.5 border border-gray-300 rounded-lg focus:border-pink-500"
                          value={formData.user.contactInformation.website}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? "Processing..." : "Register"}
                </button>
              </div>
            </form>
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


