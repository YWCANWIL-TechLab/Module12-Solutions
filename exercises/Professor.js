export class Professor {
    constructor(first, last, age, id, [students]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.studentId = id;
        this.students = students
    }

    teach() {
        return "Good work!";
    }
}


const count = (function() {
    let index = 1;
    while(index <= 100) {
        console.log(index);
        index++;
    }
})()

console.log(typeof function() {return a + b});
