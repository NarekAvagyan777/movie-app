import { useEffect, useRef, useState } from "react";
import "./ImageSlider.scss";
import specials1 from "../../assets/https_specials-1.png";
import specials2 from "../../assets/https_specials-2.png";
import specials3 from "../../assets/https_specials-3.png";
import specials4 from "../../assets/https_specials-4.png";
import specials5 from "../../assets/https_specials-5.png";
import specials6 from "../../assets/https_specials-6.png";
import specials7 from "../../assets/https_specials-7.png";
import specials8 from "../../assets/https_specials-8.png";

const myObject = {
  "https_specials-1.png": specials1,
  "https_specials-2.png": specials2,
  "https_specials-3.png": specials3,
  "https_specials-4.png": specials4,
  "https_specials-5.png": specials5,
  "https_specials-6.png": specials6,
  "https_specials-7.png": specials7,
  "https_specials-8.png": specials8,
};

const ImageSlider = ({ images, setSelectedMovie }) => {

    // console.log('imagessss', images);

  const carouselRef = useRef(null);
  const [isDragStart, setDragStart] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState();
  const [prevScrollLeft, setPrevScrollLeft] = useState();
  const [positionDiff, setPositionDiff] = useState();
  const animationFrameId = useRef(null); // Declare animationFrameId as a ref

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragStart) {
        e.preventDefault();
        setDragging(true);
        carouselRef.current.classList.add("dragging");
        setPositionDiff((e.pageX || e.touches[0].pageX) - prevPageX);
        animationFrameId.current = requestAnimationFrame(() => {
          carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
        });
      }
    };

    const handleMouseUp = () => {
      if (isDragStart) {
        setDragStart(false);
        carouselRef.current.classList.remove("dragging");
        if (isDragging) {
          setDragging(false);
          cancelAnimationFrame(animationFrameId.current);
          autoSlide();
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragStart, isDragging, prevPageX, prevScrollLeft, positionDiff]);

  const autoSlide = () => {
    if (
      carouselRef.current.scrollLeft -
        (carouselRef.current.scrollWidth - carouselRef.current.clientWidth) >
        -1 ||
      carouselRef.current.scrollLeft <= 0
    ) {
      return;
    }
    setPositionDiff(Math.abs(positionDiff));
    const firstImgWidth = carouselRef.current.firstChild.clientWidth + 14;
    const valDifference = firstImgWidth - positionDiff;
    if (carouselRef.current.scrollLeft > prevScrollLeft) {
      carouselRef.current.scrollLeft +=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } else {
      carouselRef.current.scrollLeft -=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
  };

  const dragStart = (e) => {
    setDragStart(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragStop = () => {
    if (isDragStart) {
      setDragStart(false);
      carouselRef.current.classList.remove("dragging");
      if (isDragging) {
        setDragging(false);
        cancelAnimationFrame(animationFrameId.current);
        autoSlide();
      }
    }
  };

  return (
    <div className="wrapper">
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={dragStart}
        onTouchStart={dragStart}
        onMouseUp={dragStop}
        onTouchEnd={dragStop}
      >
        {images.map((image, index) => (
          <img
            onClick={() => setSelectedMovie(image)}
            key={image.Id}
            src={myObject[image.CoverImage]}
            alt={`img-${index}`}
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
