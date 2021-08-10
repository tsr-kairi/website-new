import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
// import loadConfig from "next/dist/next-server/server/config";

const Index = () => {
  // const [value, setValue] = useState(false);

  // const headerHandler = () => {
  //   const position = window.pageYOffset;
  //   setValue(position);
  // };

  // const changeBackground = () => {
  //   if (window.scrollY >= 100) {
  //     setValue(false);
  //   } else {
  //     setValue(true);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url('images/desktop/image-hero.jpg')" }}
    >
      <div className="container">
        <header className="header fixed-header">
          <Logo />
          <Navbar />
          <Hamburger />
        </header>
        <h1>
          immersive <br /> expriences <br /> that deliver
        </h1>
        <nav className="hamburger-wrapper">
          <div className="hamburger-link">About</div>
          <div className="hamburger-link">Careers</div>
          <div className="hamburger-link">Events</div>
          <div className="hamburger-link">Products</div>
          <div className="hamburger-link">Support</div>
        </nav>
      </div>
    </section>
  );
};

export default Index;
