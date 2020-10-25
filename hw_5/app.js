// 1. Написать функцию заполнения массива.Имя произвольное.

function getArray() {

}






// 5. task

function executeforEach(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i]);
    }
}

function filterArray(array, callBack) {
    let newArray = [];
    executeforEach(array, (el) => {
        let element = el;
        if (el % 2 === 0) {
            newArray.push(callBack(element));
        }
    });
    return newArray;
}
filterArray([1, 2, 3, 4, 5, 6], function (el) { console.log(el) })