
const Recipes = [

    {"Recipe":"모카 라떼(Mocha Latte)","Link":"coffee.html"},
    {"Recipe":"캬라멜 마끼아또(Caramel macchiato)","Link":"coffee.html"},
    {"Recipe":"바닐라 라떼(Vanila latte)","Link":"coffee.html"},
    {"Recipe":"더블 초코 라떼(double chocolate latte)","Link":"NonCoffee.html"},
    {"Recipe":"그린티 라떼(Green tea latte)","Link":"NonCoffee.html"},
    {"Recipe":"밀크티(Milk tea)","Link":"NonCoffee.html"},

];

function randomRecipes(){
    let random = Recipes[Math.floor(Math.random() * Recipes.length)];
    DrinkRecipes.innerHTML = random.Recipe;
    DrinkRecipes.setAttribute('href', random.Link);
}

randomRecipes();