import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";

const Nav = ({ children, need_login: page_need_login, hide_menu }) => {
  const router = useRouter();
  return (
    <div className="h-full">
      <div className={`h-full`}>{children}</div>
      <div
        className={`fixed right-0 top-0 z-max h-full w-full max-w-[500px] transform bg-[#fcfaf0] opacity-95 duration-300 ease-in-out lg:hidden `}
      ></div>
    </div>
  );
};

export default Nav;
