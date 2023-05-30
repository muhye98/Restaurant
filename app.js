'use strict'

function generateRandom(min, max) {

    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;
}


function generateID() {
    let id = Math.floor(generateRandom(1, 9))
    return id;
}

function generatePrice() {
    let piceE = Math.floor(generateRandom(1, 9))
    return piceE;
}

function Food(foodName, Typefood, selc1, selc2, selc3, selc4, selc5) {

    this.id = generateID();
    this.name = foodName;
    this.type = Typefood;
    this.price = generatePrice();

}

// let food1 = new Food("Pizza", 'Fruit and vegetables', 'Starchy food', 'Dairy', 'Protein', 'Fat',);
// let food2 = new Food("Burger", 'Fruit and vegetables', 'Starchy food', 'Dairy', 'Protein', 'Fat');
// let food3 = new Food("Apple", 'Fruit and vegetables', 'Starchy food', 'Dairy', 'Protein', 'Fat');

Food.prototype.rander = function () {
    let food = document.getElementById('food');

    let id = document.createElement("p");
    id.textContent = ` ID:${this.id} `;
    food.appendChild(id);

    let foodName = document.createElement('h3');
    foodName.textContent = ` Name:${this.name} `;
    food.appendChild(foodName);

    let Typefood = document.createElement('h3');
    Typefood.textContent = ` Type:${this.type} `;
    food.appendChild(Typefood);

    let price = document.createElement("p");
    price.textContent = ` price:${this.price} `;
    food.appendChild(price);

    food.style.border = "2px solid black"

    food.style.display = "flex"
    food.style.flexDirection = "column"
    food.style.background = "#FFC26F"
    food.style.marginTop = "20px"
    food.style.marginLeft = "800px"
    food.style.marginRight = "800px"
    id.style.padding = "15px"
    foodName.style.padding = "15px"
    Typefood.style.padding = "15px"
    price.style.padding = "15px"

    id.style.border = "2px solid black"
    foodName.style.border = "2px solid black"
    Typefood.style.border = "2px solid black"
    price.style.border = "2px solid black"
}

function handler(e) {
    e.preventDefault();
    let foodName = e.target.Food.value;
    let Typefood = e.target.typesOffood.value;

    let food1 = new Food(foodName, Typefood);
    food1.rander()
}
let saveValues = document.getElementById('foodForm');
saveValues.addEventListener('submit', handler)


// let selc1 = document.createElement('option');
    // let selc2 = document.createElement('option');
    // let selc3 = document.createElement('option');
    // let selc4 = document.createElement('option');
    // let selc5 = document.createElement('option');
    // selc1.textContent = this.selc1
    // selc2.textContent = this.selc2
    // selc3.textContent = this.selc3
    // selc4.textContent = this.selc4
    // selc5.textContent = this.selc5
    // Typefood.textContent = this.type;
    // food.appendChild(Typefood);
    // Typefood.appendChild(selc1);
    // Typefood.appendChild(selc2);
    // Typefood.appendChild(selc3);
    // Typefood.appendChild(selc4);
    // Typefood.appendChild(selc5);
// food1.rander()
// food2.rander()
// food3.rander()