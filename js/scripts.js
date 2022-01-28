// Business Logic
function Pizza(size, [topping1, topping2, topping3], style) {
  this.size = size;
  this.toppings = [topping1, topping2, topping3];
  this.style = style
}

const pizza = new Pizza("large", ["cheese", "pepperoni", "sausage"], "new york");

Pizza.prototype.cost = function() {
  let cost = 0;
}
console.log(pizza);

// UI Logic