"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import image_desktop from "@/public/desktop.jpg";
import photo1 from "@/public/photo1.jpg";
import photo2 from "@/public/photo2.jpg";
import photo3 from "@/public/photo3.jpg";
import { AudioPlayer } from "../../components/[locale]/audioplayer";

import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import SEO from "@/components/SEO";

export default function Home() {
  const controlSection1 = useAnimation();
  const controlImage = useAnimation();
  const controlSection2 = useAnimation();
  const [y, setY] = useState<number>(0);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = (event.target as Element).scrollTop;
    setY(scrollTop);
  };

  useEffect(() => {
    controlSection1.start({ opacity: 1 - y / 500, scale: 1 - y / 1000 });
  }, [y, controlSection1]);
  useEffect(() => {
    controlImage.start({ opacity: 1 - y / 1000 });
  }, [y, controlImage]);

  useEffect(() => {
    controlSection2.start({ opacity: 2.2 - y / 1000 });
    if (y > window.innerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [y, controlSection2, isFixed]);

  const [currentTrack, setCurrentTrack] = useState(AudioPlayer[0]);

  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const toggleMute = () => {
    const audioElem = audioRef.current;
    if (audioElem) {
      audioElem.volume = 0.2;
      if (isMuted) {
        audioElem.play();
      } else {
        audioElem.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  // Ensure autoplay works across different browsers
  useEffect(() => {
    const audioElem = audioRef.current;
    if (audioElem) {
      audioElem.play();
      audioElem.volume = 0.2;
    }
  }, []);

  return (
    <>
    <SEO title="Home page" description="Landing page of the website"/>
      <audio
        ref={audioRef}
        id="background-music"
        loop
        autoPlay
        muted={isMuted}
        className="z-30"
      >
        <source src={currentTrack.src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="floating-button" onClick={toggleMute}>
        {isMuted ? "🔈" : "🔊"}
      </div>
      <div
        className="sticky h-screen overflow-x-hidden w-screen overflow-y-scroll radial-bg"
        onScroll={handleScroll}
      >
        <AnimatePresence>
          <div className="h-[300vh] flex flex-col">
            <motion.div
              className="h-screen text-center font-bold text-9xl flex items-end pb-14 justify-center z-40 bg-transparent"
              initial={{ opacity: 1 }}
              animate={controlImage}
            >
              <Image
                className="mt-10"
                src={image_desktop}
                width={800}
                alt="desktop image"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={controlSection1}
              className="p-80 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] fixed h-screen w-screen z-10 text-center select-none font-bold text-8xl bg-transparent text-falured"
            >
              Crafting Experiences, Shaping Futures: Your UX Design Partner
            </motion.div>
            {isFixed ? (
              <motion.div className="fixed h-screen w-full bg-cinnabar z-10 flex items-center justify-center text-secondary">
                <motion.p
                  initial={{ opacity: 1 }}
                  animate={controlSection2}
                  className="text-center space-y-24"
                >
                  <p className="text-4xl">Featured</p>
                  <p className="text-7xl font-bold">Projects</p>
                </motion.p>
              </motion.div>
            ) : (
              <motion.div className="h-screen w-full bg-blackbean z-10 flex items-center justify-center">
                <motion.p
                  initial={{ opacity: 1 }}
                  animate={controlSection2}
                  className="text-center space-y-24"
                >
                  <p className="text-4xl">Featured</p>
                  <p className="text-7xl font-bold">Projects</p>
                </motion.p>
              </motion.div>
            )}
            {isFixed ? (
              <div className="h-[200vh] w-full flex flex-col z-20 bg-transparent">
                <div className="h-screen bg-transparent"></div>
                <div className="h-screen bg-transparent text-center font-bold text-9xl flex flex-col items-center justify-center">
                  <div className="space-x-32 flex">
                    <motion.div
                      className="card-container"
                      initial={{ y: 300 }}
                      whileInView={{
                        y: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.7,
                          duration: 1.2,
                        },
                      }}
                      viewport={{ once: false, amount: 0.8 }}
                    >
                      <div className="splash" />
                      <motion.div variants={cardVariants}>
                        <Image
                          className="card"
                          src={photo2}
                          width={400}
                          height={800}
                          alt="photo2"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="card-container"
                      initial={{ y: 300 }}
                      whileInView={{
                        y: -150,
                        transition: {
                          type: "spring",
                          bounce: 0.7,
                          duration: 1.2,
                        },
                      }}
                      viewport={{ once: false, amount: 0.8 }}
                    >
                      <div className="splash" />
                      <motion.div variants={cardVariants}>
                        <Image
                          className="card"
                          src={photo1}
                          width={400}
                          alt="photo1"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="card-container"
                      initial={{ y: 300 }}
                      whileInView={{
                        y: 150,
                        transition: {
                          type: "spring",
                          bounce: 0.7,
                          duration: 1.2,
                        },
                      }}
                      viewport={{ once: false, amount: 0.8 }}
                    >
                      <div className="splash" />
                      <motion.div variants={cardVariants}>
                        <Image
                          className="card"
                          src={photo3}
                          width={400}
                          alt="photo3"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <Link
                    href="/projects"
                    className="bg-linen mt-24 text-falured text-3xl px-8 py-4 border border-falured rounded-full"
                  >
                    <div>See more</div>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="relative" />
            )}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}
