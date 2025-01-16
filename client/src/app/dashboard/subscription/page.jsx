'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { User, CreditCard, Crown, Calendar, CheckCircle, Heart } from 'lucide-react';

export default function Subscription() {
  const [isRedirectLoading, setIsRedirectLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState('');
  const [exp, setExp] = useState('');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        withCredentials: true,
      });
      const userData = response.data.session;
      setUserId(userData.payment_obj_id);
      setName(userData.name || 'User');
      setExp(new Date(userData.paymentExpiryDate));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = exp - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [exp]);

  const handleRedirect = async () => {
    setIsRedirectLoading(true);
    try {
      if (!userId) {
        console.error('User ID not found');
        setIsRedirectLoading(false);
        return;
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payment/getSubscription`, { id: userId });
      console.log(response);
      
      if (response.data) {
        router.push(response.data);
      } else {
        console.error('No redirect link received');
      }
    } catch (error) {
      console.error('Error during redirect:', error?.response?.data?.message || error.message);
    } finally {
      setIsRedirectLoading(false);
    }
  };

  const plan = {
    name: 'Mitgliedschaft',
    price: '25',
    features: [
      'Unbegrenzte Anzeigen',
      'Sicherer Marktplatz',
      'Voller Zugang',
      'Hervorgehobene Anzeigen',
      'Anzeige-Boost',
    ],
    button: 'Abonnement verwalten',
    buttonStyle: 'bg-[#E5F4F9] hover:bg-[#d5edf5] text-[#000000]',
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#FFB6C1] rounded-3xl p-8 mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold text-white mb-4">Deine Premium-Mitgliedschaft</h1>
            <p className="text-white/90 text-lg">Verwalte dein Marktplatz-Abonnement und Vorteile</p>
          </div>
          <div className="absolute top-0 right-0 p-4">
            <Heart className="text-white/20 w-32 h-32" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#E5F4F9]">
            <div className="bg-[#E5F4F9] p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#000000]">Informationen zu deinem Konto</h2>
              <p className="text-gray-600">Willkommen zurück, {name}!</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center">
                <User className="text-[#FFB6C1] mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-600">E-Mail Adresse</p>
                  <p className="font-medium text-[#000000]">{name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <CreditCard className="text-[#FFB6C1] mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-600">ID (Für Supportanfragen)</p>
                  <p className="font-medium text-[#000000]">{userId || 'Loading...'}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="text-[#FFB6C1] mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Abrechnungsperiode</p>
                  <p className="font-medium text-[#000000]">Jährlich</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#E5F4F9]">
            <div className="bg-[#E5F4F9] p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#000000]">{plan.name}</h2>
              <p className="text-gray-600">Dein aktuelles Abonnement</p>
            </div>
            <div className="p-6">
              <p className="text-center mb-6">
                <span className="text-5xl font-bold text-[#000000]">CHF {plan.price}</span>
                <span className="text-gray-600">/jahr</span>
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="text-[#FFB6C1] mr-3" size={16} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-lg px-6 py-3 font-medium transition-colors duration-200 ${plan.buttonStyle}`}
                onClick={handleRedirect}
                disabled={isRedirectLoading}
              >
                {isRedirectLoading ? 'Weiterleiten...' : plan.button}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-lg p-8 border border-[#E5F4F9]">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#000000]">Ablauf deines Abonnements</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center bg-[#E5F4F9] rounded-2xl p-4 w-24">
              <p className="text-4xl font-bold text-[#000000]">{countdown.days}</p>
              <p className="text-gray-600 text-sm">Tage</p>
            </div>
            <div className="text-center bg-[#E5F4F9] rounded-2xl p-4 w-24">
              <p className="text-4xl font-bold text-[#000000]">{countdown.hours}</p>
              <p className="text-gray-600 text-sm">Stunden</p>
            </div>
            <div className="text-center bg-[#E5F4F9] rounded-2xl p-4 w-24">
              <p className="text-4xl font-bold text-[#000000]">{countdown.minutes}</p>
              <p className="text-gray-600 text-sm">Minuten</p>
            </div>
            <div className="text-center bg-[#E5F4F9] rounded-2xl p-4 w-24">
              <p className="text-4xl font-bold text-[#000000]">{countdown.seconds}</p>
              <p className="text-gray-600 text-sm">Sekunden</p>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-600">
            Dein Abonnement erneuert sich am: {exp ? exp.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Loading...'}
          </p>
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-lg p-8 border border-[#E5F4F9]">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#000000]">Abonnement-Vorteile</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plan.features.map((feature, index) => (
              <div key={feature} className="flex items-start bg-[#E5F4F9] p-4 rounded-2xl">
                <CheckCircle className="text-[#FFB6C1] mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
