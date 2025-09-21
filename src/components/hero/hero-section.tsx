"use client";

import { VideoBackground } from "./video-background";
import { Logo } from "./logo";
import { AppDownloadButtons } from "./app-download-buttons";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Video Background */}
      <VideoBackground 
        src="/hero-video.mp4" 
        mobileSrc="/hero-mobile.mp4"
        className="z-0"
      />
      
      {/* Header */}
      <header className="relative z-10 flex justify-content-between items-center px-4 py-4 w-[393px] h-[134px] flex-shrink-0 sm:px-6 md:px-8 lg:px-20 sm:py-6 md:py-8 sm:w-auto sm:h-auto">
  <Logo />
  <Button
    variant="outline"
    className="hidden border-gray-300 text-gray-600 hover:bg-gray-50 rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base"
  >
    <User className="h-4 w-4 mr-2" />
    Partner Sign Up
  </Button>
</header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 
            className="text-center px-2"
            style={{ 
              fontFamily: "var(--font-source-serif-4), serif",
              fontSize: "clamp(32px, 8vw, 64px)", // Responsive font size
              fontWeight: 900,
              lineHeight: "110%",
              letterSpacing: "-0.96px",
              color: "rgba(255, 255, 255, 0.70)"
            }}
          >
            Meet your new adventure,{" "}
            <span className="text-[#219F56]">Spontaneously.</span>
          </h1>

          {/* Description */}
          <p 
            className="max-w-2xl mx-auto text-center px-2" 
            style={{ 
              fontFamily: "Satoshi, system-ui, sans-serif",
              fontSize: "clamp(16px, 4vw, 24px)", // Responsive font size
              fontWeight: 500,
              lineHeight: "125%",
              letterSpacing: "-0.36px",
              color: "#F4F4F4"
            }}
          >
            Light up the map when you&apos;re ready to meet and make real-world 
            connections instantly. No endless planning, just real people 
            looking to explore IRL!
          </p>

          {/* App Download Buttons */}
          <div className="pt-2 sm:pt-4">
            <AppDownloadButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
