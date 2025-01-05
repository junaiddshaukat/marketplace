import NavBar from "../../components/navbar";
import AllProductsPage from "../../components/all-products-page";
import Footer from "../../components/footer";

export const dynamic = "force-dynamic"; // Optional: Ensures the page is dynamic if needed

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getall-products`, {
    cache: "no-store", // Disable caching for dynamic content
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();

  return (data.ads || [])
    .filter((product) => product.status !== "InActive")
    .map((product) => ({
      id: product._id,
      name: product.title,
      price: product.price,
      image: product.images.length > 0 ? product.images[0] : "/placeholder.svg",
      description: product.description,
      category: product.category,
      likes: product.likes.length,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }))
    .sort((a, b) => b.likes - a.likes);
}

export default async function Page() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <AllProductsPage products={products} />
      <Footer />
    </div>
  );
}
