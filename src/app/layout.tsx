import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={poppins.className}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

