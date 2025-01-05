'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import axios from "axios";
import { userRegistration } from "../redux/features/auth/authSlice";
import { userTemporary } from "../redux/features/auth/authSlice";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const [errors, setErrors] = useState({
    email: '',
    password: '',
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
        email: "",
        phone: "",
        address: "",
        location: "",
        website: "",
      },
    },
  });

  const validateEmail = () => {
    if (formData.user.email !== formData.user._confirmEmail) {
      setErrors(prev => ({
        ...prev,
        email: 'Emails do not match',
      }));
      return false;
    }
    setErrors(prev => ({
      ...prev,
      email: '',
    }));
    return true;
  };

  const validatePassword = () => {
    if (formData.user.password !== formData.user._confirmPassword) {
      setErrors(prev => ({
        ...prev,
        password: 'Passwords do not match',
      }));
      return false;
    }
    setErrors(prev => ({
      ...prev,
      password: '',
    }));
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [section, subsection, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [subsection]: field
            ? { ...prev[section][subsection], [field]: value }
            : value,
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
    // Clear field error when user starts typing
    setFieldErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateField = (name, value) => {
    if (value.trim() === '') {
      setFieldErrors(prev => ({ ...prev, [name]: 'This field is required' }));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    let isFormValid = isEmailValid && isPasswordValid;

    // Validate all required fields
    const requiredFields = [
      "user.name",
      "user.email",
      "user.password",
      "user._confirmEmail",
      "user._confirmPassword",
      "user.contactInformation.email",
      "user.contactInformation.phone",
      "user.contactInformation.address",
      "user.contactInformation.location",
    ];

    requiredFields.forEach((field) => {
      const value = field.split('.').reduce((obj, key) => obj[key], formData);
      if (!validateField(field, value)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      return;
    }

    setIsLoading(true); // Start loading
    try {
      const submissionData = {
        user: {
          name: formData.user.name,
          email: formData.user.email,
          password: formData.user.password,
          contactInformation: formData.user.contactInformation,
        },
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/registration`, submissionData);
      toast.success(response.data.message);
      dispatch(userTemporary(response.data.user));
      dispatch(
        userRegistration({
          token: response.data.activationToken,
        })
      );

      router.push("/verify");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false); // End loading
    }
  };
  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Account Information */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-6">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Username <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full p-2 border rounded-lg ${fieldErrors['user.name'] ? 'border-red-500' : ''}`}
                  value={formData.user.name}
                  onChange={handleChange}
                />
                {fieldErrors['user.name'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user.name']}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      className={`w-full p-2 border rounded-lg ${fieldErrors['user.password'] ? 'border-red-500' : ''}`}
                      value={formData.user.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      Show Password
                    </button>
                  </div>
                  {fieldErrors['user.password'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user.password']}</p>}
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label className="block mb-1">Confirm Password <span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    name="_confirmPassword"
                    required
                    className={`w-full p-2 border rounded-lg ${fieldErrors['user._confirmPassword'] ? 'border-red-500' : ''}`}
                    value={formData.user._confirmPassword}
                    onChange={handleChange}
                  />
                  {fieldErrors['user._confirmPassword'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user._confirmPassword']}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    className={`w-full p-2 border rounded-lg ${fieldErrors['user.email'] ? 'border-red-500' : ''}`}
                    value={formData.user.email}
                    onChange={handleChange}
                  />
                  {fieldErrors['user.email'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user.email']}</p>}
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block mb-1">Confirm Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="_confirmEmail"
                    required
                    className={`w-full p-2 border rounded-lg ${fieldErrors['user._confirmEmail'] ? 'border-red-500' : ''}`}
                    value={formData.user._confirmEmail}
                    onChange={handleChange}
                  />
                  {fieldErrors['user._confirmEmail'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user._confirmEmail']}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="user.contactInformation.email"
                  required
                  className={`w-full p-2 border rounded-lg ${fieldErrors['user.contactInformation.email'] ? 'border-red-500' : ''}`}
                  value={formData.user.contactInformation.email}
                  onChange={handleChange}
                />
                {fieldErrors['user.contactInformation.email'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user.contactInformation.email']}</p>}
              </div>
              <div>
                <label className="block mb-1">Phone <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="user.contactInformation.phone"
                  required
                  className={`w-full p-2 border rounded-lg ${fieldErrors['user.contactInformation.phone'] ? 'border-red-500' : ''}`}
                  value={formData.user.contactInformation.phone}
                  onChange={handleChange}
                />
                {fieldErrors['user.contactInformation.phone'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user.contactInformation.phone']}</p>}
              </div>
              <div>
                <label className="block mb-1">Address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="user.contactInformation.address"
                  required
                  className={`w-full p-2 border rounded-lg ${fieldErrors['user.contactInformation.address'] ? 'border-red-500' : ''}`}
                  value={formData.user.contactInformation.address}
                  onChange={handleChange}
                />
                {fieldErrors['user.contactInformation.address'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user.contactInformation.address']}</p>}
              </div>
              <div>
                <label className="block mb-1">Location <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="user.contactInformation.location"
                  required
                  className={`w-full p-2 border rounded-lg ${fieldErrors['user.contactInformation.location'] ? 'border-red-500' : ''}`}
                  value={formData.user.contactInformation.location}
                  onChange={handleChange}
                />
                {fieldErrors['user.contactInformation.location'] && <p className="text-red-500 text-sm mt-1">{fieldErrors['user.contactInformation.location']}</p>}
              </div>
              <div>
                <label className="block mb-1">Website</label>
                <input
                  type="url"
                  name="user.contactInformation.website"
                  className="w-full p-2 border rounded-lg"
                  value={formData.user.contactInformation.website}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

