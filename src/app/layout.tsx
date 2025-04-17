import type { Metadata } from "next";
import "./globals.css";
import { AosInit } from "@/components/aos-init";

export const metadata: Metadata = {
  title: "Forest",
  description: "Site Forest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className="bg-verde-800 font-sans py-3 antialiased overflow-x-hidden"
        cz-shortcut-listen="true"
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
