import React from "react";
import { useTranslations } from "next-intl";
import Expandable from "./Expandable";

export const Language = () => {
  const t = useTranslations("Language");

  return <Expandable language={t} />;
};
