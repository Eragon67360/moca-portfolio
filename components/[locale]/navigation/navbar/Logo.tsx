import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="text-2xl font-bold uppercase text-black">LOGO</div>
    </Link>
  );
};
