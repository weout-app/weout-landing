import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative">
        <Image
          src="/logo.png"
          alt="Weout Logo"
          width={188}
          height={126}
          className="w-[109px] h-[73px] lg:w-[188px] lg:h-[126px]"
          style={{ aspectRatio: '109/73' }}
          priority
        />
      </div>
    </Link>
  );
}
