import { FeatureCard } from "./feature-card";
import { BirdIllustration } from "./bird-illustration";
import { Sparkles, Globe, Handshake, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <span className="text-2xl lg:text-3xl">🤝</span>,
      title: "Meet people, not profiles",
      titleDesktop: "Meet people,\nnot profiles",
      description: "You're in a new city. WeOut\nshows you who's around and what's happening.",
      descriptionDesktop: "You're in a new city.\nWeOut shows you who's\naround and what's\nhappening."
    },
    {
      icon: <span className="text-2xl lg:text-3xl">🌎</span>,
      title: "Spontaneity Is the Plan",
      titleDesktop: "Spontaneity\nIs the Plan",
      description: "Plans change, and that's the best part. Drop into whatever's calling. Or start your own thing.",
      descriptionDesktop: "Plans change, and that's\nthe best part. Drop\ninto whatever's calling. Or\nstart your own thing."
    },
    {
      icon: <span className="text-2xl lg:text-3xl">😌</span>,
      title: "No awkward small talk",
      titleDesktop: "No awkward\nsmall talk",
      description: "You're joining stuff that's already happening. It's easier to connect when you're doing something.",
      descriptionDesktop: "You're joining stuff that's\nalready happening. It's\neasier to connect when\nyou're doing something."
    },
    {
      icon: <span className="text-2xl lg:text-3xl">✨</span>,
      title: "Host your own vibe",
      titleDesktop: "Host your\nown vibe",
      description: "Got an idea? A sunrise hike? A late-night tea circle? Put it up. If it feels right, others will find you.",
      descriptionDesktop: "Got an idea? A sunrise\nhike? A late-night tea\ncircle? Put it up. If it feels\nright, others will find you."
    }
  ];

  return (
    <section 
      className="py-4 sm:py-6 lg:py-8"
      style={{
        background: "var(--Gradient-Background, linear-gradient(180deg, #E9F5EE 0%, #FBFCFF 61.46%))"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width centered title */}
        <div className="w-full text-center mb-6">
          <h2 
            className="font-bold leading-tight text-[32px] sm:text-[48px]"
            style={{ 
              fontFamily: "var(--font-source-serif-4), serif", 
              color: "#1f2937",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: '125%',
              marginTop: '23px'
            }}
          >
            <span className="sm:hidden">
              Designed for{" "}
              <br />
              <span className="text-[#219F56]">the adventurous</span>
            </span>
            <span className="hidden sm:inline">
              Designed for{" "}
              <span className="text-[#219F56]">the adventurous</span>
            </span>
          </h2>
        </div>

        {/* Content in 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left side - Feature Cards */}
          <div 
            className="flex flex-wrap items-center justify-center lg:justify-start w-full lg:w-[794px] lg:h-[460px]"
            style={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              gap: '16px 16px',
              flexShrink: 0,
              flexWrap: 'wrap',
              marginTop: '40px'

            }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                titleDesktop={feature.titleDesktop}
                description={feature.description}
                descriptionDesktop={feature.descriptionDesktop}
              />
            ))}
          </div>

          {/* Right side - Bird Illustration */}
          <div className="flex justify-center lg:justify-end">
            <BirdIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}