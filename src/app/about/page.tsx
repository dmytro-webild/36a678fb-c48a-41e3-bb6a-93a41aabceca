"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Award } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
        />
        <SplitAbout
          title="Our Story"
          description="Born from a passion for digital excellence, Webild started as a small studio with big dreams. Today, we're a team of innovators crafting world-class digital experiences for ambitious brands globally."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp"
          textboxLayout="split"
          useInvertedBackground={false}
          bulletPoints={[
            { title: "Vision", description: "Redefining digital standards through creativity and code.", icon: Award },
            { title: "Mission", description: "Driving growth for brands that refuse to settle for ordinary.", icon: Award },
          ]}
        />
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}