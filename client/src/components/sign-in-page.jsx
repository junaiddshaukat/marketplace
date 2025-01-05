'use client';

import { useState } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import Footer from './footer';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn } from '../app/redux/features/auth/authSlice';
import {toast} from 'react-hot-toast';
import Link from 'next/link';

export default function SignInPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Access the user state

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for button
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Bitte füllen Sie alle Felder aus.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:8000/user/login',
        {
          email,
          password,
        },
        {
          withCredentials: true, // Ensures that cookies are sent and received
        }
      );

      // Save user data in Redux store
      dispatch(
        userLoggedIn({
          user: response.data.user,
          token: response.data.accessToken,
        })
      );

      toast.success('Erfolgreich angemeldet!');
      router.push('/dashboard'); // Redirect to the dashboard
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage =
        err.response?.data?.message || 'Fehler beim Anmelden. Bitte überprüfen Sie Ihre Anmeldedaten.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex flex-1 items-center justify-center mt-10 mb-10 bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome to Mama Marketplace
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
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
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#FFB5C7] focus:outline-none focus:ring-[#FFB5C7] sm:text-sm"
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
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#FFB5C7] focus:outline-none focus:ring-[#FFB5C7] sm:text-sm"
                  placeholder="Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#FFB5C7] focus:ring-[#FFB5C7]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Angemeldet bleiben
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forget-password"  className="font-medium text-[#FFB5C7] hover:text-[#ff9fb8]">
                  Passwort vergessen?
                </Link>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`group relative flex w-full justify-center rounded-md border border-transparent ${
                  loading ? 'bg-gray-300' : 'bg-[#FFB5C7]'
                } px-4 py-2 text-sm font-medium text-white ${
                  loading ? 'cursor-not-allowed' : 'hover:bg-[#ff9fb8]'
                } focus:outline-none focus:ring-2 focus:ring-[#FFB5C7] focus:ring-offset-2`}
              >
                {loading ? 'Loading...' : 'Login'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-2 text-gray-500">Oder</span>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <Link
                  href="/register"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  Neues Konto erstellen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
