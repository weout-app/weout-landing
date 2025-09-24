"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  titleDesktop: string;
  description: string;
  descriptionDesktop: string;
}

export function FeatureCard({ icon, title, titleDesktop, description, descriptionDesktop }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl w-[361px] sm:w-[381px] flex flex-row items-start p-4 sm:p-8 gap-4 sm:gap-8 transition-all duration-200 ease-in-out"
      style={{
        flexShrink: 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 400ms ease-in-out, opacity 400ms ease-in-out, box-shadow 200ms ease-in-out'
      }}
    >
      {/* Icon */}
      <div 
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "var(--Primary-Green-50, #E9F5EE"
        }}
      >
        {icon}
      </div>
      
      {/* Content */}
      <div 
        className="flex-1 flex flex-col gap-1 sm:gap-4"
      >
        {/* Title */}
        <h3 
          className="text-left"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            color: '#2E2D33',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '125%',
            letterSpacing: '-0.27px'
          }}
        >
          <span 
            className="sm:hidden"
            style={{
              fontSize: '18px',
              letterSpacing: '-0.27px'
            }}
          >
            {title}
          </span>
          <span 
            className="hidden sm:inline whitespace-pre-line"
            style={{
              fontSize: '24px',
              letterSpacing: '-0.36px'
            }}
          >
            {titleDesktop}
          </span>
        </h3>
        
        {/* Description */}
        <p 
          className="text-left"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            color: '#919094',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '125%',
            letterSpacing: '-0.21px'
          }}
        >
          <span 
            className="sm:hidden whitespace-pre-line"
            style={{
              fontSize: '14px',
              letterSpacing: '-0.21px'
            }}
          >
            {description}
          </span>
          <span 
            className="hidden sm:inline whitespace-pre-line"
            style={{
              fontSize: '18px',
              letterSpacing: '-0.27px'
            }}
          >
            {descriptionDesktop}
          </span>
        </p>
      </div>
    </div>
  );
}

