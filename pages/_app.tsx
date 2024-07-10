import React from "react";
import Head from "../components/Header";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

const Application = ({ Component, pageProps }) => {
  return (
    <div className="h-full">
      <Head component={Component} />
      <Component {...pageProps} />
    </div>
  );
};

export default Application;
