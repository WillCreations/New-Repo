import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { fetchUserDetails } from "@/app/(Engine)/actions/fetchUserDetails";
import { ProductCartProvider } from "../contextProvider/Prod";
import { CarouselContextProvider } from "../contextProvider/CarouselContextProvider";
import { FooterContextProvider } from "../contextProvider/FooterContext";
import Provider from "../contextProvider/Provider";
import FooterLinks from "./components/FooterLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Eureka",
    template: "%s | Eureka",
  },
  icons: {
    icon: "./Eureka.ico",
  },
  description:
    "Eureka.com, Igwe Princewill, Portfolio Website, Graphics, web development, react, next js, vercel app, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className}  bg-black`}>
          <FooterContextProvider>
            <ProductCartProvider>
              <CarouselContextProvider>            
                <Navbar Action={fetchUserDetails} />
                {children}
                <Footer/>
              </CarouselContextProvider>
            </ProductCartProvider>
          </FooterContextProvider>
        </body>
      </Provider>
    </html>
  );
}
