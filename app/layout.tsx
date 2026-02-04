import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDynamicContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "OrbitThink | Future-Ready Software Solutions",
  description: "Pioneering the AI Frontier with Generative AI, Deep Learning, and Neural Networks.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%2300f3ff'/></svg>"
  }
};

import { Providers } from "./providers";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Layouts can be async in Next.js 14
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getDynamicContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeToggle />
          <WhatsAppButton heroContent={content.hero} />
          <Navbar content={content.navbar} />
          <main>{children}</main>
          <Footer content={content.footer} />
        </Providers>
      </body>
    </html>
  );
}
