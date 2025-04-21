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
  title: "Physio on Wheels | Kerala's Premier Mobile Physiotherapy Service",
  description: "MFitt's mobile physiotherapy service brings expert care to your home in Calicut. Specializing in post-surgical rehab, stroke recovery, arthritis management, and geriatric mobility for Kerala's families.",
  keywords: [
    "Mobile physiotherapy Calicut",
    "Home physio Kunnamangalam",
    "Best physiotherapist Kerala",
    "Stroke rehabilitation at home",
    "MFitt physio services",
    "Elderly mobility care Kerala",
    "Pain management physiotherapy"
  ]
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

