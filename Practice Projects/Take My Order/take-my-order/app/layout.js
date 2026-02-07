import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Take My Order - Fund your projects with Orders",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col bg-slate-950 text-white`}
      >
        <SessionWrapper>
          <Navbar />
          <main className="min-h-[87vh] bg-[#000000] bg-[radial-gradient (#ffffff33_1px, #00091d_1px)] bg-[size:20px_20px]">
            {children}
          </main>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
