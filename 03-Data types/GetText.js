//03-String.Task 6//
function getTextFromHtml() {
    var getAllText = document.getElementsByTagName('*');
    var a = getAllText[0].textContent;
    a = a.replace(/\r|\n/g, ' ');
    a = a.replace(/\s{2,}/g, ' ');
       console.log(a);
    }
    getTextFromHtml();