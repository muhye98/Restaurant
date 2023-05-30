# Restaurant

## In the First thing i do the Html file containig the form 

   <form id="foodForm">
            <div>
                <label for="foodName">Food Name</label>
                <input type="text" id="foodName" name="Food" placeholder="add food name" />
            </div>
            <div>
                <label for="Typefood">Type Food</label>
                <select name="typesOffood" id="Typefood">
                    <option value="Fruit and vegetables" name="food1">Fruit and vegetables</option>
                    <option value="Starchy food" name="food1">Starchy food</option>
                    <option value="Dairy" name="food1">Dairy</option>
                    <option value="Protein" name="food1">Protein</option>
                    <option value="Fat" name="food1">Fat</option>
                </select>
            </div>
            <button id="save" type="submit">Submit</button>
        </form>


## After that i do the js event and the constucter for the table
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
    food.style.marginLeft = "400px"
    food.style.marginRight = "400px"


    id.style.border = "2px solid black"
    foodName.style.border = "2px solid black"
    Typefood.style.border = "2px solid black"
    price.style.border = "2px solid black"
}

## and this is the part for Event 
function handler(e) {
    e.preventDefault();
    let foodName = e.target.Food.value;
    let Typefood = e.target.typesOffood.value;

    let food1 = new Food(foodName, Typefood);
    food1.rander()
}
let saveValues = document.getElementById('foodForm');
saveValues.addEventListener('submit', handler)
