import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";

const Index = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url('images/desktop/image-hero.jpg')" }}
    >
      <div className="container">
        <header className="header">
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
