import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function SubscriptionPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  px-4 py-12">
      {/* Logo Section */}
      <div className="mb-12 flex items-center gap-2">
        <Image
          src="https://res.cloudinary.com/junaidshaukat/image/upload/v1735666004/Untitled_design_2_uilhby.png"
          alt="Mama Marketplace Logo"
          width={250}
          height={250}
          className="bg-transparent"
        />
        {/* <h1 className="text-2xl font-medium">
          <span className="text-[#FF8BA7]">Mama</span>{' '}
          <span className="text-[#91d2e3]">Marketplace</span>
        </h1> */}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl text-center">
        <h2 className="mb-6 text-3xl font-medium text-[#FF8BA7]">
          Just one more step:
        </h2>
        <p className="mb-4 text-gray-600">
          Why we don&apos;t offer our marketplace for free:
        </p>
        <p className="mb-12 text-gray-600">
          Here are reasons why payment protects against fraudsters. Safe environment...
        </p>

        {/* Pricing Card */}
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-2xl font-medium text-[#FF8BA7]">Per</h3>
          
          {/* Features List */}
          <ul className="mb-8 space-y-4">
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-[#FF8BA7]" />
              <span className="text-gray-600">Unlimited Ads</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-[#FF8BA7]" />
              <span className="text-gray-600">Access to the secure marketplace</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-[#FF8BA7]" />
              <span className="text-gray-600">Fully Functinal Experince</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="h-5 w-5 text-[#FF8BA7]" />
              <span className="text-gray-600">Full Ad Control</span>
            </li>
          </ul>

          {/* Price */}
          <div className="mb-8 text-center">
            <div className="text-4xl font-bold text-gray-900">CHF 25</div>
            <div className="text-gray-500">Per year</div>
          </div>

          {/* Register Link */}
          <Link 
            href="/register"
            className="block w-full rounded-full bg-[#FF8BA7] px-6 py-3 text-center text-lg font-medium text-white transition-colors hover:bg-[#ff7a9a] focus:outline-none focus:ring-2 focus:ring-[#FF8BA7] focus:ring-offset-2"
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  )
}

