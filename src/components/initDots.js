import images from "./images";
import { moveSlider } from "./moveSlider";

export function initDots() {
  const dotsContainer = document.querySelector(".dots");

  images.forEach((_, index) => {
    const dotNode = document.createElement("div");

    dotNode.setAttribute(
      "class",
      `dot n${index} ${index === 0 ? "slider_active" : ""}`,
    );
    dotNode.setAttribute("data-index", index);

    dotsContainer.appendChild(dotNode);
  });
}

export function moveDots() {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
      moveSlider(e.target.dataset.index);
    });
  });
}
