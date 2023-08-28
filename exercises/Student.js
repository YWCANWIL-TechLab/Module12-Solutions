export class Student {
    constructor(first, last, age, id=0) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.studentId = id;
    }

    learn() {
        return "I learned something!";
    }
}