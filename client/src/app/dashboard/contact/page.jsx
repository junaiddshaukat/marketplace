'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ContactInformation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    website: '',
  });

  const [errors, setErrors] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      if (response.data.success) {
        const { contactInformation, name } = response.data.session;
        setFormData({
          name: name || '',
          email: contactInformation?.email || '',
          phone: contactInformation?.phone || '',
          address: contactInformation?.address || '',
          location: contactInformation?.location || '',
          website: contactInformation?.website || '',
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please fill in your name.';
    if (!formData.email.trim()) newErrors.email = 'Please fill in the email address.';
    if (!formData.phone.trim()) newErrors.phone = 'Please fill in the phone number.';
    if (!formData.location.trim()) newErrors.location = 'Please fill in the location.';
    if (!formData.address.trim()) newErrors.address = 'Please fill in the address.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.put(
        'http://localhost:8000/user/updateUserContactInformation',
        { 
          name: formData.name,
          contactInformation: {
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            location: formData.location,
            website: formData.website,
          }
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        // alert('Contact information updated successfully');
        toast.success('Contact information updated successfully');
      } else {
        // alert('Failed to update contact information');
        toast.error('Failed to update contact information');
      }
    } catch (error) {
      console.error('Error updating contact information:', error);
      // alert(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contact Information</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          {/* Name field */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } px-4 py-2 focus:border-[#9DD5E3] focus:outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {[
            { field: 'email', label: 'Email Address' },
            { field: 'phone', label: 'Phone Number' },
            { field: 'location', label: 'Location' },
            { field: 'address', label: 'Address' },
          ].map(({ field, label }) => (
            <div className="mb-6" key={field}>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                className={`w-full rounded-lg border ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                } px-4 py-2 focus:border-[#9DD5E3] focus:outline-none`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {/* Website (Optional) */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Website (Optional)
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#9DD5E3] px-6 py-2 text-white hover:bg-[#8bc5d3]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

