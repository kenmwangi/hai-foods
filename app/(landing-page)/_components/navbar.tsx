"use client";
import React, { useEffect, useState } from "react";
import { NavigationMenuBar } from "./menu";
import Logo from "./logo";
import ActionButtons from "./buttons";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-between lg:justify-center px-8 h-16 border-b border-gray-100 md:px-10 sticky top-0 z-50
    ${hasScrolled} ? "shadow-sm":""`}
    >
      <section className="flex items-center w-2/3 lg:w-1/2">
        <Logo />
        <NavigationMenuBar />
      </section>
      <ActionButtons />
    </div>
  );
}
