// Business Logic
function Pizza(size, [topping1, topping2]) {
  this.size = size;
  this.toppings = [topping1, topping2];
}

const pizza = new Pizza("large", ["cheese", "pepperoni"]);
console.log(pizza);


// UI Logic