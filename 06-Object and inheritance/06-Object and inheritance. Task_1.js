function Person(first,last, age) {
    this.first = setFirstName(first);
    this.last = setLastName(last);
    this.age = setAge(age);
    this.fullName = setFullName();

    function setAge(newAge) {
        if(typeof age !=="number") {
            throw new Error ("Age should be only numbers")
        } else if (newAge < 1 || newAge > 150) {
            throw new Error("Wrong age!");
        } else {
            return newAge;
        }
    }

    function setFirstName(first) {

        if (typeof (first)!== "string") {
            throw new Error ("Incorrect type of firstname");
        }
        else if (!(first.length >= 3 && first.length <= 20)) {
            throw new Error("The number of characters should be from 3 to 20");
        }
        else if (first.match(/[^a-z]/i)) {
            throw new Error ("Incorrect firstname wrong symbol!");
        } else {
            return first;
        }
    }
    function setLastName(last) {
        if (!(last.length >= 3 && last.length <= 20)) {
            throw new Error("The number of characters should be from 3 to 20");
        }
        else if (typeof last !== "string") {
            throw new Error ("Incorrect type of lastname");
        }
        else if (last.match(/[^a-z]/i)) {
            throw new Error ("Incorrect lastname wrong symbol!");
        } else {
            return last;
        }
    }
    function setFullName() {
        return first + ' ' +last;
    }
}
var human = new Person("Viki", "Smith", 19);
console.log("Hello! My name is " + human.fullName + " " + "and I " + human.age + " years old");