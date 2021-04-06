import React, { useState, useEffect } from "react";
import solar from "../Solar-panel-array-rooftop.jpg";
import eran from "../eran.jpeg";

export default function useImages() {
  const [images, setImages] = useState([solar, eran]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex(images.length - 1 <= currentIndex ? 0 : currentIndex + 1);
    };
    setTimeout(changeImage, 10000);
  }, [currentIndex, images.length]);

  return { image: images[currentIndex] };
}
