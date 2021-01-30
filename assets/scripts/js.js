let items = document.querySelectorAll(".slider__item")
let slider = document.querySelector(".slider")
let left = document.querySelector(".latest-articles__vektor-left")
let right = document.querySelector(".latest-articles__vektor-right")
let stepL = 2;
let stepR = items.length;
let slides = []

left.addEventListener("click", getLeft)
right.addEventListener("click", getRight)

items.forEach(el => {
    el.remove()
})

for (let i = 0; i < 3; i++) {
    slider.appendChild(items[i])
}

function setTransformLeft() {
    let slides = document.querySelectorAll(".slider__item")
    if (stepR > items.length) {
        stepR = 0
    }
    if (stepL === items.length) {
        stepL = 0;
        stepR = items.length - 2;
    }
    slides[0].remove()
    slider.appendChild(items[stepL])
}

function setTransformRight() {
    let slides = document.querySelectorAll(".slider__item")
    slides[2].remove()
    if (stepL < 0) {
        stepL = items.length - 1
    }
    if (stepR < 0) {
        stepR = 0
    }
    if (stepR === 0) {
        slider.prepend(items[stepR])
        stepL = 2;
        stepR = items.length;
    } else {
        slider.prepend(items[stepR])
    }
}

function getLeft() {
    stepL++
    stepR++
    setTransformLeft()
}
function getRight() {
    stepR--
    stepL--
    setTransformRight()
}