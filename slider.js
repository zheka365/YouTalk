let images = [{
    url: "https://i.ibb.co/gjNyXZx/image1.png",
    city: "Rostov-on-Don \nLCD admiral",
    repairTime: "3.5 months",
    apartment: "81 m2",
    repairCost: "Upon request"
}, {
    url: "https://i.ibb.co/72gcc1f/image2.png",
    city: "Sochi \nThieves",
    repairTime: "4 months",
    apartment: "105 m2",
    repairCost: "Upon request"
}, {
    url: "https://i.ibb.co/N3NRpK0/image3.png",
    city: "Rostov-on-Don\nPatriotic",
    repairTime: "3 months",
    apartment: "93 m2",
    repairCost: "Upon request"
}]



function initSlider() {

    function initImages() {
        if (!images || !images.length) return;

        let sliderImages = document.querySelector(".image");
        let sliderArrows = document.querySelector(".arrow");
        let sliderDots = document.querySelector(".dots");


        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url})" data-index="${index}"></div>`
            sliderImages += imageDiv
        })
    }

    initImages()
    initArrows()

    function initArrows () {
        sliderArrows.querySelectorAll('.arrows').forEach((arrow) => {
            arrow.addEventListener('click', function() {
                let curNum = +sliderImages.querySelector('.active').dataset.index
                let nextNum

                if (arrow.classList.contains('left')) {
                    nextNum = curNum === 0? images.length - 1 : curNum - 1
                } else {
                    nextNum = curNum === images.length - 1? 0 : curNum + 1
                }
                moveSlider(nextNum)
            })
        })
    }

    initDots
    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`
            sliderDots.innerHTML += dot
        })
        sliderDots.querySelectorAll('.dots-item').forEach(dot => {
            moveSlider(this.dataset.index)
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active')
        sliderImages.querySelector('.n' + num).classList.add('active')
    }

    


}



















document.addEventListener("DOMContentLoaded", function() {
    initSlider();
});
