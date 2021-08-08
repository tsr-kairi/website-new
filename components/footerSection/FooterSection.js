import React from "react";
import Image from "next/image";

export default function FooterSection() {
  return (
    <div className="container">
      <div className="footer-section-wrap">
        <div className="logo-media">
          <div className="logo">
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={250}
              height={40}
            />
          </div>
          <div className="social-media">
            <Image
              src="/images/icon-facebook.svg"
              alt="Facebook"
              width={24}
              height={16}
            />
            <Image
              src="/images/icon-twitter.svg"
              alt="Facebook"
              width={24}
              height={16}
            />
            <Image
              src="/images/icon-pinterest.svg"
              alt="Facebook"
              width={24}
              height={16}
            />
            <Image
              src="/images/icon-instagram.svg"
              alt="Facebook"
              width={24}
              height={16}
            />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav">
            <div className="nav-link">About</div>
            <div className="nav-link">Careers</div>
            <div className="nav-link">Events</div>
            <div className="nav-link">Products</div>
            <div className="nav-link">Support</div>
          </div>
          <div className="right">
            <small>&copy; 2021 loopstudios. All rights reserved</small>
          </div>
        </div>
      </div>
    </div>
  );
}
