//Task 1 page 1 //
var x = 6;
var y = 15;
var z = 4;
// for operation x += y - x++ *z //
var result = x += y - x++ * z;
console.log(result); // -3 //

// for operation z = -- x - y * 5 //
var x = 6;
var y = 15;
var z = 4;
var result = z = --x - y * 5;
console.log(result); // -79 //

// for operation y /= x + 5 % z //
var x = 6;
var y = 15;
var z = 4;
var result = y /= x + 5 % z;
console.log(result); // 2.142857142857143 //

// for operation z = x++ + y * 5 //
var x = 6;
var y = 15;
var z = 4;
var result = z = x++ + y * 5;
console.log(result); // 81 //

// for operation x = y - x++ * z//
var x = 6;
var y = 15;
var z = 4;
var result = x = y - x++ * z;
console.log(result); // -9 //


//Tasks 2 page 1 //
var a = 7;
var b = 8;
var c = 15;
var result = (a + b + c) / 3;
console.log(result); // 10 //


//Task 3 page 1 //

var numPi = Math.PI;
var h = 8;
var r = 3;
var quadR = r * r;
var volumeCylinder = numPi * quadR * h;
var areaCylinder = 2 * numPi * r * (h + r);
console.log("The volume of cylinder = " + volumeCylinder);
console.log("The area of cylinder = " + areaCylinder);

//Task 1 page 2 //

var a = 3;
var b = 9;
var sumAllNumbers = 0;
for (var count = a; count <= b; count++) {
sumAllNumbers += count;
}
console.log("The sum of all the numbers = " + sumAllNumbers);

var arrNoEven = [];
for (count = a; count <= b; count++) {
  if (count % 2 !== 0){
    arrNoEven.push(count);
  }
}
var str = arrNoEven.join(" ")
console.log(str);

// Task 2 page 2//
var regionNum = prompt("Введите номер Вашего региона", "n");
var amountDelivery = 1;
var i = 1;
do {
	amountDelivery *= i;
	i++;
}
while(i <= regionNum);
console.log("Количество вариантов доставки в регион № " + regionNum + " = " + amountDelivery);

// Task 3 page 2//
// Прямоугольный треугольник //

var str = "";
var star = "*";
for (var i = 0; i < 5; i++) {
  str = str + star;
  console.log(str);
}
// Равсносторонний треугольник //
var lines = 5;
var amountStar;
var amountSpace;
var stars;
var spaces;
for(var currentLine = 1; currentLine <= lines; currentLine++) {
	amountSpace = lines - currentLine;
	spaces = " ";

	for(var i=0; i < amountSpace; i++) {
		spaces +=".";
	}
	amountStar = currentLine * 2 - 1;
	stars = "";
	for(var i = 0; i < amountStar; i++){
		stars += "*";
	}
	console.log(spaces+stars);
}

// Ромб //
var lines = 5;
var star;
var space;
var stars;
var spaces;
for(var currentLine = 1; currentLine <= lines; currentLine++) {
	space = lines - currentLine;
	spaces = " ";
	for(var i=0; i < space; i++) {
		spaces +=".";
	}
	star = currentLine * 2 - 1;
	stars = "";
	for(var i = 0; i < star; i++){
		stars += "*";
	}
	console.log(spaces+stars);

}
var str = "";
for (var i = 0; i < 11; i++){
	str +="*"
}
console.log(str);
var lines = 5;
var star;
var space;
var stars;
var spaces;
for(var  currentLine = lines; currentLine >= 0; currentLine--) {
	space = lines - currentLine;
	spaces = " ";
	for (var i = 0; i < space; i++) {
		spaces += "."
	}
	star = currentLine * 2 - 1;
	stars = "";
	for (i = 0; i < star; i++) {
		stars+= "*";
	}
	console.log(spaces+stars);
}
// Прямоугольник //
var str = "";
for (var i = 0; i < 10; i++){
	str +="*";
}
var mySpaces = "";
for (var i = 0; i < 8; i++) {
	mySpaces +=" ";
}
console.log(str);
for (var i = 0; i < 10; i++) {
	var walls = "*" + mySpaces + "*";
	console.log(walls);
}

var str = "";
for (var i = 0; i < 10; i++){
	str +="*";
}
console.log(str);


// Task 1 page 3 //

var N = 8;
var arr = new Array(N);
arr[0] = 84;
arr[1] = 17;
arr[2] = 22;
arr[3] = 8;
arr[4] = 32;
arr[5] = 25;
arr[6] = 48;
arr[7] = 64;

var min = arr[0];
for (var i = 0; i < arr.length; i++) {
   if (arr[i] < min) {
     min = arr[i];  
  } 
    }
console.log(min);

var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

var count = 0;
var averageCount = 0;
for (var i = 0; i < arr.length; i++) {
  count += arr[i];
 }
averageCount = count/arr.length;
console.log(count);
console.log(averageCount);

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0){
   console.log(arr[i]);
  }
};

// Task 2 page 3 //
var twoDimenArr = [
  [99, 45, 57, -12, 4],
  [3, -7, 67, 91, -14],
  [21, 36, 54, 13, 8],
  [33, -5, 46, -19, 1],
  [-74, 72, 18, 15, 9]
  ];
 for (var i = 0; i < twoDimenArr.length; i++) {
   if (twoDimenArr[i][i] > 0) {
     twoDimenArr[i][i] = 1;
   } else if (twoDimenArr[i][i] < 0) {
     twoDimenArr[i][i] = 0;
   }
    }
console.log(twoDimenArr[0]);
console.log(twoDimenArr[1]);
console.log(twoDimenArr[2]);
console.log(twoDimenArr[3]);
console.log(twoDimenArr[4]);