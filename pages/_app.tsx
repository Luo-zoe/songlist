import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Head from "../components/Header";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

const Application = ({ Component, pageProps }) => {
  return (
    <NextUIProvider className="h-full">
      <Head component={Component} />
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default Application;
