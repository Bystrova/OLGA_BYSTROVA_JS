// Arrays Task 1 //
var myArr = [34, 7]; //Create array
myArr.push(12, 45, 21, 67, 89, 3, 10, 94, 62, 8, 5, 11, 27, 48, 33, 55, 16, 77, 56, 31, 14, 2); //Add to array some integers
myArr.length = 20; // get length of array = 20
for (var i = 0; i < myArr.length; i++) { 
	myArr[i] = i * 5; // initialize each element of array by its index maltiplied 5
}
console.log(myArr);

// Arrays Task 2 //
// First version. Compares two char arrays lexicographically and displays more//
var charArr1 = ["ase", "stro", "hight"];
var charArr2 = ["aso", "stri", "wow"];
var arrToStr1 = charArr1.join(", ");
var arrToStr2 = charArr2.join(", ");
if (arrToStr1 < arrToStr2) {
   var strToArr2 = arrToStr2.split(", ");
  console.log(strToArr2);
} else {
    var strToArr1 = arrToStr1.split(", ");
  console.log(strToArr1);
}


// Page 1 Task 2 //
// Second version. Compares two char arrays lexicographically and displays equal letters //
var charArr1 = ["ase", "stro", "hight"];
var charArr2 = ["aso", "stri", "wow"];
var arrToStr1 = charArr1.join("");
var arrToStr2 = charArr2.join("");
 var strToArr1 = arrToStr1.split("");
    var strToArr2 = arrToStr2.split("");
 for (var i = 0; i < strToArr1.length; i++) {
	for (var j = 0; j < strToArr2.length; j++) {
		if (strToArr1[i] == strToArr2[j]) {
			var equal = strToArr1[i] || strToArr2[j];
        console.log(equal);
		}
    }
}



// Arrays. Task 3 //

var arr = [1, 5, 5, 3, 7, 7, 2, 2, 1, 1, 1, 1, 1, 1, 7]; // Create the aray
    var result = []; // Create results array
    var count = 1; 
    var maxCount = 0;
    var repNum;
    
for (var i = 1; i < arr.length; i++){
    if (arr[i - 1] === arr[i]){ // search similar elements
        count += 1;
    }else{
        count = 1;
    }
    if (maxCount < count){
        maxCount = count;
        repNum = arr[i];
    }
}
for (var i = 0; i < maxCount; i++){
    result[i] = repNum;
}
console.log(result.join(', '));


// Arrays. Task 4 //

var arr = [ 2, 3, 4, 2, 2, 4, 8, 9, 10, 11, -13, , 2, -5, 5, 6, 7]; // Create the aray
    var result = []; // Create results array
    var count = 0;
    var maxCount = 0;
    var beginNum;
    var endNum;
  
    for (var i = 1; i < arr.length; i++){
        if (arr[i - 1] + 1 === arr[i]){
            count += 1;
        }else{
            count = 0;
        }
        if (maxCount < count){
            maxCount = count;
            endNum = arr[i];
        }
    }
    beginNum = endNum - maxCount;
for (var i = 0; i <= maxCount; i++){
    result[i] = beginNum + i;
}
console.log(result.join(', '));