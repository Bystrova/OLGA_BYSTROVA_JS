





// Objects. Task 2 //
var numArr = [1, 3, 7, 5, 5, 55, 4, 6, '5', 8, 555, 7, 5];

function delFive(numArr) {
	var rez = [];
  	for (var i = 0; i < numArr.length; i++) {
  
	if (numArr[i] !== 5) {
		rez.push(numArr[i]);
      	}
    }
	console.log(rez);
}

delFive(numArr);


// Objects. Task 3 //
function deepCope () {
var student1 = {
	name: "Jon",
	soname: "Swon",
	parm: {
		height: "177",
		weight: "75"
	}
}
var student2 = {
	name: "Anna",
	soname: "Fanna",
	parm: {
		size: "XL"
	}
}
for (var key in student2) {
	student1[key] = student2[key];
}
console.log(student1);
}
deepCope ();

// Objects. Task 4 //

var person = [
	{firstName: "Gosho", lastName: "Petrov", age: 32},
	{firstName: "Ira", lastName: "Maslova", age: 41},
	{firstName: "Dmitriy", lastName: "Shagov", age: 19},
	{firstName: "Tomara", lastName: "Kim", age: 60}
	];
	function compareAge (age1, age2) {
		if (age1.age > age2.age) {
			return 1;
		} else if (age1.age === age2.age){
			return 0;
		} else {
			return -1;
		}
	}
	function youngMen(person) {
		console.log(person[0].firstName + " " + person[0].lastName);
		}
	person.sort(compareAge);
	youngMen(person);


// Objects. Task 5 //
	var student = [
	{firstName: "Gosho", lastName: "Petrov", age: 32},
	{firstName: "Ira", lastName: "Maslova", age: 41},
	{firstName: "Dmitriy", lastName: "Shagov", age: 19},
	{firstName: "Tomara", lastName: "Kim", age: 60},
	{firstName: "Ira", lastName: "Zakharenko", age: 28},
	{firstName: "Denis", lastName: "Malinin", age: 41},
	{firstName: "Lu", lastName: "Kim", age: 35},
	{firstName: "Ivan", lastName: "Curkov", age: 41},
	];


	 
function group(array, parameter) {
    var newObj = {};
    for (var students in array) {
        if (!newObj[array[students][parameter]]) {
            newObj[array[students][parameter]] = [];
            newObj[array[students][parameter]].push(array[students].firstName + ' ' + array[students].lastName);
        }
        else {
            newObj[array[students][parameter]].push(array[students].firstName + ' ' + array[students].lastName);
        }
    }
    return newObj;
}
 
var result = group(student, 'age');
for (var key in result) {
    console.log(key + ' : ' + result[key]);
}