/*
//Adding new item to an array
let officeCharacters = ["Michael", "Jim", "Dwight"];
console.log(officeCharacters);

//.push = adds new data at the end of the array
officeCharacters.push("Andy");
console.log(officeCharacters);

//.pop = remove the last item in the array
officeCharacters.pop();
console.log(officeCharacters);

//.unshift = Adds a new item to the front of the array
officeCharacters.unshift("Dwight");
console.log(officeCharacters);

//.shift = removes the first item in the array
officeCharacters.shift();
console.log(officeCharacters);

//.length = gives us the total number of items in an array
console.log(officeCharacters.length);
*/

let items = ["apple", "banana", "cherry", "date", "elderberry"]

let firstItem = items[0];
let thirdItem = items[2];
let lastItem = items[4];


console.log("Items: " + items);
console.log("First Item: " + firstItem);
console.log("Third Item: " + thirdItem);
console.log("Last Item: " + lastItem);

let favoriteMovies = ["Lord of the Rings", "Lilo and Stitch", "Cory in the House: All Star Edition"];

console.log("Movie One: " + favoriteMovies[0]);
console.log("Movie Two: " + favoriteMovies[1]);
console.log("Movie Three: " + favoriteMovies[2]);

let numberArray = [1, 2, 3, 4, 5, 6]
let arraySum = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3] + numberArray[4] + numberArray[5];

console.log("Sum of array: " + arraySum);

let stringArray = ["Bruh", "Google", "YouTube", "Gmail", "Supercalifragilisticexpialidocious"];
let concatenatedString = stringArray[0] + stringArray[1] + stringArray[2] + stringArray[3] + stringArray[4];

console.log(concatenatedString);

let colors = ["red", "blue", "green", "yellow", "purple"];

colors[2] = "cyan";
colors[4] = "orange";

console.log(colors);