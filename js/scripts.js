// Business Logic
function Pizza(size, [topping1, topping2, topping3], style) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.style = style
}

Pizza.prototype.cost = function() {
  let cost = 0;

  // if (this.size === "medium") {
  //   cost += 9;
  // } else if (this.size === "large") {
  //   cost =+ 12;
  // } else if (this.size === "extra") {
  //   cost =+ 15;
  // }
  // return cost;
  // if (this.style === "new york") {
  //   cost += 1;
  // } else if (this.size === "chicago") {
  //   cost += 4;
  // } else if (this.size === "detroit") {
  //   cost += 3;
  // }
    if (this.topping1 === "cheese") {
      cost += 1;
    } else if (this.topping1 === "pepperoni") {
      cost += 2;
    } else if (this.topping1 === "sausage") {
      cost += 2;
    } else if (this.topping1 === "onion") {
      cost += 1;
    } else if (this.topping1 === "mushroom") {
      cost += 1;
    } else if (this.topping1 === "ham") {
      cost += 2;
    } else if (this.topping1 === "pineapple") {
      cost += 1;
    } else if (this.topping1 === "bacon") {
      cost += 2;
    } else if (this.topping1 === "banana") {
      cost += 1;
    } else {
      cost += 2;
    }
  return cost;
}
const pizza = new Pizza("medium", ["cheese", "pepperoni", "sausage"], "new york");
console.log(pizza);

// UI Logic