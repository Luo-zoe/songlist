import React from "react";

const Nav = ({ children }) => {
  return (
    <div className="h-full">
      <div className="h-full">{children}</div>
    </div>
  );
};

export default Nav;
