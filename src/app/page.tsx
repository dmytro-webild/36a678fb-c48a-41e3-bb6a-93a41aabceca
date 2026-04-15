"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{ text: "Get Started", href: "/contact" }}
        />
        <div id="hero">
          <HeroSplitDoubleCarousel
            title="We Build Digital Experiences"
            description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers."
            tag="Award-Winning Agency"
            tagIcon={Sparkles}
            tagAnimation="slide-up"
            background={{ variant: "canvas-reveal" }}
            buttons={[
              { text: "Start Project", href: "/contact" },
              { text: "View About", href: "/about" },
            ]}
            buttonAnimation="slide-up"
            carouselPosition="right"
            leftCarouselItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518589-mk7foiz2.jpg", imageAlt: "Creative work 1" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518590-f3r2nerr.jpg", imageAlt: "Creative work 2" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518590-x02za3p3.jpg", imageAlt: "Creative work 3" },
            ]}
            rightCarouselItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518589-mk7foiz2.jpg", imageAlt: "Creative work 4" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518590-f3r2nerr.jpg", imageAlt: "Creative work 5" },
            ]}
            carouselItemClassName="!aspect-[4/5]"
          />
        </div>
        <div id="features">
          <FeatureBento
            title="Our Services"
            description="We offer a full suite of digital services to help your brand stand out online."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            features={[
              {
                title: "SEO",                description: "We optimize your website to rank higher on search engines and drive organic traffic.",                bentoComponent: "marquee",                centerIcon: Search,
                variant: "text",                texts: ["Keywords", "Backlinks", "Meta Tags", "Organic Traffic", "Rankings", "Analytics", "SERP", "Indexing"],
              },
              {
                title: "Web Development",                description: "Custom-built websites that are fast, responsive, and designed to convert.",                bentoComponent: "media-stack",                items: [
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518589-mk7foiz2.jpg", imageAlt: "Development 1" },
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518590-f3r2nerr.jpg", imageAlt: "Development 2" },
                ],
              },
              {
                title: "Branding",                description: "Build a memorable brand identity that resonates with your audience.",                bentoComponent: "media-stack",                items: [
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518590-x02za3p3.jpg", imageAlt: "Branding 1" },
                ],
              },
            ]}
          />
        </div>
        <div id="work">
          <FeatureCardTwentySix
            title="Our Work"
            description="A selection of projects we've crafted for clients across industries."
            textboxLayout="default"
            useInvertedBackground={false}
            cardClassName="!h-auto aspect-video"
            features={[
              {
                title: "Client Showcase 1",                description: "High performance landing page",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CPXYoyZJTsHDV77AkH6Frx8zJE/uploaded-1776288518589-mk7foiz2.jpg",                imageAlt: "Project 1",                buttonIcon: ArrowUpRight,
                buttonHref: "#"
              },
            ]}
          />
        </div>
        <FooterBase
          logoText="Webild"
          copyrightText="© 2026 | Webild"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
