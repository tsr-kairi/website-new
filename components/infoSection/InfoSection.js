import React from "react";
import Image from "next/image";
import InfoImg from "../../public/images/desktop/image-interactive.jpg";
export default function InfoSection() {
  return (
    <div className="container">
      {/* <div className="main"> */}
      <div className="info-section">
        <div className="info-img">
          <Image src={InfoImg} alt="Info-Img" />
        </div>
        <div className="info-text">
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum magni
            enim a molestias dicta, corrupti praesentium tenetur perspiciatis
            fugiat laudantium autem suscipit excepturi nemo non cupiditate
            maxime, ab reprehenderit fuga libero sequi nulla doloremque
            explicabo natus ea? Suscipit, illum rerum.
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
