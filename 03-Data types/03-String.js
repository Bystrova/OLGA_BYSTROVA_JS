// String. Task 1 //
function reverseStr (str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('javascript'));


// String. Task 2 //
// String. Task 2 //
var expression = prompt('Enter your expression', '((a+b)/3)*2');
function brackets(expression) {
    var first = expression.charAt(0);
    var last = expression.charAt(expression.length - 1);
    var countOpenBrec = 0;
    var countCloseBrec = 0;

    for (var i = 0; i < expression.length; i++) {

        if (expression.charAt(i) === "(" ) {
            countOpenBrec = countOpenBrec +1;
        }  else if (expression.charAt(i) === ")") {
            countCloseBrec = countCloseBrec + 1;
        }
    }
    if (first === ")" || last === "(" || countOpenBrec != countCloseBrec) {
        console.log("This is incorrect exspression");
    } else if(expression.indexOf("()") != -1) {
        console.log("This is incorrect exspression");
    } else {
        console.log("This is correct exspression");
    }
}
brackets(expression);

// String. Task 3 //
  function findIn () {
   var myStr = "We are living in an yellow submarin. We don't have anithing else.Inside the submarin is veri tight. So we are drinkin all the day. We will move  out of it in 5 days.";
    var getWord = "in";
     var position = 0;
    var count = 0;
    var myStr1 = "We are living in an yellow submarin. We don't have anithing else.Inside the submarin is veri tight. So we are drinkin all the day. We will move  out of it in 5 days.".toLowerCase();
    while (true) {
        var foundPosition = myStr1.indexOf(getWord, position);
        if (foundPosition == -1) break;
        position = foundPosition+1;
       count = count + 1;
    }
    console.log("слово повторилось " + count + " раз");
}
  findIn();




// String. Task 5 //
var getStr = prompt('Enter your phrase', "I write some words");
function replaceSpace() {
   var space = "&nbsp";
  var regEx = RegExp(' ', 'g');
  var newStr = getStr.replace(regEx, space);
  console.log(newStr);
}
replaceSpace();


// String. Task 5 //
function getTextFromHtml() {
   var getAllText = document.getElementsByTagName('*');
        var regEx = RegExp('<[^>}(.*?)', 'gi');
        var newText = getAllText.replace(regEx, '');
 console.log(newText);
}
getTextFromHtml();


//String. Task 7 //
var myUrl = document.getElementsByTagName('a')[0];
var href = myUrl.href;
console.log(href);
var protocol = myUrl.protocol;
var server = myUrl.hostname;
var resource = myUrl.pathname;
var jsonUrl = {};
jsonUrl["protocol"] =  protocol;
jsonUrl["server"] =  server;
jsonUrl["resource"] =  resource;
//var jsonUrl1 = JSON.stringify(jsonUrl)
console.log(jsonUrl);

