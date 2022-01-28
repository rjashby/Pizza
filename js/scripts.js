// Business Logic
function Pizza(size, style, [topping1, topping2, topping3]) {
  this.size = size;
  this.style = style
  this.toppings = [topping1, topping2, topping3]
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

Pizza.prototype.cost = function() {
  let cost = 0;

  if (this.size === "medium") {
    cost += 9;
  } else if (this.size === "large") {
    cost =+ 12;
  } else if (this.size === "extra") {
    cost =+ 15;
  }
  
  if (this.style === "new york") {
    cost += 1;
  } else if (this.size === "chicago") {
    cost += 4;
  } else if (this.size === "detroit") {
    cost += 3;
  }

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

  if (this.topping2 === "pepperoni") {
    cost += 2;
  } else if (this.topping2 === "sausage") {
    cost += 2;
  } else if (this.topping2 === "onion") {
    cost += 1;
  } else if (this.topping2 === "mushroom") {
    cost += 1;
  } else if (this.topping2 === "ham") {
    cost += 2;
  } else if (this.topping2 === "pineapple") {
    cost += 1;
  } else if (this.topping2 === "bacon") {
    cost += 2;
  } else if (this.topping2 === "banana") {
    cost += 1;
  } else if (this.topping2 === "hotdog") {
    cost += 2;
  } else {
    cost += 0;
  }

  if (this.topping3 === "pepperoni") {
    cost += 2;
  } else if (this.topping3 === "sausage") {
    cost += 2;
  } else if (this.topping3 === "onion") {
    cost += 1;
  } else if (this.topping3 === "mushroom") {
    cost += 1;
  } else if (this.topping3 === "ham") {
    cost += 2;
  } else if (this.topping3 === "pineapple") {
    cost += 1;
  } else if (this.topping3 === "bacon") {
    cost += 2;
  } else if (this.topping3 === "banana") {
    cost += 1;
  } else if (this.topping3 === "hotdog") {
    cost += 2;
  } else {
    cost += 0;
  }
  return cost;
}
const pizza = new Pizza("medium", ["cheese", "pepperoni", "sausage"], "new york");
console.log(pizza);

// UI Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let size = $("select#size option:selected").val();
    let style = $("select#style option:selected").val();
    let topping1 = $("input:radio[name=topping1]:checked").val();
    let topping2 = $("input:radio[name=topping2]:checked").val();
    let topping3 = $("input:radio[name=topping3]:checked").val();
    const myPizza = new Pizza(size, style, [topping1, topping2, topping3]);
    console.log(myPizza);
    console.log(size);
    console.log(style);
    console.log(topping1);
    console.log(topping2);
    console.log(topping3);
    // console.log(toppings);
    $(".output").fadeIn();
    window.scrollTo(0,document.body.scrollHeight);
  })
})