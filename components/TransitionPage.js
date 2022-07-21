import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useGlobalContext } from "./../data/context";

import Image from "next/image";

export default function TransitionPage({ id, url, name, slug }) {
  const { showHome } = useGlobalContext();
  const [scrollPos, setScrollPos] = useState(0);

  const getPosition = () => {
    const currentScroll = window.scrollY;

    setScrollPos(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("scroll", getPosition);
    };
  });

  if (!showHome) {
    return null;
  } else {
    return (
      <motion.section
        className='page-transition'
        initial={{ y: -scrollPos }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <div className='page-container-inner'>
          <div
            className='page-main-image-container'
            // data-isOn={showHome}
          >
            <div className='page-main-image'>
              <img src={url} alt={name} />
            </div>
          </div>
        </div>
      </motion.section>
    );
  }
}
