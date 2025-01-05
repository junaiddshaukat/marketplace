'use client';

import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar';
import AllProductsPage from '../../components/all-products-page';
import Footer from '../../components/footer';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getall-products`);
        const fetchedProducts = response.data.ads
          .filter(product => product.status !== 'InActive')
          .map(product => ({
            id: product._id,
            name: product.title,
            price: product.price,
            image: product.images.length > 0 ? product.images[0] : '/placeholder.svg?height=200&width=200',
            description: product.description,
            category: product.category,
            status: product.status,
            expiryDate: product.expiryDate ? new Date(product.expiryDate).toISOString() : null,
            views: product.views,
            contactDetailsVisible: product.contactDetailsVisible,
            location: product.location,
            createdAt: new Date(product.createdAt).toISOString(),
            updatedAt: new Date(product.updatedAt).toISOString(),
            tags: product.tags,
            likesCount: product.likes ? product.likes.length : 0,
          }))
          .sort((a, b) => b.likesCount - a.likesCount);

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return <AllProductsPage products={products} />;
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <AllProducts />
      </Suspense>
      <Footer />
    </div>
  );
}
