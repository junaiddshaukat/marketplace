import Sidebar from '../../components/sidebar2'


export const metadata = {
  title: 'Mama Marketplace Dashboard',
  description: 'Super admin dashboard for Mama Marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-50 text-gray-800 flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 md:ml-64 overflow-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  )
}

