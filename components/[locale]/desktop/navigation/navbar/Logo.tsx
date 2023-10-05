import React from "react";
import Link from "next/link";
import Image from "next/image";
import moca_logo from "@/public/logo.svg";
import { useLocale } from "next-intl";

export const Logo = () => {
  const locale = useLocale();
  return (
    <Link href={`/${locale}/`}>
      <Image src={moca_logo} alt="moca Logo" style={{ width: "9vw" }} />
    </Link>
  );
};
