// 05 - Function. Task 9
function toConsole(myText) {
    myText = "My very long text msg";
    console.log(myText);
}
function toAlert(myText) {
    myText = "My very long text msg";
    alert(myText);
}
function splitToWords(msg, callBack) {
    if (callBack !== undefined) {
        console.log(msg);
    } else {
        console.log(msg.split(' '));
    }
}
toConsole();
toAlert();
splitToWords("My very long text msg", toConsole);
splitToWords("My very long text msg", toAlert);
splitToWords("My very long text msg");