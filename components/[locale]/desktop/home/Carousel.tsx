// components/Carousel.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowHeight from "@/hooks/useWindowHeight";
import useWindowWidth from "@/hooks/useWindowWidth";

const projectItems = [
  { image: "/carousel/pipas.png" },
  { image: "/carousel/portfolio.png" },
  { image: "/carousel/ares.png" },
  { image: "/carousel/stopviolence.png" },
];

const carouselVariants = {
  enter: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.2,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.2,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Function to update the window width
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateWindowSize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  // Effect to add the window resize event listener
  useEffect(() => {
    updateWindowSize();

    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, [updateWindowSize]);

  // Function to move to next project item
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const calculateImageHeight = (): number => {
    return windowHeight / 2.5;
  };

  const calculateImageWidth = (): number => {
    return windowHeight * 1.777;
  };

  return (
    <div className="relative">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          style={{
            height: calculateImageHeight(),
            width: calculateImageWidth(),
            objectFit: "cover",
          }}
          src={projectItems[page % projectItems.length].image}
          alt={`Project ${page}`}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { duration: 1 },
            opacity: { duration: 1 },
            scale: { duration: 1 },
          }}
          className="w-full h-full object-cover absolute"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
};
