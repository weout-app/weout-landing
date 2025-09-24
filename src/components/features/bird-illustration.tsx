import Image from 'next/image';

export function BirdIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-64 sm:w-72 md:w-80 lg:w-[375px]">
        <Image
          src="/birdworld.png"
          alt="Bird illustration"
          width={375}
          height={524}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}


