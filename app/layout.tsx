import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentGate from "@/components/ConsentGate";
import { CONSENT_COOKIE, site } from "@/lib/data";

export const metadata: Metadata = {
  title: { default: "Mountain Chambers – Law Firm in Kolkata", template: "%s – Mountain Chambers" },
  description: site.tagline,
  metadataBase: new URL(site.url),
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Read on the server so returning visitors never see the popup flash.
  const accepted = (await cookies()).get(CONSENT_COOKIE)?.value === "1";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <ConsentGate accepted={accepted} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
