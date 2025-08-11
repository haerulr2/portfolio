import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from 'next'; // Import Metadata type

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { // Add Metadata type
  metadataBase: new URL('https://haerulr2.com'),
  title: "Haerul Fajar - Frontend Developer | Building Fast, Clean, Functional Interfaces",
  description: "I'm a frontend developer focused on building fast, clean, and functional interfaces. Currently working at a software house in Subang, delivering web solutions for real-world businesses.",
  // generator: "Mohamed Djoudir",
  // Add manifest and icons metadata
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png", // Assumes apple-touch-icon.png exists in /public
  },
  // Add Open Graph metadata
  openGraph: {
    title: "Haerul Fajar - Frontend Developer | Building Fast, Clean, Functional Interfaces",
    description: "I'm a frontend developer focused on building fast, clean, and functional interfaces. Currently working at a software house in Jakarta, delivering web solutions for real-world businesses.",
    url: "https://haerulr2.com", // Replace with your actual website URL
    siteName: "Haerul Fajar",
    images: [
      {
        url: "/image.png", // Path to your image in the public folder
        width: 1200, // Optional: Specify image width
        height: 630, // Optional: Specify image height
        alt: "Haerulr2 Website Preview", // Optional: Alt text for the image
      },
    ],
    locale: "en_US", // Optional: Specify locale
    type: "website", // Optional: Specify content type
  },
  // Optional: Add Twitter card metadata if needed
  twitter: {
    card: "summary_large_image",
    title: "Haerul Fajar - Frontend Developer | Building Fast, Clean, Functional Interfaces",
    description: "I'm a frontend developer focused on building fast, clean, and functional interfaces. Currently working at a software house in Subang, delivering web solutions for real-world businesses.",
    // creator: "@yourTwitterHandle", // Optional: Your Twitter handle
    images: ["/image.png"], // Path to your image in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning >
      <body className={`${inter.className} bg-black mx-auto max-w-[1440px]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

