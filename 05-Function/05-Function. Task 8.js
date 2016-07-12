// 05-Function. Task 8.
var str = function(str) {
    if (typeof str === 'string' && str !== '') {
        alert('String is non empty');
    } else {
        alert('String is empty');
    }
};

str.isNonEmptyStr = function(str) {
    if (typeof str === 'string' && str !== '') {
        console.log('true');
    } else {
        console.log('false');
    }
};
str.isNonEmptyStr();
str.isNonEmptyStr("a");
str.isNonEmptyStr("");
str.isNonEmptyStr(1);
str();
str("a");