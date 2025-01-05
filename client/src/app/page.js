'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/navbar";
import HeroSection from "../components/hero-section";
import CategorySection from "../components/category-section";
import ProductSection from "../components/product-section";
import Footer from "../components/footer";
import toast from "react-hot-toast";

export default function Page() {
  const [wohnenProducts, setWohnenProducts] = useState([]);
  const [unterwegsProducts, setUnterwegsProducts] = useState([]);
  const [spielzeugProducts, setSpielzeugProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/product/getall-products`)
      .then((response) => {
        const products = response.data.ads;

        // Filter by category and randomize, then limit to 4 products
        const getRandomProducts = (category) => {
          return products
            .filter((product) =>
              product.category.toLowerCase().includes(category.toLowerCase())
            )
            .sort(() => 0.5 - Math.random()) // Randomize the order
            .slice(0, 4); // Limit to 4 products
        };

        setWohnenProducts(getRandomProducts("wohnen"));
        setUnterwegsProducts(getRandomProducts("unterwegs"));
        setSpielzeugProducts(getRandomProducts("spielzeug"));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
     
      });
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4">
        <HeroSection />
        <CategorySection />
        <ProductSection title="Wohnen" products={wohnenProducts} />
        <ProductSection title="Unterwegs" products={unterwegsProducts} />
        <ProductSection title="Spielzeug" products={spielzeugProducts} />
      </main>
      <Footer />
    </div>
  );
}
