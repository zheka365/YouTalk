export function moveSlider(num) {
  const activeNodes = document.querySelectorAll(".slider_active");
  const nActiveNodes = document.querySelectorAll(".n" + num);

  activeNodes.forEach((node) => {
    node.classList.remove("slider_active");
  });
  nActiveNodes.forEach((node) => {
    node.classList.add("slider_active");
  });
}
