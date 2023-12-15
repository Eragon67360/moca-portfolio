import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SlMagicWand } from "react-icons/sl";
import { BsArrowRepeat } from "react-icons/bs";
import Image from "next/image";
import logo from "@/public/logo_only.svg";
import { useTranslations } from "next-intl";
import tail from "@/public/doodles/tail.png";

const UXSolutions = () => {
  const t = useTranslations("Home.UXSolutions");

  return (
    <>
      <div className="">
        <div className="bg-white dark:bg-dark_background flex flex-col h-full py-[52px] justify-start items-center text-center select-none space-y-12 px-8">
          <p className="font-bold text-[34px] text-light_ink dark:text-dark_ink">
            {t("title")}
          </p>
          <div className="flex flex-col justify-evenly pt-9 space-y-8">
            <div className="flex flex-col text-center justify-start items-center space-y-4 px-8">
              <AiOutlineFundProjectionScreen size={50} />
              <h2 className="font-semibold text-2xl">{t("new_title")}</h2>
              <p>{t("new_content2")} <br /> <br />{t("new_content2")}</p>
            </div>
            <div className="flex flex-col text-center justify-start items-center space-y-4 px-8">
              <SlMagicWand size={50} />
              <h2 className="font-semibold text-2xl">{t("redesign_title")}</h2>
              <p>
                {t("redesign_content1")} <br /> <br />
                {t("redesign_content2")}
              </p>
            </div>
            <div className="flex flex-col text-center justify-start items-center space-y-4 px-8">
              <BsArrowRepeat size={50} />
              <h2 className="font-semibold text-2xl">{t("followup_title")}</h2>
              <p>
                {t("followup_content1")} <br /> <br />
                {t("followup_content2")}
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <Image src={tail} alt="tail" width={140} className="absolute -left-20 -bottom-12" />
          </div>

          <div className="text-light_ink dark:text-dark_ink mt-12 flex flex-col rounded-2xl border-4 border-light_primary dark:border-light_primary p-8 space-y-8 bg-light_surface dark:bg-dark_surface">
            <h2 className="text-2xl font-bold">
              Design is not just what it looks like;
              <br /> design is how it works
            </h2>
            <h3 className="text-xl">Steve Jobs</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UXSolutions;
