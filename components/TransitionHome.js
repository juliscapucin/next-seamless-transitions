import { motion } from "framer-motion";

import { useGlobalContext } from "../data/context";

import Image from "next/image";

export default function TransitionHome({ id, url, name, slug }) {
  const { showPage } = useGlobalContext();

  if (!showPage) {
    return null;
  } else {
    return (
      <section className='page-transition'>
        <div className='page-container-inner'>
          <motion.div
            className='page-main-image-container'
            layout
            layoutId={`${id}`}
            transition={{
              type: "crossfade",
              layout: {
                duration: 0.5,
              },
            }}
          >
            <div className='page-main-image'>
              <img src={url} alt={name} />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
}
