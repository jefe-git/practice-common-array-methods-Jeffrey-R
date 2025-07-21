

// Creating my Array Task 1

let breakfastOrder = [
    'Carmel Frappe', "Regular Decaf Coffee", "Pink Drink",
    'Glazed Donut', 'Chocolate Crossiant', 'Chocolate Chip Cookie'
];

// Create arrays for drinks and pastries
let breakfastDrinks = breakfastOrder.slice(0, 3);      // Items 0, 1, 2
let pastries = breakfastOrder.slice(3, 6);   // Items 3, 4, 5

// Log the lengths Task 2
console.log("Number of drinks:", breakfastDrinks.length);
console.log("Number of pastries:", pastries.length);


// First drink and last pastry using Indexing
console.log("First drink:", breakfastOrder[0]);      // "Carmel Frappe"
console.log("Last pastry:", breakfastOrder[5]);      // "Chocolate Chip Cookie"

// Second drink and second pastry
console.log("Second drink:", breakfastOrder[1]);     // "Regular Decaf Coffee"
console.log("Second pastry:", breakfastOrder[4]);    // "Chocolate Crossiant"

// Third drink and first pastry
console.log("Third drink:", breakfastOrder[2]);      // "Pink Drink"
console.log("First pastry:", breakfastOrder[3]);     // "Glazed Donut"

// Declare variables for the index position Task 4
let drinkIndex = 0;
let pastryIndex = 5;

console.log("Drink:", breakfastOrder[drinkIndex]);   // "Carmel Frappe"
console.log("Pastry:", breakfastOrder[pastryIndex]); // "Chocolate Chip Cookie"

drinkIndex = 1;
pastryIndex = 4;

console.log("Drink:", breakfastOrder[drinkIndex]);   // "Regular Decaf Coffee"
console.log("Pastry:", breakfastOrder[pastryIndex]); // "Chocolate Crossiant"

drinkIndex = 2;
pastryIndex = 3;

console.log("Drink:", breakfastOrder[drinkIndex]);   // "Pink Drink"
console.log("Pastry:", breakfastOrder[pastryIndex]); // "Glazed Donut"

//Loop GTask 5

// Array
let drinks = [
  "Carmel Frappe", 
  "Regular Decaf Coffee", 
  "Pink Drink"
];

//for loop that adjusts to the length of the array
for (let i = 0; i < drinks.length; i++) {
  console.log("Drink #" + (i + 1) + ": " + drinks[i]);
}

//Task6

// Step 1: Add new drink using push
drinks.push("DBL Chocolate Chip Frappe");

// Step 2: Log the updated number of drinks
console.log("Updated number of drinks:", drinks.length); // Now it's 4

// Step 3: Use variables to grab a specific drink
let indexOne = 0;
let indexTwo = 3;

console.log("Selected drink 1:", drinks[indexOne]);  // "Carmel Frappe"
console.log("Selected drink 2:", drinks[indexTwo]);  // "DBL Chocolate Chip Frappe"