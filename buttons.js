let topButtons = document.querySelector(".calculator-buttons .top");
const foodSources = ["berries", "sheep", "deer", "boar",
                     "farm", "shore-fish", "deep-fish"];

// functions for the food source selection buttons

function createTopButtons(value) {
    let button = document.createElement("button");
    button.classList.add("food-type");
    button.id = value;
    button.addEventListener("click", onClickFoodType);
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

function onClickFoodType() {
    this.classList.add('active');
    let length = topButtons.childElementCount;
    for (let i = 1; i <= length; i++) {
        let currentButton = topButtons.childNodes[i];
        if (currentButton != this) {
            currentButton.classList.remove("active");
        }
    }
}

// functions for the number buttons

function setNumberButtonBehavior() {
    let numberButtons = document.querySelectorAll(".number");
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", onClickNumber);
    }
}

function onClickNumber() {
    let output = document.querySelector(".output");
    output.textContent = output.textContent + this.textContent;
    console.log("clicked");
}

foodSources.forEach(createTopButtons);
setTopButtonStyles();
setNumberButtonBehavior();

