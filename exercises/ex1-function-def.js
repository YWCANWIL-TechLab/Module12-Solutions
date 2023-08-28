// console.log(getFullName("Graham", "Scott", "Eichstaedt"));
// * FUNCTION DEFINITION EXERCISES

/**
 * * Question 1
 * 
 * Write a function that prints out your name, by using parameters.
 * This function should work for any person's name, so you must use 
 * the parameters to complete the function.
 * 
 * * We're creating this function with a function declaration (normal function)
 * 
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} [middleName=""] 
 * 
 */
function writeMyNameWithParameters(firstName, middleName = "", lastName) {
    // TODO Finish the function
    return `My name is ${firstName} ${middleName} ${lastName}`;
}


/**
 * * Question 2
 * 
 * Recreate the function above using a function expression. After you have 
 * created the function expression, call the function on the line beneath it.
 * 
 * 
 */
const writeMyNameWithParameters2 = function(firstName, middleName = "", lastName) {
    return `My name is ${firstName} ${middleName} ${lastName}`;
}

/**
 * * Question 3 
 * 
 * Create a function Constructor that creates Person objects.
 * Please name the function Person.
 * 
 * @param {String} firstName
 * @param {String} lastName
 * @param {Number} age
 */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

/**
 * * Question 4
 * 
 * Create a function expression that is self invoking.
 * 
 * The function should print out numbers 1 through 100.
 * 
 * Remember: Function expressions are anonymous functions assigned to variables
 * 
 * 
 */
const print1To100 = (function() {
    let num = 1;
    while(num <= 100) {
        console.log(num);
        num++;
    }
})()


/**
 * * Question 5
 * 
 * Given a random number of arguments, return the number of arguments
 * 
 * @param  {...any} args 
 */
function howManyArgs(...args) {
    return arguments.length;
}

// Automatically Invoking Function Declaration Example
(function getName(firstName = "John", middleName = "", lastName = "Doe") {
    console.log(`My full name is ${firstName} ${middleName} ${lastName}!`);
    return `My full name is ${firstName} ${middleName} ${lastName}!`;
})()

// Automatically Invoking Function Expression Example
const getFullName = (function(firstName, middleName, lastName) {
    return `My full name is ${firstName} ${middleName} ${lastName}!`;
    // return firstName + " " + middleName + " " + lastName;
})()

// Arrow Function Expression
const getFullName2 = (firstName, middleName, lastName) => {
    console.log("It's working!");
    return `My full name is ${firstName} ${middleName} ${lastName}!`;
};

// Arrow Function Expression
const getFullName3 = (firstName, middleName, lastName) => `My full name is ${firstName} ${middleName} ${lastName}!`;



// console.log(getFullName("Graham", "Scott", "Eichstaedt"));

function getAverageOfNums(a, b) {
    return arguments.length;
}

console.log(getAverageOfNums(1, 5, 10, 25, 50, 100));

// Pass By Reference
const fruit = {
    name : "Banana",
    color : "Yellow"
};

function clearObject(obj) {
    for(let prop in obj) {
        obj[prop] = null;
    }
    console.log("All done!");
}

clearObject(fruit);
console.log(fruit);

// Global Variable Example
let bankAccountTotal = 0;

function deposit(amount) {
    bankAccountTotal = bankAccountTotal + amount;
    // bankAccountTotal += amount;
}

function withdraw(amount) {
    bankAccountTotal = bankAccountTotal - amount;
    // bankAccountTotal -= amount;
    return amount;    
}

deposit(500);
deposit(500);
deposit(500);

bankAccountTotal = 750;
console.log(bankAccountTotal);  
// ! You Got Robbed!




// Closure Example
function bankAccount() {
    let betterBankAccountTotal = 0;

    return {
        deposit : function(amount) {
            betterBankAccountTotal = betterBankAccountTotal + amount;
            console.log(`Your bank account total is: ${betterBankAccountTotal}`);
            return null;
        },
        withdraw : function(amount) {
            betterBankAccountTotal = betterBankAccountTotal - amount;
            console.log(`Your bank account total is: ${betterBankAccountTotal}`);
            return amount;
        },
        getAccountTotal : function() {
            return betterBankAccountTotal;
        }
    }
}

// * myBankAccount is the only way to access your account now!
const myBankAccount = bankAccount();
myBankAccount.deposit(500);
myBankAccount.deposit(500);
myBankAccount.deposit(500);
myBankAccount.getAccountTotal();