import { initImages } from "./initImages.js";
import { initArrows } from "./initArrows.js";
import { initDots, moveDots } from "./initDots.js";

export function initSlider() {
  initImages();
  initArrows();
  initDots();
  moveDots();
}

// document.addEventListener("DOMContentLoaded", initSlider, { once: true });
