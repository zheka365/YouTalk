function initLinks() {
    let linksContainer = document.querySelector(".links-item");

    if (!linksContainer) {
        console.error("Контейнер с классом 'links' не найден.");
        return;
    }
    images.forEach((_, index) => {
        const element = `
                <div class="rectangle-item n${index} ${index === 0 ? "active" : ""}">
                    <div class="links" data-index="${index}">${_.city}</div>
                    <div class="rectangle active" data-index="${index}"></div>
                </div>`;

        linksContainer.innerHTML += element;
    });
}

function activeLinks(num) {
    const activeLinks = document.querySelectorAll(".active");
    const nActiveLinks = document.querySelectorAll(".n" + num);

    activeLinks.forEach((node) => {
        node.classList.remove("active");
    });

    nActiveLinks.forEach((node) => {
        node.classList.add("active");
    });
}

function moveLinks() {
    document.querySelectorAll(".links").forEach((link) => {
        link.addEventListener("click", (e) => {
        moveSlider(e.target.dataset.index);
        activeLinks(e.target.dataset.index);
        });
    });
}
