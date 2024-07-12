import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Head from "../components/Header";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

const Application = ({ Component, pageProps }) => {
  return (
    <NextUIProvider className="h-full">
      <Head component={Component} />
      <Component {...pageProps} />
      <Toaster />
    </NextUIProvider>
  );
};

export default Application;
