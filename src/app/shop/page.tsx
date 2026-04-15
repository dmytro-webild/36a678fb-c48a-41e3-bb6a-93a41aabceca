"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FooterBase from "@/components/sections/footer/FooterBase";
import { useState } from "react";

export default function ShopPage() {
  const navItems = [
    { name: "Work", id: "/#work" },
    { name: "Services", id: "/#services" },
    { name: "Shop", id: "/shop" },
    { name: "About", id: "/#about" },
    { name: "Contact", id: "/#contact" },
  ];

  const products = [
    { id: "1", brand: "Brand A", name: "Premium Headset", price: "$199", rating: 4.8, reviewCount: "(120)", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp" },
    { id: "2", brand: "Brand B", name: "Minimalist Watch", price: "$149", rating: 4.5, reviewCount: "(85)", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp" },
    { id: "3", brand: "Brand A", name: "Smart Speaker", price: "$299", rating: 4.9, reviewCount: "(210)", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp" },
    { id: "4", brand: "Brand C", name: "Ergonomic Chair", price: "$499", rating: 4.7, reviewCount: "(56)", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp" },
  ];

  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={navItems}
        />
        <main className="pt-32 pb-20">
            <ProductCardTwo
                title="Product Catalog"
                description="Explore our curated collection of premium products."
                gridVariant="four-items-2x2-equal-grid"
                animationType="slide-up"
                textboxLayout="default"
                products={products}
            />
        </main>
        <FooterBase
          logoText="Webild"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}