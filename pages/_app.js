import Header from "@/Components/Header";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from 'next/font/google'
import {  useRouter } from "next/router";
import Footer from "@/Components/Footer";
 
const montserrat = Montserrat({
  subsets : ["latin"],
  variable: "--font-mont",
 });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main className={`${montserrat.variable} font-mont w-full min-h-screen`}>
      <Header />
       <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />;
      </AnimatePresence>
      <Footer />
    </main>
  )
}
