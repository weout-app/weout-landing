"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  mobileSrc?: string;
  className?: string;
}

export function VideoBackground({ 
  src, 
  mobileSrc, 
  className = "" 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null during hydration
  const [mounted, setMounted] = useState(false);

  // Handle Next.js hydration
  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle video autoplay after mount
  useEffect(() => {
    if (!mounted || isMobile === null) return;

    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          video.currentTime = 0;
          
          // Mobile-specific handling
          if (isMobile) {
            // Force load on mobile
            video.load();
            await new Promise(resolve => setTimeout(resolve, 200));
          }
          
          await video.play();
        } catch (error) {
          console.log("Video autoplay failed:", error);
          
          // Hide video controls on mobile if autoplay fails
          if (isMobile && video) {
            video.style.opacity = '0';
            console.log("Mobile autoplay blocked - using fallback background");
          }
        }
      };

      // Delay to ensure DOM is ready
      const timer = setTimeout(playVideo, 100);
      return () => clearTimeout(timer);
    }
  }, [mounted, isMobile]);

  // Prevent hydration mismatch - don't render video until mounted
  if (!mounted) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div 
          className="absolute inset-0 bg-gray-300" 
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:from-black/10" />
      </div>
    );
  }

  const videoSource = isMobile && mobileSrc ? mobileSrc : src;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Fallback background */}
      <div 
        className="absolute inset-0 bg-gray-300" 
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)'
        }} 
      />
      
      <video
        ref={videoRef}
        className={`h-full w-full object-cover transition-opacity duration-300`}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        webkit-playsinline="true"
        preload="metadata"
        poster="" // Prevent poster image flash
        onError={(e) => {
          console.log("Video failed to load:", e);
          if (videoRef.current) {
            videoRef.current.style.opacity = '0';
          }
        }}
        onLoadedData={() => {
          const video = videoRef.current;
          if (video && isMobile) {
            video.play().catch(() => {
              console.log("Mobile autoplay requires user interaction");
              video.style.opacity = '0';
            });
          }
        }}
        onCanPlayThrough={() => {
          const video = videoRef.current;
          if (video) {
            video.style.opacity = '1';
            if (isMobile) {
              video.play().catch(console.log);
            }
          }
        }}
        style={{
          pointerEvents: 'none',
          opacity: 0 // Start hidden, show when ready
        }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:from-black/10" />
    </div>
  );
}