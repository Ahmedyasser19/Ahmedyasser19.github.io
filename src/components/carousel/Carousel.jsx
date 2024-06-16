import { useState } from "react";
import "./carousel.css";
const Carousel = ({ images, gitRepo }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const nOfImages = images.length;
  function printImages(imageIndex) {
    if (imageIndex > nOfImages) {
      setImageIndex(0);
    } else if (imageIndex < 0) {
      setImageIndex(nOfImages - 1);
    } else return <img src={images[imageIndex]} />;
  }

  function backBtn() {
    setImageIndex((index) => index - 1);
  }
  function forwordBtn() {
    setImageIndex((index) => index + 1);
  }

  function openRepo() {
    window.open(gitRepo, "_blank");
  }
  return (
    <div className="carouselContainer">
      {nOfImages != 1 && <button onClick={backBtn}>{"<"}</button>}
      <div className="CarouselImages" onClick={openRepo}>
        {printImages(imageIndex)}
      </div>
      {nOfImages != 1 && <button onClick={forwordBtn}>{">"}</button>}
    </div>
  );
};

export default Carousel;
