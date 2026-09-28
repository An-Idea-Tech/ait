"use client"

import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";

export default function Logo({className}) {
  const { theme } = useTheme();

  return (
    <Image
      src={`/svgs/anideatech-${theme === "light" ? "light" : "dark"}-logo.svg`}
      alt="anideatech-logo"
      width={160}
      height={48}
      className={className}
      unoptimized
    />
  );
}
