import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteUrl } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "STC — Shubham Trading Co. | Premium Construction Materials Supplier",
  description:
    "Trusted supplier of Fly Ash, PCE-based concrete admixtures, and construction fibers in Navi Mumbai. Quality materials for infrastructure projects. Contact us for a quote.",
  keywords:
    "fly ash supplier navi mumbai, construction chemicals supplier, concrete admixture supplier, fiber reinforcement supplier, construction material supplier mumbai, fly ash dealer mumbai, concrete fiber supplier",
  openGraph: {
    title: "STC — Shubham Trading Co.",
    description:
      "Trusted supplier of Fly Ash, Concrete Admixtures, and Construction Fibers. Serving Navi Mumbai & Mumbai region.",
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Shubham Trading Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "STC — Shubham Trading Co.",
    description:
      "Trusted supplier of Fly Ash, Concrete Admixtures, and Construction Fibers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="google-site-verification" content="9EB-OitpV0HAAiEohW7pz1ntlOodkCcueFZSZhtVwkE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shubham Trading Co.",
              image: `${siteUrl}/stc.png`,
              "@id": `${siteUrl}/#business`,
              url: siteUrl,
              telephone: "+919167399697",
              email: "shubhamtradingcompany19@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "B2/3, Room No. 20, Sector 15, Vashi",
                addressLocality: "Navi Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400703",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.0346,
                longitude: 72.9908,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [],
              taxID: "27ABKPW4972C1Z8",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Superplast 509 - PCE Based Hyperplasticizer",
              description:
                "High-performance PCE-based admixture for high-grade concrete applications",
              category: "Construction Chemicals",
              manufacturer: {
                "@type": "Organization",
                name: "Shubham Trading Co.",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What products does Shubham Trading Co. supply?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We supply Fly Ash, PCE-based concrete admixtures (Superplast 509, 401, 320), and construction fibers (FiberTech GF and FiberTech PP).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is Shubham Trading Co. located?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are based in Vashi, Navi Mumbai – 400703 and serve the Mumbai region and across India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I get a quote for construction materials?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Contact us via phone at +91 9167399697, email at shubhamtradingcompany19@gmail.com, or WhatsApp for a quick quote.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-t border-white/10 md:hidden">
          <div className="flex items-center">
            <a
              href="https://wa.me/919167399697?text=Hi%2C%20I%27d%20like%20more%20info%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 text-white text-xs font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+919167399697"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange text-white text-xs font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/919167399697?text=Hi%2C%20I%27d%20like%20more%20info%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-navy-light text-white text-xs font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
              </svg>
              Get Quote
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
