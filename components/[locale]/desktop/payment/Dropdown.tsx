"use client";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const Dropdown: React.FC = () => {
  const [isOpenGeneral, setIsOpenGeneral] = useState(true);
  const [isOpenTeam, setIsOpenTeam] = useState(false);
  const [isOpenRequest, setIsOpenRequest] = useState(false);
  const [isOpenDelivery, setIsOpenDelivery] = useState(false);
  const [isOpenPayments, setIsOpenPayments] = useState(false);
  const [isOpenPause, setIsOpenPause] = useState(false);
  const [isOpenPolicy, setIsOpenPolicy] = useState(false);

  const [isOpenPro, setIsOpenPro] = useState(true);
  const [isOpenGraphics, setIsOpenGraphics] = useState(false);
  const [isOpenPerso, setIsOpenPerso] = useState(true);
  const [isOpenAdvantages, setIsOpenAdvantages] = useState(false);

  const t = useTranslations("Payment");

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          onClick={() => setIsOpenGeneral(!isOpenGeneral)}
          className="text-2xl flex justify-between w-full font-semibold text-cinnabar hover:text-cinnabar/75 "
        >
          General
          <svg
            className={`${
              isOpenGeneral ? "transform rotate-180" : ""
            } w-8 h-8 ml-2 -mr-1`}
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
        {isOpenGeneral && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 w-full"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="w-full">
                <div>
                  <button
                    onClick={() => setIsOpenTeam(!isOpenTeam)}
                    className="text-base flex justify-between w-full font-bold hover:text-black/50 "
                  >
                    {t("sec1")}
                    <svg
                      className={`${
                        isOpenTeam ? "transform rotate-180" : ""
                      } w-7 h-7 ml-2 mr-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                </div>
                {isOpenTeam && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pb-4 border-b border-third"
                  >
                    <p className="text-base">{t("exp1")}</p>
                  </motion.div>
                )}

                <div>
                  <button
                    onClick={() => setIsOpenRequest(!isOpenRequest)}
                    className="text-base flex justify-between w-full font-bold hover:text-black/50 mt-4"
                  >
                    {t("sec2")}
                    <svg
                      className={`${
                        isOpenRequest ? "transform rotate-180" : ""
                      } w-7 h-7 ml-2 mr-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                </div>
                {isOpenRequest && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pb-4 border-b border-third"
                  >
                    <p className="text-base">{t("exp2")}</p>
                  </motion.div>
                )}

                <div>
                  <button
                    onClick={() => setIsOpenDelivery(!isOpenDelivery)}
                    className="text-base flex justify-between  w-full font-bold hover:text-black/50 mt-4"
                  >
                    {t("sec3")}
                    <svg
                      className={`${
                        isOpenDelivery ? "transform rotate-180" : ""
                      } w-7 h-7 ml-2 mr-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                </div>
                {isOpenDelivery && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pb-4 border-b border-third"
                  >
                    <p className="text-base">{t("exp3")}</p>
                  </motion.div>
                )}

                <div>
                  <button
                    onClick={() => setIsOpenPayments(!isOpenPayments)}
                    className="text-base flex justify-between  w-full font-bold hover:text-black/50 mt-4"
                  >
                    {t("sec4")}
                    <svg
                      className={`${
                        isOpenPayments ? "transform rotate-180" : ""
                      } w-7 h-7 ml-2 mr-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                </div>
                {isOpenPayments && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pb-4 border-b border-third"
                  >
                    <p className="text-base">{t("exp4")}</p>
                  </motion.div>
                )}

                <div>
                  <button
                    onClick={() => setIsOpenPause(!isOpenPause)}
                    className="text-base flex justify-between  w-full font-bold hover:text-black/50 mt-4"
                  >
                    {t("sec5")}
                    <svg
                      className={`${
                        isOpenPause ? "transform rotate-180" : ""
                      } w-7 h-7 ml-2 mr-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                </div>
                {isOpenPause && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pb-4 border-b border-third"
                  >
                    <p className="text-base">{t("exp5")}</p>
                  </motion.div>
                )}

                <div>
                  <button
                    onClick={() => setIsOpenPolicy(!isOpenPolicy)}
                    className="text-base flex justify-between  w-full font-bold hover:text-black/50 mt-4"
                  >
                    {t("sec6")}
                    <svg
                      className={`${
                        isOpenPolicy ? "transform rotate-180" : ""
                      } w-7 h-7 ml-2 mr-4`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                </div>
                {isOpenPolicy && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pb-4 border-b border-third"
                  >
                    <p className="text-base">{t("exp6")}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <div>
          <button
            onClick={() => setIsOpenPro(!isOpenPro)}
            className="text-2xl flex justify-between w-full font-semibold text-cinnabar hover:text-cinnabar/75 mt-4"
          >
            Pro Subscription
            <svg
              className={`${
                isOpenPro ? "transform rotate-180" : ""
              } w-8 h-8 ml-2 -mr-1`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        {isOpenPro && (
          <div className="w-full">
            <div>
              <button
                onClick={() => setIsOpenGraphics(!isOpenGraphics)}
                className="text-base flex justify-between w-full font-bold hover:text-black/50 mt-4"
              >
                {t("graph_title")}
                <svg
                  className={`${
                    isOpenGraphics ? "transform rotate-180" : ""
                  } w-7 h-7 ml-2 mr-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            {isOpenGraphics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pb-4 border-b border-third"
              >
                <ul className="text-base list-disc ml-6">
                  <li>{t("graph1")}</li>
                  <li>{t("graph2")}</li>
                  <li>{t("graph3")}</li>
                  <li>{t("graph4")}</li>
                  <li>{t("graph5")}</li>
                  <li>{t("graph6")}</li>
                  <li>{t("graph7")}</li>
                  <li>{t("graph8")}</li>
                </ul>

                <div className="text-base">
                  <strong>The Pro Subscription plan does not include:</strong>{" "}
                  3D modeling, animated graphics (GIFS, etc.), document design
                  (medical forms, etc.), complex packaging, and extensive print
                  design (magazines, books, etc.).
                </div>
              </motion.div>
            )}
          </div>
        )}

        <div>
          <button
            onClick={() => setIsOpenPerso(!isOpenPerso)}
            className="text-2xl flex justify-between w-full font-semibold text-cinnabar hover:text-cinnabar/75 mt-4"
          >
            Personalized Subscription
            <svg
              className={`${
                isOpenPerso ? "transform rotate-180" : ""
              } w-8 h-8 ml-2 -mr-1`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        {isOpenPerso && (
          <div className="w-full">
            <div>
              <button
                onClick={() => setIsOpenAdvantages(!isOpenAdvantages)}
                className="text-base flex justify-between w-full font-bold hover:text-black/50 mt-4"
              >
                Advantages
                <svg
                  className={`${
                    isOpenAdvantages ? "transform rotate-180" : ""
                  } w-7 h-7 ml-2 mr-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            {isOpenAdvantages && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pb-4"
              >
                <div className="text-base">Bla bla bla</div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
