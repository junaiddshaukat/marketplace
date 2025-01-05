'use client';

import { Camera, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from "next/image";

import axios from 'axios';
import toast from 'react-hot-toast';

export default function EditProfile() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  
  // State for error messages
  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    confirmEmail: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      const userData = response.data.session;
      setFirstName(userData.name);
      setEmail(userData.email);
      setAvatar(userData.avatar?.url || '');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleProfilePictureUpdate = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(1); // Start with 1% to show loading
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target.result;
        try {
          const response = await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/user/update-user-profile-picture`, 
            { avatar: base64Image },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              withCredentials: true,
              onUploadProgress: (progressEvent) => {
                const progress = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                setUploadProgress(progress);
              },
            }
          );
          setAvatar(response.data.user.avatar.url);
          if (response.status === 200) {
            setUploadProgress(100);
            setIsUploading(false);
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        } catch (error) {
          setUploadProgress(0);
          setIsUploading(false);
          console.error('Error updating profile picture:', error);
          // alert(error.response?.data?.message || 'Failed to update profile picture');
          toast.error(error.response?.data?.message || 'Failed to update profile picture');
        }
      };
      reader.readAsDataURL(file);
    }
  }

  const handlePersonalInformationUpdate = async (e) => {
    e.preventDefault()
    let valid = true
    let updatedErrors = { ...errors }

    if (!firstName) {
      updatedErrors.firstName = 'First Name is required!'
      valid = false
    } else {
      updatedErrors.firstName = ''
    }

    if (!email) {
      updatedErrors.email = 'Email is required!'
      valid = false
    } else {
      updatedErrors.email = ''
    }

    if (email !== confirmEmail) {
      updatedErrors.confirmEmail = 'Email confirmation does not match!'
      valid = false
    } else {
      updatedErrors.confirmEmail = ''
    }

    setErrors(updatedErrors)

    if (valid) {
      try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/update-user-info`, 
          { name: firstName, email },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          }
        );
        setFirstName(response.data.user.name);
        setEmail(response.data.user.email);
        // alert('Personal Information Updated Successfully');
        toast.success('Personal Information Updated Successfully');
      } catch (error) {
        console.error('Error updating personal information:', error);
        // alert(error.response?.data?.message || 'Failed to update personal information');
        toast.error(error.response?.data?.message || 'Failed to update personal information');
      }
    }
  }

  const handlePasswordUpdate = async (e) => {
    e.preventDefault()
    let valid = true
    let updatedErrors = { ...errors }

    if (!currentPassword) {
      updatedErrors.currentPassword = 'Current Password is required!'
      valid = false
    } else {
      updatedErrors.currentPassword = ''
    }

    if (!newPassword) {
      updatedErrors.newPassword = 'New Password is required!'
      valid = false
    } else {
      updatedErrors.newPassword = ''
    }

    if (newPassword !== confirmPassword) {
      updatedErrors.confirmPassword = 'Password confirmation does not match!'
      valid = false
    } else {
      updatedErrors.confirmPassword = ''
    }

    setErrors(updatedErrors)

    if (valid) {
      try {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/update-user-password`, 
          { oldPassword: currentPassword, newPassword },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          }
        );
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        // alert('Password Updated Successfully');
        toast.success('Password Updated Successfully');
      } catch (error) {
        console.error('Error updating password:', error);
        // alert(error.response?.data?.message || 'Failed to update password');
         toast.error(error.response?.data?.message || 'Failed to update password');
      }
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Profile</h1>

      <form className="space-y-6">
        {/* Profile Picture */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Profile Picture</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full overflow-hidden relative">
                {isUploading ? (
                  <div className="absolute inset-0 bg-[#9DD5E3] flex items-center justify-center">
                    <Loader2 className="h-8 w-8 text-white animate-spin" />
                  </div>
                ) : avatar ? (
                  <Image
                  src={avatar || '/placeholder-avatar.svg'}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#9DD5E3] text-3xl font-semibold text-white">
                    {firstName.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="mt-2 w-full">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#9DD5E3] rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-500">Uploading...</p>
                    <p className="text-sm font-medium text-[#9DD5E3]">{uploadProgress}%</p>
                  </div>
                </div>
              )}
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 rounded-full bg-white p-2 shadow-md hover:bg-gray-50 cursor-pointer"
              >
                <Camera className="h-4 w-4 text-gray-500" />
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePictureUpdate}
                />
              </label>
            </div>
            <div>
              <h3 className="font-medium">Profile Picture</h3>
              <p className="text-sm text-gray-500">
                Upload a new profile picture or remove the current one
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              {errors.confirmEmail && <p className="text-red-500 text-sm">{errors.confirmEmail}</p>}
            </div>
          </div>
        </div>

        {/* Save Personal Information Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handlePersonalInformationUpdate}
            className="rounded-lg bg-[#9DD5E3] px-6 py-2 font-medium text-white hover:bg-[#8bc5d3]"
          >
            Save Personal Information
          </button>
        </div>

        {/* Password */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Change Password</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Current Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              {errors.currentPassword && <p className="text-red-500 text-sm">{errors.currentPassword}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          </div>
        </div>

        {/* Save Password Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handlePasswordUpdate}
            className="rounded-lg bg-[#9DD5E3] px-6 py-2 font-medium text-white hover:bg-[#8bc5d3]"
          >
            Save Password
          </button>
        </div>
      </form>
    </div>
  )
}

