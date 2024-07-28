import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/navbar/Navbar";  // Adjust the import path as needed

const inter = Inter({ subsets: ["latin"] });

// This is the title at the top tab and then description
export const metadata: Metadata = {
  title: "Simon | Personal Portfolio",
  description: "Simon is a Java full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
