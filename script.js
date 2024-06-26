class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get name() {
        return this._name;
    }

    set age(newAge) {
        this._age = newAge;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

let john = new Student("John", 20);
console.log(john.study()); // Output: John is studying

let alice = new Student("Alice", 22);
console.log(alice.study()); // Output: Alice is studying

john = new Teacher("John", 30);
console.log(john.teach()); // Output: John is teaching

alice = new Teacher("Alice", 32);
console.log(alice.teach()); // Output: Alice is teaching