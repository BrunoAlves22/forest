import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className="bg-verde-800 font-sans py-3 antialiased"
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
