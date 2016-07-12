// 05-Function. Task 8.
var str = {
    isNonEmptyStr: function(){
        var result;
        var getStr = prompt('Enter some text', 'hello world');
        if (getStr === '' || getStr === ' ')  {
            result = false;
        } else if (!isNaN(getStr)){
            alert('Not a String');
        } else {
            result = true;
        }
        if(result === true) {
            alert ('String is non empty');
        } else {
            alert ('String is empty');
        }
    }
};
str.isNonEmptyStr();