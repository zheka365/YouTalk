function moveSlider(num) {
    const currentActive = sliderImages.querySelector('.active');
    const newActive = sliderImages.querySelector('.n' + num);

    if (currentActive) {
        currentActive.classList.remove('active');
    }

    if (newActive) {
        newActive.classList.add('active');
    }
}