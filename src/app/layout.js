// Import CSS
import "../app/css/globals.css";

// Import fonts
import { Geist, Geist_Mono, Funnel_Sans, Silkscreen } from "next/font/google";

// Import components
import Navigation from "../app/components/ui/navigation"
import Footer from "../app/components/ui/footer"

// Configure fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  display: "swap",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "swap",
  weight: "400"
});

export const metadata = {
  title: "david-mould.dev",
  description: "David Mould - Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${funnelSans.variable} ${silkscreen.variable} min-h-full antialiased scroll-smooth bg-gradient-to-br from-[var(--theme-dark)] to-[var(--theme-primary)] bg-no-repeat bg-cover`}
    >
      <body className="min-h-screen flex flex-col min-w-[350px]">
        {/* Main Navigation */}
        <Navigation />
          {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
