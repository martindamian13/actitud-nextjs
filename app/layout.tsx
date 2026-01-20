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
  metadataBase: new URL('https://edificioactitud.com.py'),
  title: {
    default: "Actitud - Edificio Corporativo en Luque, Paraguay",
    template: "%s | Actitud Edificio Corporativo",
  },
  description: "Edificio corporativo moderno en Luque, Paraguay. Oficinas de planta libre desde 170m², amenities exclusivos, coworking, sala de conferencias y rooftop. A minutos del aeropuerto y Conmebol.",
  keywords: [
    "edificio corporativo",
    "oficinas en luque",
    "oficinas paraguay",
    "alquiler oficinas",
    "planta libre",
    "coworking luque",
    "amenities",
    "sala de conferencias",
    "campo grande luque",
    "oficinas cerca aeropuerto",
  ],
  authors: [{ name: "Actitud" }],
  creator: "Actitud",
  publisher: "Actitud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Actitud - Edificio Corporativo en Luque",
    description: "Donde la productividad y el bienestar se encuentran. Oficinas de planta libre, amenities exclusivos, ubicación estratégica.",
    url: "https://edificioactitud.com.py",
    siteName: "Actitud Edificio Corporativo",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Actitud - Edificio Corporativo",
    description: "Oficinas de planta libre en Luque, Paraguay. Amenities exclusivos y ubicación estratégica.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'x3zi7h1P5r1bZ8edDWutlUAyCkbZF9WzYPFFmL3sLP8',
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
