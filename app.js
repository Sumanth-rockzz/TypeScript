"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number')
        return num1 + num2;
    else if (typeof (num1) === 'string' && typeof (num2) === 'string')
        return num1 + num2;
    return +num1 + +num2;
}
function printresult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numresult = add(+num1, +num2);
    numResults.push(numresult);
    const stringresult = add(num1, num2);
    textResults.push(stringresult);
    printresult({ val: numresult, timestamp: new Date() });
    console.log(numResults, textResults);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked");
    }, 1000);
});
promise.then(result => {
    console.log(result.split('w'));
})
    .catch(err => {
    console.log(err);
});
