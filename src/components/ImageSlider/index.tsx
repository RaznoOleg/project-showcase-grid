import { useState } from 'react';
import { Button, ImageContainer, ImageWrapper } from './styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StyleSheetManager } from 'styled-components';

interface ImageSliderProps {
  images: { original: string; small: string; medium: string; large: string }[];
  altText: string;
}

const ImageSlider = ({ images, altText }: ImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <ImageContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageWrapper>
          <img
            src={images[currentImageIndex].large}
            alt={altText}
            className="image"
          />
        </ImageWrapper>
        {images.length > 1 && isHovered && (
          <>
            <Button onClick={handlePrevImage} position="left">
              <ChevronLeft />
            </Button>
            <Button onClick={handleNextImage} position="right">
              <ChevronRight />
            </Button>
          </>
        )}
      </ImageContainer>
    </StyleSheetManager>
  );
};

export default ImageSlider;
