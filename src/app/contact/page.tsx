"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactText from "@/components/sections/contact/ContactText";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactText
          text="Kain na! Visit Jack's Grill Today"
          animationType="entrance-slide"
          background={{
            variant: "radial-gradient",
          }}
          useInvertedBackground={false}
          buttons={[
            {
              text: "📍 Get Directions",
              href: "https://maps.app.goo.gl/VdgBfnSPccLyE3Kt5",
            },
            {
              text: "📞 Call Us",
              href: "tel:+639123456789",
            },
          ]}
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
              testimonial: "Masarap at mura! Best silog sa Caloocan. Laging masarap ang bawat order ko dito sa Jack's Grill!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-bearded-man_1098-22109.jpg",
              imageAlt: "Maria Santos - Satisfied customer",
            },
            {
              id: "2",
              name: "Juan dela Cruz",
              handle: "@juan_dc",
              testimonial: "Sulit na silog sa Caloocan! Ang presyo ay affordable pero ang lasa ay premium quality. Highly recommended!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-hispanic-woman-standing-with-arms-crossed-gesture-street_839833-27487.jpg",
              imageAlt: "Juan dela Cruz - Happy customer",
            },
            {
              id: "3",
              name: "Ana Reyes",
              handle: "@ana_r",
              testimonial: "Perfect breakfast spot for busy mornings. Fast service, fresh food, and napakasarap! I come here every week.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-chinese-woman-smiling-confident-standing-street_839833-7633.jpg",
              imageAlt: "Ana Reyes - Loyal customer",
            },
            {
              id: "4",
              name: "Ramon Cruz",
              handle: "@ramon_c",
              testimonial: "Ang best grill meals sa Dagat-Dagatan! Ang garlic rice at tapa ay consistently masarap. 10/10!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-asian-woman_1098-21999.jpg",
              imageAlt: "Ramon Cruz - Regular customer",
            },
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="⭐ Customer Reviews"
          tagAnimation="slide-up"
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