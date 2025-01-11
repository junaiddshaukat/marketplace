import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white mx-6 md:mx-[132px] rounded-2xl mb-5 py-8 px-4 md:px-12">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 mb-8 md:mb-12">
          {/* Left section */}
          <div className="max-w-md text-center md:text-left">
            <Image
              src="https://res.cloudinary.com/junaidshaukat/image/upload/v1735666004/Untitled_design_2_uilhby.png"
              alt="Baby Icon"
              width={170}
              height={170}
              className="mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm leading-relaxed">
              Wir schaffen einen sicheren Marktplatz für alle Produkte, die dein
              kleiner Schatz benötigt.
            </p>
          </div>

          {/* Middle section - Social Links */}
          <div className="flex gap-4 mt-6 order-3 md:order-2">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
          </div>

          {/* Right section - Navigation */}
          <div className="flex flex-col items-center md:items-end gap-2 order-2 md:order-3">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Startseite
            </Link>
            <Link
              href="/all-products"
              className="hover:text-gray-300 transition-colors"
            >
              Produkte
            </Link>
            <Link
              href="/subscription"
              className="hover:text-gray-300 transition-colors"
            >
              Subscription
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <Link
              href="/impressum"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              AGB's
            </Link>
          </div>
          <p className="text-sm">© 2025 Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}
