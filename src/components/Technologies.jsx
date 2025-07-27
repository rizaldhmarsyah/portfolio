import { FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="pb-24 px-[12%]">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {isMobile ? (
        // Mobile layout with Framer Motion
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <TbBrandNextjs className="text-7xl" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <FaNode className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiMongodb className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiFirebase className="text-7xl text-[#FF9100]" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4"
          >
            <SiJavascript className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <SiTailwindcss className="text-7xl text-[#06B6D4]" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4"
          >
            <SiRedux className="text-7xl text-[#764ABC]" />
          </motion.div>
        </motion.div>
      ) : (
        // Desktop/iPad layout with Marquee
        <Marquee autoFill={true} pauseOnHover className="relative">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <div className="p-4">
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>

            <div className="p-4">
              <TbBrandNextjs className="text-7xl" />
            </div>

            <div className="p-4">
              <FaNode className="text-7xl text-green-500" />
            </div>

            <div className="p-4">
              <SiMongodb className="text-7xl text-cyan-400" />
            </div>

            <div className="p-4">
              <SiFirebase className="text-7xl text-[#FF9100]" />
            </div>

            <div className="p-4">
              <SiJavascript className="text-7xl text-green-500" />
            </div>

            <div className="p-4">
              <SiTailwindcss className="text-7xl text-[#06B6D4]" />
            </div>

            <div className="p-4">
              <SiRedux className="text-7xl text-[#764ABC]" />
            </div>
          </motion.div>
        </Marquee>
      )}
    </div>
  );
};

export default Technologies;
