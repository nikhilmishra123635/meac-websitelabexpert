"use client";

import Link from "next/link";
import Image from "next/image";

interface AndrologyLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AndrologyLogo({ className = "", showTagline = true }: AndrologyLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center select-none group ${className}`}>
      <Image
        src="/logo.png"
        alt="LabXpert Logo"
        width={300}
        height={100}
        className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        priority
      />
    </Link>
  );
}
