import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
    <html lang="es" className={poppins.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
