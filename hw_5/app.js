// 1. Написать функцию заполнения массива.Имя произвольное.


function getArrayRandom(value) {
    for (var i = 0, array = [], size = value; i < size; i++) {
        array.push(Math.round(Math.random() * 30));
    }
    return array;
}
console.log(getArrayRandom(15));

/*
2.task
написать функцию, которая примет как аргумент(параметр) два массива 
и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого 
большая - должен вернутся функцией.
*/

var arrayA = getArrayRandom(5);
var arrayB = getArrayRandom(5);

function getSum(a, b) {
    for (var i = 0, sumA = 0; i < a.length; i++) {
        sumA += a[i]
    }
    console.log(sumA, 'sumA')
    for (var i = 0, sumB = 0; i < b.length; i++) {
        sumB += b[i]
    }

    console.log(sumB, 'sumB')
    if (sumA > sumB) {
        return sumA
    }
    if (sumA < sumB) {
        return sumB
    }
}
console.log(arrayA, 'arrayA')
console.log(arrayB, 'arrayB')

console.log(getSum(arrayA, arrayB), 'maxSum');

/*
3.task
Написать функцию doMath(x, znak, y), которая получает 3 аргумента: 
числа x и y, строку znak. В переменной знак может быть: +, -, *, /, %, ^. 
Вывести результат математического действия, указанного в переменной znak.
*/

function doMath(x, znak, y) {
    var num1 = x;
    var num2 = y;
    var operation = znak;

    if (operation == '+') {
        return parseInt(num1) + parseInt(num2);
    }
    if (operation == '-') {
        return parseInt(num1) - parseInt(num2);
    }
    if (operation == '*') {
        return parseInt(num1) * parseInt(num2);
    }
    if (operation == '/') {
        return parseInt(num1) / parseInt(num2);
    }
    if (operation == '%') {
        return parseInt(num1) % parseInt(num2);
    }
    if (operation == '^') {
        return parseInt(num1) ** parseInt(num2);
    }
}
console.log(doMath(10, '^', 5));


/*
4.task
Создать функцию, которая убирает из строки все символы, 
которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor"
*/

function deleteSymbol(str, del) {
    var arr = [];
    for (var i = 0, size = str; i < size.length; i++) {
        arr.push(str[i])
    }
    for (var i = 0, size = del; i < size.length; i++) {
        while (arr.indexOf(del[i]) !== -1) {
            arr.splice(arr.indexOf(del[i]), 1)
        }
    }
    return arr.join('')
}

console.log(deleteSymbol("hello world", ['l', 'd']));

/*
 5. task
 напиши функцию filter, которая принимает функцию-предикат и массив. 
 Возвращает она массив значений, для которых предикат вернет true.
 var input = [1, 2, 3, 4, 5, 6];
 function isEven(x) { return x % 2 == 0; } // проверяет на четность
 console.log(filter(input, isEven)); // [2, 4, 6]
*/
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