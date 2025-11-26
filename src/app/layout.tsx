import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Footer, Header } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#10b981', // Color verde que parece usar la aplicación
};

export const metadata: Metadata = {
  metadataBase: new URL('https://verleon.com'), // Reemplazar con la URL real cuando esté en producción
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.company.name}`
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.company.name, url: 'https://verleon.com' }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-BO': '/es-bo',
    },
  },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    type: "website",
    locale: "es_BO",
    siteName: siteConfig.company.name,
    url: 'https://verleon.com',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de crear esta imagen
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    site: '@verleon', // Reemplazar con el handle real de Twitter
    creator: '@verleon',
    images: ['/twitter-image.jpg'], // Asegúrate de crear esta imagen
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
    google: 'verificación-google', // Reemplazar con el código real de verificación
    yandex: 'verificación-yandex', // Si es necesario
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <Header/>
        <JsonLd type="Organization" />
        {children}
        <Footer />
      </body>
    </html>
  );
}