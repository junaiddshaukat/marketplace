import { Toaster } from "react-hot-toast";
import Footer from "../../../components/footer";
import NavBar from "../../../components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NavBar/>
        <Toaster/>
       {children}
       <Footer/>
      </body>
    </html>
  )
}
