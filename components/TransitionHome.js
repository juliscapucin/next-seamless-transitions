import { motion } from "framer-motion";

import Image from "next/image";

import Layout from "./Layout";

export default function TransitionHome({ id, url, name, slug }) {
  return (
    <Layout>
      <section className='page-container-outer'>
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

          <article className='page-text-container'>
            <div className='page-title'>
              <h3>Joe Geek</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati magnam delectus dignissimos esse, voluptates nam
              corporis beatae libero, cumque laboriosam ea asperiores nulla unde
              repellat est quam aliquid! At aliquam iure quo sunt, asperiores
              porro!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              explicabo soluta unde neque dolorum? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi, numquam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              dicta suscipit delectus in cupiditate labore iusto doloremque,
              odio rem cumque? Minus, deleniti voluptatum quas ex magni dolor
              consectetur voluptas, optio quidem, quod obcaecati modi.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
