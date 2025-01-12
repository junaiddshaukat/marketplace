import { Urbanist } from 'next/font/google'
import "./globals.css"
import { Providers } from "./Provider"
import { Toaster } from 'react-hot-toast'

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
})

export const metadata = {
  title: " Mama Marketplace | Dein Schweizer Marktplatz für alles rund ums Mama-Sein",
  description: "Entdecke den Mama Marketplace | der Schweizer Marktplatz für Mamas. Finde die richtigen Produkte für deinen Schatz für nur 25 CHF/Jahr.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  )
}

