import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miniiar Rakhimkulov - ML Researcher | AI Enthusiast",
  description: "AI/ML Integration Lead specializing in multi-agent systems, enterprise AI integration, and machine learning solutions. Former Tech Lead at Justmagic LLC, ChatMasters, and Software Engineer at Lyft.",
  keywords: ["AI", "Machine Learning", "Multi-Agent Systems", "AI Integration", "ML Researcher", "Software Engineer", "Miniiar Rakhimkulov"],
  authors: [{ name: "Miniiar Rakhimkulov" }],
  creator: "Miniiar Rakhimkulov",
  publisher: "Miniiar Rakhimkulov",
  openGraph: {
    title: "Miniiar Rakhimkulov - ML Researcher | AI Enthusiast",
    description: "AI/ML Integration Lead specializing in multi-agent systems and enterprise AI solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miniiar Rakhimkulov - ML Researcher | AI Enthusiast",
    description: "AI/ML Integration Lead specializing in multi-agent systems and enterprise AI solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4RHWTY4B9K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4RHWTY4B9K');
          `}
        </Script>

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzExMTExMSIvPgo8dGV4dCB4PSI1IiB5PSIyMiIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiI+TVI8L3RleHQ+Cjwvc3ZnPgo=" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
