import React from "react";
import Link from "next/link";
import Image from "next/image";
import moca_logo from "@/public/logo.svg";
export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={moca_logo}
        alt="moca Logo"
        style={{ width: "180px", height: "auto" }}
      />
    </Link>
  );
};
