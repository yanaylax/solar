import React, { useState, useEffect } from "react";
import solar from "../images/solar_array2.jpg";
import construction from "../images/construction.jpg";
import construction2 from "../images/construction2.jpg";
import array from "../images/solar_array.jpg";

export default function useImages() {
  const [images, setImages] = useState([
    { img: solar, id: 1 },
    { img: construction, id: 2 },
    { img: construction2, id: 3 },
    { img: array, id: 4 },
  ]);
  const changeImage = () => {
    setCurrentIndex(images.length - 1 <= currentIndex ? 0 : currentIndex + 1);
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(changeImage, 10000);
  }, [changeImage]);

  return { image: images[currentIndex].img, imgId: images[currentIndex].id };
}
