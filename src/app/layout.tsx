import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack's Grill - Authentic Filipino Silog Meals Caloocan",
  description: "Sarap ng Silog, Presyong Sulit! Delicious and affordable Filipino grill meals in Dagat-Dagatan, Caloocan. Tapsilog, Longsilog, Hotsilog. Open 6am-9pm daily.",
  keywords: "silog Caloocan, tapsilog, longsilog, hotsilog, Filipino breakfast, grill meals near me, Dagat-Dagatan, affordable silog",
  metadataBase: new URL("https://jacksgrill.ph"),
  alternates: {
    canonical: "https://jacksgrill.ph",
  },
  openGraph: {
    title: "Jack's Grill - Sarap ng Silog, Presyong Sulit!",
    description: "Authentic Filipino grill meals freshly cooked at affordable prices. Visit us in Caloocan today!",
    url: "https://jacksgrill.ph",
    siteName: "Jack's Grill",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/high-angle-egg-bread-slice_23-2148633479.jpg",
        alt: "Delicious Filipino silog meal from Jack's Grill",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack's Grill - Authentic Filipino Silog Meals",
    description: "Sarap ng Silog, Presyong Sulit! Come visit us in Caloocan.",
    images: [
      "http://img.b2bpic.net/free-photo/high-angle-egg-bread-slice_23-2148633479.jpg",
    ],
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
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${publicSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}