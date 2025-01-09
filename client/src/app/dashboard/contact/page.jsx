'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ContactInformation() {
  const [formData, setFormData] = useState({
    name: '',
    email: { value: '', visibility: 'private' },
    phone: { value: '', visibility: 'private' },
    address: '',
    location: '',
    website: '',
  });

  const [errors, setErrors] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      if (response.data.success) {
        const { contactInformation, name } = response.data.session;
        setFormData({
          name: name || '',
          email: {
            value: contactInformation?.email?.value || '',
            visibility: contactInformation?.email?.visibility || 'private',
          },
          phone: {
            value: contactInformation?.phone?.value || '',
            visibility: contactInformation?.phone?.visibility || 'private',
          },
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
    if (!formData.email.value.trim()) newErrors.email = 'Please fill in the email address.';
    if (!formData.phone.value.trim()) newErrors.phone = 'Please fill in the phone number.';
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
        `${process.env.NEXT_PUBLIC_API_URL}/user/updateUserContactInformation`,
        {
          name: formData.name,
          contactInformation: {
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            location: formData.location,
            website: formData.website,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success('Contact information updated successfully');
      } else {
        toast.error('Failed to update contact information');
      }
    } catch (error) {
      console.error('Error updating contact information:', error);
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

          {[{ field: 'email', label: 'Email Address' }, { field: 'phone', label: 'Phone Number' }].map(({ field, label }) => (
            <div className="mb-6" key={field}>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {label} <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={formData[field].value}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field]: { ...formData[field], value: e.target.value },
                    })
                  }
                  className={`flex-grow rounded-lg border ${
                    errors[field] ? 'border-red-500' : 'border-gray-300'
                  } px-4 py-2 focus:border-[#9DD5E3] focus:outline-none`}
                />
                <select
                  value={formData[field].visibility}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field]: { ...formData[field], visibility: e.target.value },
                    })
                  }
                  className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
                >
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
              </div>
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {[{ field: 'location', label: 'Location' }, { field: 'address', label: 'Address' }].map(({ field, label }) => (
            <div className="mb-6" key={field}>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
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
