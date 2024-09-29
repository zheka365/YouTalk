function initTitles() {
    let countryContainer = document.querySelector('.country-container');

    if (!countryContainer) {
        return;
    }

    for (let i = 0; i < images.length; i++) {
        let obj = images[i];

        let country = `<div class="country n${i} ${i === 0 ? "active" : ""}">
                        <div class="countryName" data-index="${i}">${obj.city}</div>
                        </div>`
        countryContainer.innerHTML += country;   
    }

    let repairContainer = document.querySelector('.repair-container');


    if (!repairContainer) {
        return
    }

    for (let i = 0; i < images.length; i++) {
        let obj = images[i]

        let repair = `<div class="repair n${i} ${i === 0 ? "active" : ""}">
        <div class="repairName" data-index="${i}">${obj.repairTime}</div>
        </div>`
        repairContainer.innerHTML += repair;   
    }

    let areaContainer = document.querySelector('.area-container')

    if (!areaContainer) {
        return
    }

    for (let i = 0; i < images.length; i++) {
        let obj = images[i]

        let area = `<div class="area n${i} ${i === 0 ? "active" : ""}">
        <div class="areaName" data-index="${i}">${obj.apartment}</div>
        </div>`
        areaContainer.innerHTML += area;   
    }

    let costContainer = document.querySelector('.cost-container')

    if (!costContainer) {
        return
    }

    for (let i = 0; i < images.length; i++) {
        let obj = images[i]

        let cost = `<div class="cost n${i} ${i === 0 ? "active" : ""}">
        <div class="costName" data-index="${i}">${obj.repairCost}</div>
        </div>`
        costContainer.innerHTML += cost;   
    }
}
