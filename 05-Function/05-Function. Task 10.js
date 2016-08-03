// 05-Function. Task 10.
function copyright(){
    var name = 'EPAM';

    return function() {
        return '© ' + name;
    };
}
var copyr = copyright();
alert(copyr());