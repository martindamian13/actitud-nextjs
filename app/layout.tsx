import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Actitud - Edificio Corporativo",
  description: "Edificio corporativo moderno. Donde la productividad y el bienestar se encuentran. Oficinas de planta libre, amenities exclusivas, ubicación estratégica.",
  keywords: ["edificio corporativo", "oficinas", "planta libre", "coworking", "amenities"],
  authors: [{ name: "Actitud" }],
  openGraph: {
    title: "Actitud - Edificio Corporativo",
    description: "Donde la productividad y el bienestar se encuentran",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
