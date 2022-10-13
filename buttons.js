let topButtons = document.querySelector(".calculator-buttons .top");
const foodSources = ["berries", "sheep", "deer", "boar",
                     "farm", "shore-fish", "deep-fish"];

foodSources.forEach(createTopButtons);
setTopButtonStyles();

function createTopButtons(value) {
    let button = document.createElement("button");
    button.id = value;
    button.addEventListener("click", onClick);
    topButtons.appendChild(button);
}

function setTopButtonStyles() {
    let styleSheet = document.styleSheets[0]
    for (let i = 0; i < foodSources.length; i++) {
        let food = foodSources[i]
        styleSheet.insertRule(`#${food} { 
            grid-area: ${food};
            background-image: url('images/resource-icons/food_icons/${food}.png')
         }`)
    }
}

function onClick() {
    this.classList.add('active');
    let length = topButtons.childElementCount;
    for (let i = 1; i <= length; i++) {
        let currentButton = topButtons.childNodes[i];
        if (currentButton != this) {
            currentButton.classList.remove("active");
        }
    }
}
