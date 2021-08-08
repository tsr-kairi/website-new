import ImgData from "../../data/imgdata";
import ImageCom from "../cardSection/ImageCom";

export default function CardSection() {
  return (
    <div className="container">
      <div className="card-section-headers">
        <h1>our creation</h1>
        <button>see all</button>
      </div>

      <div className="card-section-items">
        {ImgData.map((img) => (
          <ImageCom
            key={img.id}
            image={img.image}
            alt={img.alt}
            text={img.text}
          />
        ))}
        <button>see all</button>
      </div>
    </div>
  );
}
