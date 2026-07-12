import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { FloatingActions } from "@/components/ui/custom/FloatingActions";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dr Mythri Reddy Dental Clinic",
    default: "Dr Mythri Reddy Dental Clinic | Premium Dental Care",
  },
  description: "Advanced Dental Care with Compassion, Precision & Modern Technology. Book your appointment with Dr. Mythri Reddy today.",
  keywords: ["Dentist near me", "Dental Clinic", "Root Canal", "Dental Implants", "Teeth Whitening", "Braces", "Kids Dentist", "Emergency Dentist"],
  openGraph: {
    title: "Dr Mythri Reddy Dental Clinic | Premium Dental Care",
    description: "Advanced Dental Care with Compassion, Precision & Modern Technology.",
    url: "https://drmythrireddydental.com",
    siteName: "Dr Mythri Reddy Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased suppressHydrationWarning`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans selection:bg-clinic-teal/20 selection:text-clinic-navy">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
