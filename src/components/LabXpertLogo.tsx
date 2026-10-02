"use client";

import AndrologyLogo from "@/components/AndrologyLogo";

interface LabXpertLogoProps {
  className?: string;
}

export default function LabXpertLogo({ className = "" }: LabXpertLogoProps) {
  return <AndrologyLogo className={className} showTagline={true} />;
}
