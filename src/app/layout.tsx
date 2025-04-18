import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Physio on Wheels - Accessible Physical Therapy",
  description: "Pascal offers in-home physical therapy in North Vancouver, West Vancouver, the Sea to Sky Corridor up to Squamish, and virtual care across BC. He specialises in chronic pain, neurological disorders, post-surgical rehabilitation, and geriatrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
