import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: 'EX Hospital',
  description: 'A simple Next.js project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="min-h-screen container mx-auto py-10">
          {children}
          <ToastContainer position="top-right" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
