function initImages() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".images");

    images.forEach((image, index) => {
        const imageNode = document.createElement('div');
        imageNode.setAttribute('class', `image n${index} ${index === 0 ? "active" : ""}`);
        imageNode.setAttribute('style', `background-image:url(${image.url})`)
        imageNode.setAttribute('data-index', index)

        sliderImages.appendChild(imageNode);
    })
}