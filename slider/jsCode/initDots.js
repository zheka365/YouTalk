function initDots() {
    const dotsContainer = document.querySelector(".dots");

    images.forEach((_, index) => {
        const dotNode = document.createElement("div");

        dotNode.setAttribute("class",`dot n${index} ${index === 0 ? "active" : ""}`);
        dotNode.setAttribute("data-index", index);

        dotsContainer.appendChild(dotNode);
    });
}

function moveDots() {
    document.querySelectorAll(".dots").forEach((dot) => {
        dot.addEventListener("click", (e) => {
        moveSlider(e.target.dataset.index);
        });
    });
}
