import React from "react";
import Image from "next/image";
export default function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="Picture of the author"
      width={180}
      height={30}
    />
  );
}
