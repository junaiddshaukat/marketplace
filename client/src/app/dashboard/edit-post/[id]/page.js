"use client";

import { useState, useEffect, useCallback } from "react";
import { Upload, X } from 'lucide-react';

import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { useParams, useRouter } from 'next/navigation';

export default function EditAd() {
    const { id } = useParams();
    const router = useRouter();
  

  // Separate state for each input
  const [title, setTitle] = useState("");
  const [isUserpaid, setisUserpaid] = useState(true);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]); // Images as base64 encoded strings

  const [tags, setTags] = useState([]); // Tags
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the current user ID and check if the user is logged in
  const fetchUserDetails = useCallback(async () => {
    try {
      const [userResponse, postResponse] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getproduct/${id}`)
      ]);

      if (userResponse.data.session.paymentStatus !== "active") {
        setisUserpaid(false);
      }
      console.log("user idf",userResponse.data.session._id)

      setUserId(userResponse.data.session._id);

      // Set the form data with the fetched post data
      const post = postResponse.data.ad;
      setTitle(post.title);
      setCategory(post.category);
      setLocation(post.location);
      setPrice(post.price.toString());
      setDescription(post.description);
      setTags(post.tags);
      // setOriginalImages(post.images);

      // Convert existing images to base64
      const base64Images = await Promise.all(post.images.map(async (img) => {
        const response = await fetch(img.url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      }));
      setImages(base64Images);

    } catch (error) {
      toast.error("Error loading post data. Please try again.");
      router.push('/dashboard/my-ads');
    } finally {
      setIsLoading(false);
    }
  }, [id, router]);

  useEffect(() => {
    fetchUserDetails(); // Call fetchUserDetails when the component mounts
  }, [fetchUserDetails]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare the data as JSON
      if (isUserpaid) {
        const dataToSubmit = {
          title,
          category,
          location,
          price,
          description,
          images, // Base64 images array
         
          postedBy: userId,
          tags,
        };

        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/product/update-product/${id}`,
          dataToSubmit,
          
        );

        console.log("Ad updated successfully:", response.data);
        router.push("/dashboard/my-ads");
      } else {
        toast.error("Please pay to update the post");
      }
    } catch (error) {
      console.error(
        "Error updating ad:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      const fileList = Array.from(files).map((file) => {
        // Convert each image to base64
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result); // Base64 result
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      // Wait for all images to be converted to base64
      Promise.all(fileList).then((base64Images) => {
        setImages((prev) => [...prev, ...base64Images]);
      });
    }
  };

  const handleImageRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleTagsChange = (e) => {
    const value = e.target.value;
    setTags(value.split(",").map((tag) => tag.trim())); // Convert input string to array of tags
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9DD5E3]"></div>
      </div>
    );
  }


  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Ad</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Basic Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
                  placeholder="Enter ad title"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Kinderwagen">Kinderwagen</option>
                  <option value="Unterwegs">Unterwegs</option>
                  <option value="Kindersitze">Kindersitze</option>
                  <option value="Spielzeug">Spielzeug</option>
                  <option value="Ernährung">Ernährung</option>
                  <option value="Wohnen">Wohnen</option>
                  <option value="Bekleidung">Bekleidung</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
                  required
                >
                  <option value="">Select a canton</option>
                  <option value="Aargau">Aargau</option>
                  <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
                  <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
                  <option value="Basel-Landschaft">Basel-Landschaft</option>
                  <option value="Basel-Stadt">Basel-Stadt</option>
                  <option value="Bern">Bern</option>
                  <option value="Freiburg">Freiburg</option>
                  <option value="Genf">Genf</option>
                  <option value="Glarus">Glarus</option>
                  <option value="Graubünden">Graubünden</option>
                  <option value="Jura">Jura</option>
                  <option value="Luzern">Luzern</option>
                  <option value="Neuenburg">Neuenburg</option>
                  <option value="Nidwalden">Nidwalden</option>
                  <option value="Obwalden">Obwalden</option>
                  <option value="Schaffhausen">Schaffhausen</option>
                  <option value="Schwyz">Schwyz</option>
                  <option value="Solothurn">Solothurn</option>
                  <option value="St. Gallen">St. Gallen</option>
                  <option value="Tessin">Tessin</option>
                  <option value="Thurgau">Thurgau</option>
                  <option value="Uri">Uri</option>
                  <option value="Waadt">Waadt</option>
                  <option value="Wallis">Wallis</option>
                  <option value="Zug">Zug</option>
                  <option value="Zürich">Zürich</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
                  placeholder="Describe your ad"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={tags.join(", ")}
                  onChange={handleTagsChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
                  placeholder="Enter tags"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <h2 className="text-lg font-semibold">Images</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-200 hover:border-[#9DD5E3]">
                <input
                  type="file"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  multiple
                  onChange={handleImageChange}
                  accept="image/*"
                />
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Upload Image</p>
                </div>
              </div>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg bg-gray-100 overflow-hidden group"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Preview"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-1.5 text-gray-500 hover:bg-white opacity-0 group-hover:opacity-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-[#9DD5E3] px-6 py-2 font-medium text-white hover:bg-[#8bc5d3]"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Ad"}
          </button>
        </div>
      </form>
    </div>
  );
}

