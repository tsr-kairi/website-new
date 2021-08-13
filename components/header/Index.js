import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Image from "next/image";

const Index = () => {
  const [value, setValue] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  try {
    window.addEventListener("scroll", changeBackground);
  } catch (error) {
    console.log(error);
  }

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url('images/desktop/image-hero.jpg')" }}
    >
      <div className="container">
        <header className={value ? "header fixed-header" : "header"}>
          <Logo />
          <Navbar />
          <Hamburger />
        </header>
        <h1>
          immersive <br /> expriences <br /> that deliver
        </h1>
        <nav className="hamburger-wrapper">
          <div className="logo-closeMenu">
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={180}
              height={30}
            />

            <Image
              src="/images/icon-close.svg"
              alt="Picture of the author"
              width={30}
              height={16}
            />
          </div>
          <div className="hamburger-link-item">
            <div className="hamburger-link">About</div>
            <div className="hamburger-link">Careers</div>
            <div className="hamburger-link">Events</div>
            <div className="hamburger-link">Products</div>
            <div className="hamburger-link">Support</div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Index;
