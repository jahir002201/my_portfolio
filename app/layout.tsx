import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface Author {
  name: string;
  url: string;
}

interface Metadata {
  title: string;
  description: string;
  keywords: string;
  authors: Author[];
  viewport: string;
  robots: string;
  openGraph: {
    title: string;
    description: string;
    images: { url: string }[];
    url: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: { url: string }[];
  };
}

export const metadata: Metadata = {
  title: "Jahirul Islam - Full Stack Developer Portfolio",
  description: "Explore the portfolio of Jahirul Islam, a Full Stack Developer specializing in JavaScript, React, Node.js. Discover my projects, skills, and expertise in web development.",
  keywords: "Full Stack Developer, JavaScript, React, Node.js, Web Development, Portfolio, Projects, Skills, Jahirul Islam",
  authors: [{ name: "Jahirul Islam", url: "https://my-portfolio-smoky-xi-63.vercel.app" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Jahirul Islam - Full Stack Developer Portfolio",
    description: "Explore the portfolio of Jahirul Islam, a Full Stack Developer specializing in JavaScript, React, Node.js. Discover my projects, skills, and expertise in web development.",
    images: [{ url: "/images/Jahir.jpg" }],
    url: "https://my-portfolio-smoky-xi-63.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahirul Islam - Full Stack Developer Portfolio",
    description: "Explore the portfolio of Jahirul Islam, a Full Stack Developer specializing in JavaScript, React, Node.js. Discover my projects, skills, and expertise in web development.",
    images: [{ url: "/images/Jahir.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <head>
        <title>{metadata.title}</title>
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.openGraph.url} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
     
    </html>
  );
}
