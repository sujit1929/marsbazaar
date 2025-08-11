import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./provider/query-provider"; // Import LanguageProvider
import { LanguageProvider } from "./provider/LanguageContext";
import { AuthProvider } from "./context/AuthContext";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Move `metadata` here (This is a Server Component)
export const metadata: Metadata = {
  title: "Mars.in | Your Ultimate E-commerce Destination",
  description:
    "Discover the future of online shopping at Mars.in. From latest gadgets to stylish fashion, we bring premium products right to your doorstep.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AuthProvider>{/* Wrap with AuthProvider */}
        <QueryProvider> {/* Wrap with QueryClientProvider */}
          <LanguageProvider> {/* Wrap with LanguageProvider */}
            {children}
          </LanguageProvider>
        </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
