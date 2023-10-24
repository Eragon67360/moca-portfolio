import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface DropdownProps {
  plan?: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({ plan }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Payment");

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-black hover:text-black/50 "
        >
          Read more
          <svg
            className={`${
              isOpen ? "transform rotate-180" : ""
            } w-5 h-5 ml-2 -mr-1`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 w-screen rounded-md bg-white"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {plan === "standard" && (
                <div className="my-14 w-full px-12">
                  <h2 className="text-center text-2xl font-bold my-5">
                    {t("title")}
                  </h2>

                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <strong>{t("sec1")}</strong>
                      <p>{t("exp1")}</p>
                    </div>

                    <div>
                      <strong>{t("sec2")}</strong>
                      <p>{t("exp2")}</p>
                    </div>

                    <div>
                      <strong>{t("sec3")}</strong>
                      <p>{t("exp3")}</p>
                    </div>

                    <div>
                      <strong>{t("sec4")}</strong>
                      <p>{t("exp4")}</p>
                    </div>

                    <div>
                      <strong>{t("sec5")}</strong>
                      <p>{t("exp5")}</p>
                    </div>
                  </div>
                </div>
              )}

              {plan === "pro" && (
                <div className="my-14 w-full px-12">
                  <h2 className="text-center text-2xl font-bold my-5">
                    {t("title")}
                  </h2>

                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <strong>{t("sec1")}</strong>
                      <p>{t("exp1")}</p>
                    </div>

                    <div>
                      <strong>{t("sec2")}</strong>
                      <p>{t("exp2")}</p>
                    </div>

                    <div>
                      <strong>{t("sec3")}</strong>
                      <p>{t("exp3")}</p>
                    </div>

                    <div>
                      <strong>{t("sec4")}</strong>
                      <p>{t("exp4")}</p>
                    </div>

                    <div>
                      <strong>{t("sec5")}</strong>
                      <p>{t("exp5")}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-center text-2xl font-bold my-5">
                      {t("graph_title")}
                    </h3>
                    <ul>
                      <li>
                        <strong>{t("graph1")}</strong> {t("graph_exp1")}
                      </li>
                      <li>
                        <strong>{t("graph2")}</strong> {t("graph_exp2")}
                      </li>
                      <li>
                        <strong>{t("graph3")}</strong> {t("graph_exp3")}
                      </li>
                      <li>
                        <strong>{t("graph4")}</strong> {t("graph_exp4")}
                      </li>
                      <li>
                        <strong>{t("graph5")}</strong> {t("graph_exp5")}
                      </li>
                      <li>
                        <strong>{t("graph6")}</strong> {t("graph_exp6")}
                      </li>
                      <li>
                        <strong>{t("graph7")}</strong> {t("graph_exp7")}
                      </li>
                      <li>
                        <strong>{t("graph8")}</strong> {t("graph_exp8")}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
