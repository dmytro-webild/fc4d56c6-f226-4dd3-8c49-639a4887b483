"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function MenuPage() {
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
        {
          label: "Google Maps",
          href: "https://maps.app.goo.gl/VdgBfnSPccLyE3Kt5",
        },
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
          button={{ text: "Order Now", href: "#contact" }}
        />
      </div>

      <div id="menu-products" data-section="menu-products">
        <ProductCardOne
          title="Complete Menu - Jack's Grill"
          description="Explore our full range of authentic Filipino silog meals. All meals include steaming garlic rice, perfectly fried egg, and your choice of protein. Affordable, delicious, and freshly cooked every time!"
          tag="Full Selection"
          tagAnimation="slide-up"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "tapsilog",
              name: "Tapsilog",
              price: "₱85",
              imageSrc:
                "http://img.b2bpic.net/free-photo/beef-pashtet-national-russian-food-with-leffute-cherry-tomatoes_114579-1154.jpg",
              imageAlt: "Tapsilog - Cured beef with rice and egg",
            },
            {
              id: "longsilog",
              name: "Longsilog",
              price: "₱90",
              imageSrc:
                "http://img.b2bpic.net/free-photo/noodle-soup-rice-with-meatballs_140725-5348.jpg",
              imageAlt: "Longsilog - Filipino sausage with rice and egg",
            },
            {
              id: "hotsilog",
              name: "Hotsilog",
              price: "₱75",
              imageSrc:
                "http://img.b2bpic.net/free-photo/traditional-nasi-lemak-meal-composition_23-2149056822.jpg",
              imageAlt: "Hotsilog - Grilled hotdog with rice and egg",
            },
          ]}
          buttons={[{ text: "Back to Home", href: "/" }]}
          buttonAnimation="slide-up"
          ariaLabel="Menu section with all silog meal options"
        />
      </div>

      <div id="menu-features" data-section="menu-features">
        <FeatureCardTwentySeven
          title="Menu Highlights"
          description="Each meal is crafted with care using quality ingredients. We believe in serving food that's not just affordable, but truly delicious. Every silog comes prepared to perfection."
          tag="Premium Quality"
          tagAnimation="slide-up"
          features={[
            {
              id: "garlic-rice",
              title: "Fragrant Garlic Rice",
              descriptions: [
                "Our signature sinangag is cooked daily with fresh garlic and quality rice.",
                "Golden, fluffy, and aromatic - the perfect complement to any protein.",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/rice-spices-composition_23-2147894757.jpg",
              imageAlt: "Fragrant garlic rice",
            },
            {
              id: "egg",
              title: "Perfectly Fried Egg",
              descriptions: [
                "Sunny side up eggs cooked to golden perfection with crispy edges.",
                "Fresh eggs daily, ensuring quality and great taste in every meal.",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-hand-eating-bread-with-fried-egg_141793-1705.jpg",
              imageAlt: "Perfectly fried sunny side up egg",
            },
            {
              id: "protein",
              title: "Quality Proteins",
              descriptions: [
                "Choose from tender cured beef (tapa), savory sausage (longganisa), or grilled hotdog.",
                "All proteins are carefully selected and expertly grilled to enhance flavor.",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/high-angle-egg-bread-slice_23-2148633479.jpg",
              imageAlt: "Quality protein selection",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="split"
          useInvertedBackground={true}
          ariaLabel="Menu highlights and signature ingredients"
        />
      </div>

      <div id="menu-contact" data-section="menu-contact">
        <ContactText
          text="Ready to Order? Visit Us or Call Now!"
          animationType="entrance-slide"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📍 Get Directions", href: "https://maps.app.goo.gl/VdgBfnSPccLyE3Kt5" },
            { text: "📞 Call Us", href: "tel:+639123456789" },
          ]}
          ariaLabel="Contact section on menu page"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2024 Jack's Grill. All rights reserved."
          bottomRightText="Serving authentic Filipino silog meals in Caloocan since day one."
          ariaLabel="Site footer with navigation and contact information"
        />
      </div>
    </ThemeProvider>
  );
}