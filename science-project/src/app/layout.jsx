import { Geist, Geist_Mono, Handlee } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Comic_Relief } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import 'katex/dist/katex.min.css';
import AuthContextProvider from "@/auth/authContext";
import { icons } from "lucide-react";

const fontC = Comic_Relief({
  subsets: ["latin"],
  weight:"400",
  variable: "--shadows"
})

const fontSub = Handlee({
  subsets: ["latin"],
  weight:"400",
  variable: "--hand"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "neuro",
  description: "Eksplorasi dunia sains yang inovatif dan menarik secara gratis!",
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    siteName: 'Science Project', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontC.variable} ${fontSub.variable}  antialiased bg-[#030712] font-main`}
      >
        <Analytics />
        <SpeedInsights />
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
        
      </body>
    </html>
  );
}
