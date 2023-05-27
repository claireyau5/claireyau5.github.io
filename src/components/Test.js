import { Box, Image, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function ImageSlideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    "https://bit.ly/dan-abramov",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/450"
  ];

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex >= images.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n - 1);
  };

  return (
    <Box position="relative" maxWidth="1000px" margin="auto">
      {images.map((imageUrl, index) => (
        <Box
          key={index}
          className={`mySlides ${index === slideIndex ? "fade" : ""}`}
          display={index === slideIndex ? "block" : "none"}
        >
          <Image src={imageUrl} style={{ width: "50%" }} />
        </Box>
      ))}
      
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Slide"
        className="prev"
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        onClick={() => plusSlides(-1)}
      />
      
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Slide"
        className="next"
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        onClick={() => plusSlides(1)}
      />

      <Box style={{ textAlign: "center" }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </Box>
    </Box>
  );
}

export default ImageSlideshow;