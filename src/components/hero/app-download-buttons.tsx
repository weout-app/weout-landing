import { memo } from "react";
import Image from "next/image";

const AppDownloadButtons = memo(function AppDownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
      {/* App Store Button */}
      <a 
        href="https://getwaitlist.com/waitlist/31171" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 rounded-lg"
        aria-label="Join the Weout waitlist"
      >
        <Image 
          src="/app-store-button.png" 
          alt="Join our waitlist" 
          width={168}
          height={56}
          className="h-12 sm:h-14 w-auto max-w-[140px] sm:max-w-none"
          priority
          loading="eager"
        />
      </a>

      {/* Google Play Button */}
      <a 
        href="https://getwaitlist.com/waitlist/31171" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 rounded-lg"
        aria-label="Join the Weout waitlist"
      >
        <Image 
          src="/google-play-button.png" 
          alt="Join our waitlist" 
          width={168}
          height={56}
          className="h-12 sm:h-14 w-auto max-w-[140px] sm:max-w-none"
          priority
          loading="eager"
        />
      </a>
    </div>
  );
});

export { AppDownloadButtons };