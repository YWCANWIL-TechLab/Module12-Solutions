import { Student } from "./Student.js";
// * FUNCTION PARAMETER EXERCISES


/**
 * * Question 1
 * 
 * Create a Function Constructor for a Dog object.
 * This dog MUST have a default value for its name.
 * If no name is assigned to the Dog, its name should be sprinkles.
 * 
 */
function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}


/**
 * * Question 2
 * 
 * Given three random arguments for a name, an age, and whether they are 
 * US citizens, create another Person object using those args.
 * 
 * Save the object in a variable.
 * Change all three of the values of the arguments.
 * Then return the Object variable.
 * 
 * ? Did the values of the Object change?
 */
function returnAnObject(name, age, isUSCitizen) {
    const person = {
        myName : name,
        myAge : age,
        myCitizenship : isUSCitizen
    };
    person.myName = "John Doe";
    person.myAge = 55;
    person.myCitizenship = true;
    return person;
}



/**
 * Given an object called student, create a variable and assign that object to 
 * it. Using the object in the variable you created, change a property of 
 * that object. Then return the ORIGINAL object.
 * 
 * ? What happens to the properties of the original object?
 * ? Why?
 * 
 * 
 * @param {Student} student 
 */
function copyAndChange(student) {
    student.studentId = 121212;
    return student;
}
