"use client";

import { useState } from "react";
import axios from "axios";
import NavBar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../app/redux/features/auth/authSlice";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Bitte füllen Sie alle Felder aus.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(
        userLoggedIn({
          user: response.data.user,
          token: response.data.accessToken,
        })
      );

      toast.success("Erfolgreich angemeldet!");
      router.push("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      const errorMessage =
        err.response?.data?.message ||
        "Fehler beim Anmelden. Bitte überprüfen Sie Ihre Anmeldedaten.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <main className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden">
          {/* Left side - Login Form */}
          <div className="w-full max-w-sm space-y-6 bg-white p-8 rounded-l-2xl">
            <div>
              <h2 className="text-2xl font-bold text-[#333]">Welcome back</h2>
              <p className="mt-2 text-sm text-gray-500">
                Login to your Mama Marketplace account
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-Mail-Adresse
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-[#ffa7b3] focus:outline-none focus:ring-1 focus:ring-[#ffa7b3]"
                  placeholder="E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Passwort
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-[#ffa7b3] focus:outline-none focus:ring-1 focus:ring-[#ffa7b3]"
                  placeholder="Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#ffa7b3] focus:ring-[#ffa7b3]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forget-password"
                  className="text-sm text-[#ffa7b3] hover:text-[#ff9fb8]"
                >
                  Passwort vergessen?
                </Link>
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-3">
                  <div className="text-sm text-red-600">{error}</div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-lg px-4 py-2 text-sm font-medium ${
                  loading
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#ffa7b3] text-white hover:bg-[#ff9fb8]"
                } focus:outline-none focus:ring-2 focus:ring-[#ffa7b3] focus:ring-offset-2`}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>

       
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-[#ffa7b3] hover:text-[#ff9fb8]"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Right side - Image */}
          <div className="hidden w-full bg-[#ffa7b3] md:block rounded-r-2xl">
            <div className="relative h-full w-full">
              <Image
                src="https://mama-marketplace.nicolasgrimm.ch/wp-content/uploads/2024/08/Mamamarket-1.png"
                alt="Login illustration"
        
                width={900}
                height={900}
                className="rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

