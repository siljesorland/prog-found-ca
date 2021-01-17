Question 1

var food = "bread"

Question 2

var person = "Martin" {
    age: 27
    gender: "male";
}

console.log(person);

Question 3


if (outOfStock === true) {
    console.log("Out of Stock");
} else {
    console.log("In Stock");
}

Question 4

var numbers = [2, 3, 5, 8, 9];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

Question 5

for (var i = 15; i <= 25; i++) {
    console.log(i);
}

Question 6

for (var i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}

Question 7

var cars = [{
         brand: "volvo",
         year: 1989,
         inStock: true
     },

     {
         brand: "toyota",
         year: 2001,
         inStock: false
     },
 ];

 

 for (var i = 0; i < cars.length; i++) {
     var year = cars[i].year;
     var inStock = cars[i].inStock;
     console.log(year, inStock);
 }

Question 8

function whatIDontLike(typeofanimal) {
    console.log("I dont like " + typeofanimal);
}

whatIDontLike("snakes");

Question 9

function subtraction(num1, num2) {
    return num1 - num2;
}
var result = subtraction(8, 2);

console.log(result);

Question 10

var emptyArray = [];

function word(hello) {
    return hello + emptyArray;
}

var result = word("hello" + " " + "you");

console.log(result);
