"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarByMe from "@/components/navbar";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Loading from "@/components/loader/loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    Aos.init({ duration: 500, once: false, easing: "ease-in-out" }); // Initialize AOS on the client side
    setLoading(false); // Set loading to false after AOS initialization
  }, []); // Ensure the useEffect runs only once on component mount
  
  useEffect(() => {
    // Tawk.io script integration
    const tawkScript = document.createElement("script");
    tawkScript.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/66177997a0c6737bd12a9184/1hr5r5u5r';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;
    document.head.appendChild(tawkScript);
  }, []); 
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Data Skills Hub" />
        <meta
          name="description"
          content="Data Skills Hub: Your premier destination to master data science & analytics. Explore tutorials, resources & projects."
        />
        <meta
          name="keywords"
          content="Data Skills Hub, Data Science, Data Analytics , Data Analytics Tutorials, Projects"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1/2 days" />
        <meta name="author" content="Prayagraj" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,300,0,0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/Icons/favicon.ico" />
      </head>

      <body
        className={` ${inter.className}  bg-[#f7f2f8] scroll-smooth overflow-x-hidden m-0 p-0 box-border`}
      >
        {loading ? (
          // Render skeleton or loading indicator while loading is true
          <div>
            <Loading />
          </div>
        ) : (
          <>
            <ChakraProvider>{children}</ChakraProvider>
            <Footer />
            <script
              src="https://unpkg.com/alpinejs@3.13.7/dist/cdn.min.js"
              defer
            ></script>
          </>
          
        )}
        


      </body>
    </html>
  );
}
