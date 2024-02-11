import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Shadcn Cookie COnsent",
  description: "Beautifully designed, customizable cookie consent for web built on top of shadcn-ui!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
