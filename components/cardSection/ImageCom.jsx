import React from "react";
import Image from "next/image";

function ImageCom(props) {
  return (
    <div className="card-img">
      <Image src={props.image} alt={props.alt} layout="fill" />
      <div className="card-text">{props.text}</div>
    </div>
  );
}

export default ImageCom;
