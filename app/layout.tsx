import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';
import { CookieConsent } from '@/components/CookieConsent';
import { Poppins } from "next/font/google";
import "./globals.css";

import type { ReactNode } from "react";
import Footer from '@/components/Footer';

interface RootLayoutProps {
  children: ReactNode;
}



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shadcn Cookie Consent",
  description:
    "Beautifully designed, customizable cookie consent for web built on top of shadcn/ui and TailwindCSS!",
  keywords: "shadcn, cookie consent, nextjs, tailwind, ui, components",
  author: "r2hu1",
  robots: "index, follow",
  icons: ["/logo.png"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#09090b",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" >
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <CookieConsent />
          < Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}