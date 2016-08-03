/*нужно написать функци, которая принимать несколько аргументов,
 каждый аргумент - строка, нужно из строки вырезать фрагмент от : до .
 результат в массив запихнуть*/

/*нужно написать функци, которая принимать несколько аргументов,
 каждый аргумент - строка, нужно из строки вырезать фрагмент от : до .
 результат в массив запихнуть*/

var findParam = function (sentence1, sentence2) {
    sentence1 = "This is the first sentence.This is the sentence with a list of items: charries, oranges, apples, bananas.";
    sentence2 = "This is the second sentence.This is the sentence with a list of items: red, blue, yellow, black.";

    var colon = ":";
    var point = ".";
    var pointInd;
    var param;
    var paramToArr =[];

    function findSubstring(sentence) {
        var colonInd = sentence1.indexOf(colon); //get  number of position ':' in first sentence
        for (var i = 0; i < sentence.length; i++) {
            pointInd = sentence.lastIndexOf(point); //Get position '.' in first sentence
        }
        if (pointInd > colonInd) {           //for choice last point
            param = sentence.substring(colonInd+2, pointInd);
        }

        return param;
    }

    findSubstring(sentence1);
    findSubstring(sentence2);

    paramToArr.push(findSubstring(sentence1),findSubstring(sentence2));    // create array
    console.log(paramToArr);
};
findParam();
