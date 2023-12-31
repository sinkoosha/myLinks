"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import { Container } from "@chakra-ui/react";
import { Vazirmatn } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "@/components/Footer/footer";

const vazirmatnFont = Vazirmatn({ subsets: ["latin"] });
const theme = extendTheme({
  styles: {
    global: {
      "html, body, label": {
        fontFamily: vazirmatnFont.style.fontFamily,
        direction: "rtl",
      },
    },
  },
  fonts: {
    heading: vazirmatnFont.style.fontFamily,
    body: vazirmatnFont.style.fontFamily,
  },
  breakpoints: {
    xs: "0em",
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <ChakraProvider theme={theme}>
            <Header />

            {children}
            <Footer />
          </ChakraProvider>
        </main>
      </body>
    </html>
  );
}
