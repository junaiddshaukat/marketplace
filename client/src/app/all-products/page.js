'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../../components/navbar";
import AllProductsPage from "../../components/all-products-page";
import Footer from "../../components/footer";
import Loader from "../../components/Loader";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getall-products`);
        const fetchedProducts = response.data.ads
          .filter(product => product.status !== 'InActive') // Filter out 'InActive' products
          .map(product => ({
            id: product._id,
            name: product.title,
            price: product.price,
            image: product.images.length > 0 ? product.images[0] : "/placeholder.svg?height=200&width=200",
            description: product.description,
            category: product.category,
            status: product.status,
            expiryDate: new Date(product.expiryDate),
            views: product.views,
            contactDetailsVisible: product.contactDetailsVisible,
            location: product.location,
            createdAt: new Date(product.createdAt),
            updatedAt: new Date(product.updatedAt),
            tags: product.tags,
            likesCount: product.likes.length // Count likes based on the length of the array
          }))
          .sort((a, b) => b.likesCount - a.likesCount); // Sort by likes count

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {loading ? (
        <div className="flex justify-center min-h-screen items-center h-full">
        <Loader/>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-full">
          <p>{error}</p>
        </div>
      ) : (
        <AllProductsPage products={products} />
      )}
      <Footer />
    </div>
  );
}
