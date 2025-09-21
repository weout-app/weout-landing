"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  mobileSrc?: string; // Optional mobile-specific video source
  className?: string;
}

export function VideoBackground({ 
  src, 
  mobileSrc, 
  className = "" 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    // Initial check
    checkMobile();

    // Listen for window resize
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [isMobile]); // Re-trigger when mobile state changes

  // Choose video source based on device type
  const videoSource = isMobile && mobileSrc ? mobileSrc : src;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Fallback background gradient when video is not available */}
      <div 
        className="absolute inset-0 bg-gray-300" 
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)'
                }} 
      />
      
      <video
        ref={videoRef}
        className={`h-full w-full object-cover ${
          isMobile ? 'object-center' : 'object-center'
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload={isMobile ? "none" : "metadata"} // Lighter preload for mobile
        onError={() => {
          console.log("Video failed to load, using fallback background");
        }}
        key={videoSource} // Force re-render when source changes
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Responsive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:from-black/10" />
    </div>
  );
}