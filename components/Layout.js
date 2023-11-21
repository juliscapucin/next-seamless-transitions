import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppProvider } from "../data/context";

import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>


        <AppProvider>
          <Header />
          <main className='main-container'>{children}</main>
        </AppProvider>

    </>
  );
}

Layout.defaultProps = {
  title: "Seamless transitions",
  description: "Here goes description for meta tag.",
  keywords: "photography, gallery, unsplash",
  link: "rel='icon' href='/favicon.ico'",
};
