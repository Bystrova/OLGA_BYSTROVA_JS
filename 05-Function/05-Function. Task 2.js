//04-Function. Task 2//
try {
    comp('abc', 'abC');
    var comp = function (a, b) {
        var result;
        if (a===b) {
            result = 1;
        } else {
            result = -1;
        }
        console.log(result);
    };
} catch(e){
    console.log('Function expression should not be calls before it declaration');
}
