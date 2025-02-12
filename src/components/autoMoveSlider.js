import getCurrentSlideIndex from "./initArrows";
import { moveSlider } from "./moveSlider";
import images from "./images";

const switchToNextSlide = () => {
  const currentSlideIndex = getCurrentSlideIndex();
  moveSlider(images[currentSlideIndex + 1] ? currentSlideIndex + 1 : 0);
};
setInterval(switchToNextSlide, 3000);

export default switchToNextSlide;
