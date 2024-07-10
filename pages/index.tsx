import React from "react";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="fixed w-full h-full top-0 left-0 -z-10 object-cover bg-[url(/11.jpg)] bg-cover bg-center bg-no-repeat" />

      <div className="flex items-center justify-center max-w-[1280px] p-8 text-center">
        <div className="absolute top-[3vh] left-1/2 transform -translate-x-1/2 w-[80%] max-w-[70vw] bg-white bg-opacity-70 p-5 shadow-md rounded-lg text-center mb-5">
          <h1 className="text-4xl text-gray-600">欢迎来到胖哒的歌单</h1>
          <div className="flex justify-center mb-5 w-[calc(100%-20px)] bg-white bg-opacity-70 p-2 shadow-md rounded sticky top-0 z-10">
            <a
              className="text-blue-500 no-underline mx-2"
              href="https://live.bilibili.com/594461"
              target="_blank"
              rel="noopener noreferrer"
            >
              主直播间
            </a>
            <span className="text-gray-500">共收录501首歌</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
