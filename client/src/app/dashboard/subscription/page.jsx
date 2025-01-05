export default function Subscription() {
  const plan = {
    name: 'Premium',
    price: '25',
    features: [
      'Unlimited Ads',
      'Secure Marketplace',
      'Full Access',
      'Featured Listings',
      'Ad Boost',
    ],
    button: 'You are the Premium User',
    buttonStyle: 'bg-[#9DD5E3] hover:bg-[#8bc5d3] text-white',
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Subscription</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Account Info */}
        {/* <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">My Account</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium">John Doe</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">john.doe@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="font-medium">January 1, 2023</p>
            </div>
          </div>
        </div> */}

        {/* Current Plan */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Your Plan</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Current Plan</p>
              <p className="font-medium">{plan.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Billing Cycle</p>
              <p className="font-medium">Yearly</p>
            </div>
            {/* <div>
              <p className="text-sm text-gray-600">Next Billing Date</p>
              <p className="font-medium">July 1, 2023</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Plan Details */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Plan Details</h2>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="bg-gradient-to-r from-[#9DD5E3] to-[#FF9EAA] p-6 text-white">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="mt-2 opacity-90">Your current subscription plan</p>
          </div>
          <div className="p-6">
            <p className="text-center">
              <span className="text-4xl font-bold">CHF {plan.price}</span>
              <span className="text-gray-600">/year</span>
            </p>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full rounded-lg px-6 py-3 font-medium transition-colors duration-200 ${plan.buttonStyle}`}
            >
              {plan.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

