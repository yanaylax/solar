import React, { useState, useEffect } from "react";
import solar from "../images/Solar-panel-array-rooftop.jpg";
import eran from "../images/eran.jpg";

export default function useImages() {
  const [images, setImages] = useState([{img:solar, id:1}, {img:eran,id:2}]);

  const [currentIndex, setCurrentIndex] = useState(0);




  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex(images.length - 1 <= currentIndex ? 0 : currentIndex + 1);
    };
    setTimeout(changeImage, 10000);
  }, [currentIndex, images.length,]);

  return { image: images[currentIndex].img,imgId: images[currentIndex].id,  };
}
