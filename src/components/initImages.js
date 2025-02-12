import images from "./images";

export function initImages() {
  if (!images || !images.length) return;

  const sliderImages = document.querySelector(".images");

  images.forEach((image, index) => {
    const imageNode = document.createElement("div");
    imageNode.setAttribute(
      "class",
      `image n${index} ${index === 0 ? "slider_active" : ""}`,
    );
    imageNode.setAttribute("style", `background-image:url(${image.url})`);
    imageNode.setAttribute("data-index", index);

    sliderImages.appendChild(imageNode);
  });
}
// document.addEventListener("DOMContentLoaded", () => {
//   initImages();
// });
