import { moveSlider } from "./moveSlider";
import images from "./images";

const getCurrentSlideIndex = () => {
  const currentSlide = document.querySelector(".image.slider_active");

  return Number(currentSlide.dataset.index);
};

export function initArrows() {
  const arrows = document.querySelectorAll(".arrow");

  const leftArrow = arrows[0];
  const rightArrow = arrows[1];

  leftArrow.addEventListener("click", () => {
    const currentSlideIndex = getCurrentSlideIndex();
    moveSlider(
      images[currentSlideIndex - 1] ? currentSlideIndex - 1 : images.length - 1,
    );
  });
  rightArrow.addEventListener("click", () => {
    const currentSlideIndex = getCurrentSlideIndex();
    moveSlider(images[currentSlideIndex + 1] ? currentSlideIndex + 1 : 0);
  });
}

export default getCurrentSlideIndex;
