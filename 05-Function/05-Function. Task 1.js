cons(3, '7');                       //call function before its declaration
function cons(a, b){               //function declaration
    var aStr = a.toString();
    var bStr = b.toString();
    console.log(aStr+bStr);
}
