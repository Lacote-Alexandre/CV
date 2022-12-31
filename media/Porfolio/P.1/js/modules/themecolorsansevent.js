function themeColorRed() {
    // ici je sais que je suis en theme-red
    const id = "theme-red";
}

function themeColorGreen() {
    // ici je sais que je suis en theme-red
    const id = "theme-green";
}

const colorButtonRedElement = document.querySelector("#theme-red");
colorButtonRedElement.addEventListener("click", themeColorRed)

const colorButtonGreenElement = document.querySelector("#theme-green");
colorButtonGreenElement.addEventListener("click", themeColorGreen)
