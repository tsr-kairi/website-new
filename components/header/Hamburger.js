import React, { useState } from "react";
import Image from "next/image";
import hamburgerSvg from "../../public/images/icon-hamburger.svg";
export default function Hamburger() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  return (
    <div className="hamburger">
      <Image src={hamburgerSvg} alt="hamburger-Svg" />
      {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
    </div>
  );
}
