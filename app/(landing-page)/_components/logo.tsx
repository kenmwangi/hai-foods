import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center mr-9">
      <Image
        src="/logo.svg"
        alt="Logo"
        height={20}
        width={20}
        className="mr-2"
      />
      <span className="hidden md:block">Hai foods</span>
    </Link>
  );
}
