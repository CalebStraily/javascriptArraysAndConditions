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

/*
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


let rng = Math.floor(Math.random() * Math.floor(colors.length));

let number1 = Math.floor(2);
console.log(number1);

colors[2] = "cyan"
colors.pop();
colors.push("orange");
// Output the results
console.log(colors[rng]);
*/

/*
//CONDITIONS

let boo = false;
console.log(boo);

//"==" - "is equal to"

let bar = 4 == 5 - 4;
console.log(bar);

let boo2 = "4";
let boo3 = 4;
let boo4 = 4;

console.log(boo2 == boo3);

//Strictly Equals to "==="

console.log(boo2 === boo3);

//Not equal to "!="

console.log(boo3 != boo4);

//Greater than ">"
console.log(boo3 > 6);
//!FALSE

//Less than "<"
console.log(boo3 < 6);
//!TRUE

//Less than or equal to "<="
console.log(boo3 <= 4);
//!?TRUE

//Greater than or equal to ">="
console.log(boo3 >= 5);
//?False

//LOGICAL Operators

// AND = "&&"
console.log("Double Ampersands: " + (4 == 4 && 3 == 3));

// OR = "||"
console.log("Double LINES: " + (4 == 3 || 3 == 3));

// NOT = "!"
console.log("NOT: " + (!false));

//If statement

if (boo3 == 4)
{
    console.log("HEY I'm THE NUMBER 4!");
};

let amHungry = true;

//If/else statement

if(amHungry)
{
    console.log("Let's eat! I want Chicken nuggies!");
}
else
{
    console.log("Let's keep coding! Yay!");
};

//Else if statement

let howHungry = 75;

if (amHungry === true && howHungry >= 75)
{
    console.log("I'm so hungry I could eat a horse.");
}
else if (amHungry === true && howHungry > 25)
{
    console.log("I'm hungry enough to eat cheez-itz.");
}
else if (amHungry === false && howHungry >= 25)
{
    console.log("I'm depressed.")
}
else
{
    console.log("I'm not that hungry.");
}

//Switch Statement
switch (amHungry == true)
{
    case howHungry >= 75:
    {
        console.log("I'm so hungry I could eat a horse.");
        break;
    }
    case howHungry >= 25:
    {
        console.log("I'm hungry enough to eat cheez-itz.");
        break;
    }
    default:
    {
        console.log("I'm not that hungry.");
        break;
    }
}

switch (amHungry == false)
{
    case howHungry >= 25:
    {
        console.log("I'm depressed.");
        break;
    }
    default:
    {
        console.log("I'm not actually hungry, but I'm still depressed.");
        break;
    }
}
*/

/*
//EX. 1

let favoriteFruits = ["Grapes", "Bananas", "Strawberries"];
let fruitCheck = "Strawberries";

let isInArray = false;
//for loop example
for (let i = 0; i < favoriteFruits.length; i++)
{
    if (fruitCheck == favoriteFruits[i])
    {
        console.log("fruitCheck is equal to: " + favoriteFruits[i]);
        isInArray = true;
    }
}
if (isInArray = false)
{
    console.log(fruitCheck + "is not in array.");
}

//if/else example
if(fruitCheck == favoriteFruits[0])
{
    console.log("fruitCheck is equal to: " + favoriteFruits[0]);
}
else if(fruitCheck == favoriteFruits[1])
{
    console.log("fruitCheck is equal to: " + favoriteFruits[1]);
}
else if(fruitCheck == favoriteFruits[2])
{
    console.log("fruitCheck is equal to: " + favoriteFruits[2]);
}
else
{
    console.log(fruitCheck + " is not in the array.");
}

//EX. 2

let grade = ["A", "B", "C", "D", "F"];
let studentGrade = 85;

if (studentGrade >= 93)
{
    console.log("Student made an: " + grade[0]);
}
else if (studentGrade <= 92 && studentGrade >= 84)
{
    console.log("Student made a: " + grade[1]);
}
else if (studentGrade <= 83 && studentGrade >= 74)
{
    console.log("Student made a: " + grade[2]);
}
else if (studentGrade <= 73 && studentGrade >= 65)
{
    console.log("Student made a: " + grade[3]);
}
else
{
    console.log("Student made an: " + grade[4]);
}

//EX. 3

let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentDay = "Sunday";

if (currentDay == dayOfWeek[0] || currentDay == dayOfWeek[1] || currentDay == dayOfWeek[2] 
    || currentDay == dayOfWeek[3] || currentDay == dayOfWeek[4])
{
    console.log(currentDay + " is a weekday.");
}
else if (currentDay == dayOfWeek[5] || currentDay == dayOfWeek[6])
{
    console.log(currentDay + " is during the weekend.");
}
else
{
    console.log(currentDay + " is not a day of the week.");
}

//EX. 4

let temperature = 66;
let temperatureLevels = ["Cold", "Just Right", "Hot"];

if (temperature <= 65)
{
    console.log("Temperature is: " + temperatureLevels[0]);
}
else if (temperature >= 66 && temperature <= 75)
{
    console.log("Temperature is: " + temperatureLevels[1]);
}
else if (temperature >= 76)
{
    console.log("Temperature is: " + temperatureLevels[2]);
}

//EX. 5

let userNumber = -1;

if (userNumber < 0)
{
    console.log("Number is negative.")
}
else if (userNumber == 0)
{
    console.log("Number is zero.")
}
else if (userNumber > 0)
{
    console.log("Number is positive.");
}
*/

//Max of Two Number Exercise
//Create a program that compares two numbers andl ogs the larger one to the console.

let numberOne = 14;
let numberTwo = 74;

if (numberOne > numberTwo)
{
    console.log("Max number is Number One: " + numberOne);
}
else if (numberTwo > numberOne)
{
    console.log("Max number is Number Two: " + numberTwo);
}
else if (numberOne == numberTwo)
{
    console.log("Number One: " + numberOne + " and Number Two: " + numberTwo + " are the same and thus both max.");
}