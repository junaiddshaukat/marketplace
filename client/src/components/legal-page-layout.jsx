import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const LegalPageLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-[#FF9EAA] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          {children || (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Content coming soon...
              </p>
              <p className="text-gray-400 mt-2">
                This page is currently under construction.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LegalPageLayout

