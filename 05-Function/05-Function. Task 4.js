//05-Function. Task 4//
var fibon = function(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return a + ", " + b ;
};
console.log(fibon(7));