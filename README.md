
# _Build and Order Your Own Pizza_ 

#### By _**Ryan Ashby**_ 

#### _This application will take in input from a user regarding the size, style, and toppings they want for a pizza, and return a cost based on the choices via a submit button, displaying the choices and cost at the bottom._

### _Link to GitHub Repository_

* https://github.com/rjashby/Pizza

## Technologies Used 

* _VS Code Software_
* _Git_
* _Github_
* _Google Chrome Browser_
* _HTML_
* _CSS_ 
* _Markdown_ 
* _Bootstrap_
* _JavaScript_
* _jQuery_


## Description 

_This application works as a pizza generator and cost calculator. Specifically, the backend logic creates a pizza constructor object, which takes in size, style, and three toppings as properties. Sizes can be medium, large or extra large. Styles can be New York, Chicago, or Detroit style pizzas. Toppings include pepperoni, mushrooms, hot dogs, and many more._

_Once the user has selected their size, style, and toppings, they can submit their choices through a submit button. The submit button creates a new pizza object, and runs a cost prototype method, calculating the total cost of the pizza based on the selection made_

_Ultimately, the user will be told their selections and the total cost of their pizza via an initially hidden div, which is shown upon clicking submit_

_As an aside, this project will have two branches. Once branch for a more traditional static site, and another where a continuous looping video of an individual making a pizza plays in the background. To alternate between the branches, you can checkout the static site on the "static" branch._

## Setup/Installation Requirements 

**Cloning**

1) _In order to utilize this page on your local machine, you will need to clone a copy of this repository using the "$ git clone {url}" command in your coding terminal._
2) _Navigate to your desired directory in your command terminal and run "$ git clone https://github.com/rjashby/Pizza"_
3) _Should you wish to edit the code you cloned, you will need coding software. VS Code is an example of a free code editor, which can be downloaded at https://code.visualstudio.com/_.
4) _Once your coding software is installed, open the folder of the cloned repository, which will contain the HTML files, the bootstrap.css framework, any images, audio, as well separate individual stylesheets for each HTML file._
5) _To view the finished site locally, simply navigate to the folder/directory which you cloned the project, and open the index.html file in your browser._

**Downloading**

1) _In your browser, navigate to https://github.com/rjashby/Pizza, and click the green "Code" button, which will provide a drop down menu. Click on "Download ZIP" at the bottom of the menu, and save it to your desired location._

2) _Once downloaded, unzip and extract the files._

3) _Follow the steps above to view, edit, and open the files as needed._

## Tests/Specs

#### Describe: Pizza(size, ["topping1", "topping2"])

*Test:* "It should return a Pizza object with size and toppings properties."
*Code:* const pizza = new Pizza("large", ["cheese", "pepperoni"]);
*Expected Output:* Pizza {size: "large", toppings: ["cheese", "pepperoni"], }


*Test:* "It should return a Pizza object with size and toppings and type properties"
*Code:* const pizza = new Pizza("large", ["cheese", "pepperoni", "sausage"], "new york");
*Expected Output:* Pizza {size: "large", toppings: ["cheese", "pepperoni", "sausage"], style: "new york"}

#### Describe: Pizza.prototype.cost

*Test:* "It should build a prototype method for our Pizza constructor, with a variable to initiate a cost variable, set to 0."
*Code:* Pizza.prototype.cost = function() {
  let cost = 0;
}
let pizza = new Pizza
pizza.cost();
*Expected Output:* A new pizza object, with cost presently undefined.

*Test:* "It should take our cost prototype and increment it upward as different sizes values are provided."
*Code:* Pizza.prototype.cost = function() {
  let cost = 0;

  if (this.size === "medium") {
    cost += 9;
  }
  return cost;
}
console.log(pizza.cost());
*Expected Output:* 9

*Test:* "It should take our cost prototype and increment it upwards as different style values are provided."
*Code:* Pizza.prototype.cost = function() {
  let cost = 0;

  if (this.style === "New York Style") {
    cost += 1;
  }
  return cost;
}
console.log(pizza.cost());
*Expected Output:* 1

*Test:* "It should take our cost prototype and increment it upwards as different topping values are provided."
*Code:* Pizza.prototype.cost = function() {
  let cost = 0;

  if (this.topping1 === "pepperoni") {
    cost += 2;
  }
  return cost;
}
console.log(pizza.cost());
*Expected Output:* 2

## Known Bugs 

* _No Known Bugs._  

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2022 Ryan Ashby. All Rights Reserved.

```
MIT License

Copyright (c) 2022 Ryan Ashby.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without 
limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so 
subject to the following conditions:

The above copyright notice and this permission notice shall be included 
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

------------------------------

<a href="#">Return to Top</a>