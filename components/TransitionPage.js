import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { useGlobalContext } from "../data/context";

import scroll from "./../data/scroll";

import Image from "next/image";

export default function TransitionPage({
  id,
  url,
  name,
  slug,
  scrollPos,
  setBackHome,
}) {
  const { showHome } = useGlobalContext();

  useEffect(() => {
    if (showHome) {
      setBackHome(true);
    }
  }, [showHome]);

  if (!showHome) {
    return null;
  } else {
    return (
      <motion.section
        className='page-transition'
        initial={{ y: -scrollPos }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <div className='page-container-inner'>
          <motion.div
            className='page-main-image-container'
            layout
            layoutId={`${id}`}
            transition={{
              type: "crossfade",
              layout: {
                duration: 1,
              },
            }}
          >
            <div className='page-main-image'>
              <img src={url} alt={name} />
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }
}
