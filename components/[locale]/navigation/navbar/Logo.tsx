import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="text-4xl font-bold font-impact uppercase text-black hover:text-primary">UX MOCA</div>
    </Link>
  );
};
