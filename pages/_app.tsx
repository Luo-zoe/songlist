import React from "react";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import Head from "../components/Header";
import type { NextPage } from "next";
import "@/styles/globals.css";
import Layout from "../components/Layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Application = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head component={Component} />
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  );
};

export default Application;
