import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jahirul Islam - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in Django, Laravel, React, and REST APIs. Explore projects, skills, and experience of Jahirul Islam.",
  keywords: [
    "Full Stack Developer",
    "Jahirul Islam",
    "Django Developer",
    "Laravel Developer",
    "React Developer",
    "REST API",
    "Web Developer Bangladesh",
    "Portfolio"
  ],
  authors: [{ name: "Jahirul Islam", url: "https://my-portfolio-smoky-xi-63.vercel.app" }],
  metadataBase: new URL("https://my-portfolio-smoky-xi-63.vercel.app"),

  openGraph: {
    title: "Jahirul Islam - Full Stack Developer Portfolio",
    description:
      "Explore projects and skills of Jahirul Islam, Full Stack Developer specialized in Django, Laravel, and React.",
    url: "https://my-portfolio-smoky-xi-63.vercel.app",
    siteName: "Jahirul Islam Portfolio",
    images: [
      {
        url: "/images/Jahir.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jahirul Islam - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in Django, Laravel, React, and REST APIs.",
    images: ["/images/Jahir.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}