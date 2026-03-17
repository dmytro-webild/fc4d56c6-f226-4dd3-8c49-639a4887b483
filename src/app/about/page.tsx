"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Users, Utensils, Star } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Jack's Grill",
      items: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Visit Us",
      items: [
        {
          label: "📍 Sabalo St, Dagat-Dagatan, Caloocan",
          href: "https://maps.app.goo.gl/VdgBfnSPccLyE3Kt5",
        },
        { label: "📞 Phone: +63 9123 456 789", href: "tel:+639123456789" },
        { label: "⏰ Open Daily: 6am - 9pm", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Google Maps", href: "https://maps.app.goo.gl/VdgBfnSPccLyE3Kt5" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="blurBottom"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Jack's Grill"
          navItems={navItems}
          button={{
            text: "Order Now",
            href: "/contact",
          }}
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <FeatureCardTwentySeven
          title="Why Choose Jack's Grill?"
          description="We've been serving the Caloocan community with authentic Filipino meals that are both affordable and delicious. Every meal is prepared fresh with care and quality ingredients."
          tag="Trusted by the Community"
          tagAnimation="slide-up"
          features={[
            {
              id: "affordable",
              title: "Presyong Sulit",
              descriptions: [
                "Budget-friendly prices without compromising quality. Generous portions that fill you up.",
                "Perfect for students, workers, and families looking for great value meals.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-egg-bread-slice_23-2148633479.jpg?_wi=4",
            },
            {
              id: "fresh",
              title: "Freshly Cooked",
              descriptions: [
                "Every meal is cooked to order using fresh, quality ingredients.",
                "Our grill is always hot and ready to serve you the best tasting food.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/rice-spices-composition_23-2147894757.jpg?_wi=3",
            },
            {
              id: "service",
              title: "Fast Service",
              descriptions: [
                "Quick and friendly service. Minimal wait time for your meal.",
                "Perfect for busy mornings and lunch breaks.",
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/woman-hand-eating-bread-with-fried-egg_141793-1705.jpg?_wi=3",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Visit Our Store",
              href: "/contact",
            },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Trusted by the Community"
          description="Jack's Grill has been serving satisfied customers in Caloocan since day one. Here's what our customers say about us."
          metrics={[
            {
              id: "customers",
              value: "5,000+",
              title: "Happy Customers",
              description: "Served monthly in our Caloocan location",
              icon: Users,
            },
            {
              id: "meals",
              value: "1,000+",
              title: "Meals Daily",
              description: "Fresh silog meals prepared every single day",
              icon: Utensils,
            },
            {
              id: "rating",
              value: "4.8★",
              title: "Google Rating",
              description: "Highly rated by local food enthusiasts",
              icon: Star,
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2024 Jack's Grill. All rights reserved."
          bottomRightText="Serving authentic Filipino silog meals in Caloocan since day one."
        />
      </div>
    </ThemeProvider>
  );
}