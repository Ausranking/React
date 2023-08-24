import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="header overflow-hidden bg-header-bg bg-center bg-cover bg-no-repeat min-h-[60vh]">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
