const getCurrentSlideIndex = () => {
    const currentSlide = document.querySelector(".image.active");

    return Number(currentSlide.dataset.index);
}

function moveSlider(num) {
    const activeNodes = document.querySelectorAll('.active');
    const nActiveNodes = document.querySelectorAll('.n' + num)

    activeNodes.forEach((node) => {
        node.classList.remove('active')
    })

    nActiveNodes.forEach((node) => {
        node.classList.add('active')
    })
}

function initArrows() {
    const arrows = document.querySelectorAll('.arrow');

    const leftArrow = arrows[0];
    const rightArrow = arrows[1];

    leftArrow.addEventListener('click', () => {
        const currentSlideIndex = getCurrentSlideIndex()
        moveSlider(images[currentSlideIndex - 1] ? currentSlideIndex - 1 : images.length - 1)
    })

    rightArrow.addEventListener('click', () => {
        const currentSlideIndex = getCurrentSlideIndex()
        moveSlider(images[currentSlideIndex + 1] ? currentSlideIndex + 1 : 0)
    })
}