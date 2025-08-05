import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/CookieConsent";
import { ThemeClientWrapper } from "@/components/ThemeClientWrapper";
import { Poppins } from "next/font/google";
import "./globals.css";

import type { ReactNode } from "react";

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
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <ThemeClientWrapper>
            <Header />
            {children}
            <CookieConsent />
            <Footer />
          </ThemeClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
