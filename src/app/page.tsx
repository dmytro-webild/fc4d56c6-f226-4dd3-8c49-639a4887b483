"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Users, Utensils, Star } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Sarap ng Silog, Presyong Sulit!"
          description="Authentic Filipino grill meals - freshly cooked, affordable, and delicious. Tapsilog, Longsilog, Hotsilog, and more. Located in Dagat-Dagatan, Caloocan."
          tag="🇵🇭 Local Filipino Favorite"
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Order Now", href: "#menu" },
            { text: "Visit Us Today", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/high-angle-egg-bread-slice_23-2148633479.jpg",
              imageAlt:
                "Delicious Filipino silog meal with rice, fried egg, and grilled meat",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/beef-pashtet-national-russian-food-with-leffute-cherry-tomatoes_114579-1154.jpg",
              imageAlt: "Mouth-watering tapsilog - cured beef, rice, and egg",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/noodle-soup-rice-with-meatballs_140725-5348.jpg",
              imageAlt: "Authentic longsilog with Filipino sausage",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/traditional-nasi-lemak-meal-composition_23-2149056822.jpg",
              imageAlt: "Crispy hotsilog with grilled hotdog",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-portrait_1296-433.jpg",
              imageAlt: "Cozy Jack's Grill store interior",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/positive-female-housewife-looks-with-smile-as-makes-sandwiches-watches-funny-video_273609-8918.jpg",
              imageAlt: "Happy customer enjoying Jack's Grill meal",
            },
          ]}
          ariaLabel="Hero section featuring Jack's Grill silog meals"
        />
      </div>

      <div id="featured-products" data-section="featured-products">
        <ProductCardOne
          title="Our Popular Meals"
          description="Discover our most loved silog combinations. Each meal comes with steaming garlic rice, perfectly fried egg, and your choice of grilled protein."
          tag="Bestsellers"
          tagAnimation="slide-up"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          products={[
            {
              id: "tapsilog",
              name: "Tapsilog",
              price: "₱85",
              imageSrc:
                "http://img.b2bpic.net/free-photo/beef-pashtet-national-russian-food-with-leffute-cherry-tomatoes_114579-1154.jpg",
              imageAlt: "Tapsilog - Cured beef, rice, and egg",
            },
            {
              id: "longsilog",
              name: "Longsilog",
              price: "₱90",
              imageSrc:
                "http://img.b2bpic.net/free-photo/noodle-soup-rice-with-meatballs_140725-5348.jpg",
              imageAlt: "Longsilog - Filipino sausage, rice, and egg",
            },
            {
              id: "hotsilog",
              name: "Hotsilog",
              price: "₱75",
              imageSrc:
                "http://img.b2bpic.net/free-photo/traditional-nasi-lemak-meal-composition_23-2149056822.jpg",
              imageAlt: "Hotsilog - Grilled hotdog, rice, and egg",
            },
          ]}
          buttons={[{ text: "View Full Menu", href: "/menu" }]}
          buttonAnimation="slide-up"
          ariaLabel="Featured products section showcasing popular silog meals"
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
              imageSrc:
                "http://img.b2bpic.net/free-photo/high-angle-egg-bread-slice_23-2148633479.jpg",
              imageAlt: "Affordable silog meal",
            },
            {
              id: "fresh",
              title: "Freshly Cooked",
              descriptions: [
                "Every meal is cooked to order using fresh, quality ingredients.",
                "Our grill is always hot and ready to serve you the best tasting food.",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/rice-spices-composition_23-2147894757.jpg",
              imageAlt: "Fresh garlic rice",
            },
            {
              id: "service",
              title: "Fast Service",
              descriptions: [
                "Quick and friendly service. Minimal wait time for your meal.",
                "Perfect for busy mornings and lunch breaks.",
              ],
              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-hand-eating-bread-with-fried-egg_141793-1705.jpg",
              imageAlt: "Sunny side up egg",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          buttons={[{ text: "Visit Our Store", href: "#contact" }]}
          buttonAnimation="slide-up"
          ariaLabel="Why choose Jack's Grill features section"
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
          ariaLabel="Metrics section showing Jack's Grill statistics"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Real testimonials from our happy customers in Caloocan who love our affordable and delicious silog meals."
          testimonials={[
            {
              id: "1",
              name: "Maria Santos",
              handle: "@maria_s",
              testimonial:
                "Masarap at mura! Best silog sa Caloocan. Laging masarap ang bawat order ko dito sa Jack's Grill!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/cheerful-bearded-man_1098-22109.jpg",
              imageAlt: "Maria Santos - Satisfied customer",
            },
            {
              id: "2",
              name: "Juan dela Cruz",
              handle: "@juan_dc",
              testimonial:
                "Sulit na silog sa Caloocan! Ang presyo ay affordable pero ang lasa ay premium quality. Highly recommended!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-beautiful-hispanic-woman-standing-with-arms-crossed-gesture-street_839833-27487.jpg",
              imageAlt: "Juan dela Cruz - Happy customer",
            },
            {
              id: "3",
              name: "Ana Reyes",
              handle: "@ana_r",
              testimonial:
                "Perfect breakfast spot for busy mornings. Fast service, fresh food, and napakasarap! I come here every week.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-chinese-woman-smiling-confident-standing-street_839833-7633.jpg",
              imageAlt: "Ana Reyes - Loyal customer",
            },
            {
              id: "4",
              name: "Ramon Cruz",
              handle: "@ramon_c",
              testimonial:
                "Ang best grill meals sa Dagat-Dagatan! Ang garlic rice at tapa ay consistently masarap. 10/10!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/beautiful-asian-woman_1098-21999.jpg",
              imageAlt: "Ramon Cruz - Regular customer",
            },
            {
              id: "5",
              name: "Rosa Villegas",
              handle: "@rosa_v",
              testimonial:
                "Family favorite na! Sinasama ko ang mga bata ko dito lagi. Affordable, masarap, at mabilis ang service!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5073.jpg",
              imageAlt: "Rosa Villegas - Family customer",
            },
            {
              id: "6",
              name: "Carlos Mendoza",
              handle: "@carlos_m",
              testimonial:
                "Sulit na breakfast option para sa office workers! Jack's Grill ang go-to ko every morning before work.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/cute-girl-blonde-young-pretty-girl-white-shirt-very-excited-something-hands-together_140725-165343.jpg",
              imageAlt: "Carlos Mendoza - Working professional",
            },
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="⭐ Customer Reviews"
          tagAnimation="slide-up"
          ariaLabel="Testimonials section with customer reviews"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Kain na! Visit Jack's Grill Today"
          animationType="entrance-slide"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "📍 Get Directions", href: "https://maps.app.goo.gl/VdgBfnSPccLyE3Kt5" },
            { text: "📞 Call Us", href: "tel:+639123456789" },
          ]}
          ariaLabel="Contact section with directions and call button"
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