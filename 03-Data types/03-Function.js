// Function. Task 1//
var getNum = prompt("Enter the integer number", "236");
 function getLastDigit(getNum) {
	var a = getNum.split("");
  alert(a);
 for (var i = 0; i < a.length; i++) {
    i = a.length - 1;
   var j = a[i];
     switch (j) {
     case '0':
       console.log('zero');
       break;
     case '1':
       console.log('one');
        break;
        case '2':
       console.log('two');
        break;
        case '3':
       console.log('three');
        break;
        case '4':
       console.log('four');
        break;
        case '5':
       console.log('five');
        break;
        case '6':
       console.log('six');
        break;
        case '7':
       console.log('seven');
        break;
        case '8':
       console.log('eight');
        break;
        case '9':
       console.log('nine');
        break;
        default:
        console.log('I do not know these valyes');

    }
}
}
getLastDigit(getNum);

// Function. Task 2 //
var myNum = prompt("Enter the integer number", "254");
function reversDigit(myNum){
  var myArr = myNum.split("");
  var arrRev = myArr.reverse();
  myNum = arrRev.join("");
  console.log(parseInt(myNum));
}
 reversDigit(myNum);


// Functoin. Task 3 //

var myText = 'Она еле-еле передвигала ноги. Ее ноги сильно устали, ведь она прошла не одну милю';
function findWord(myText, getWord, ignoreCase) {
  ignoreCase = 1;
    var position = 0;
    if (arguments.length === 2) {
      
      while (true) {
        var foundPosition = myText.indexOf(getWord, position);
        if (foundPosition == -1) break;
        console.log('На позиции: ' + foundPosition + ' находится слово ' + getWord);
        position = foundPosition+1;
      }
    } else if(arguments.length > 2 && arguments[2] === 1) {
      var getWord = getWord.toLowerCase();
      var myText = myText.toLowerCase();
      while (true) {
        var foundPosition = myText.indexOf(getWord, position);
        if (foundPosition == -1) break;
        console.log('На позиции: ' + foundPosition + ' находится слово ' + getWord);
        position = foundPosition+1;
      }
    }
}

findWord(myText, "еле");
findWord(myText, "ОНА", 1);