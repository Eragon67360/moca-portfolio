import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Expandable from "./Expandable";

export const Language = () => {
  const t = useTranslations('Language')
  const locale = useLocale();
  
  return <Expandable language={t} />;
};
