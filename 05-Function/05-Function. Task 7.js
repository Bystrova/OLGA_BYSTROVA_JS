// 05-Function. Task 7.

var testStr = function (testString, test) {
    var result = -2;

    if((testString === undefined || test === undefined) || (testString === undefined && test === undefined)){
        result = 0;
    } else if (testString.contains(test)){
        result = 1;
    } else if (!testString.contains(test)){
        result = -1;
    }
    console.log(result);
};
testStr("abc");
testStr("a");
testStr();
testStr("abc", "a");
testStr("abc", "d");
