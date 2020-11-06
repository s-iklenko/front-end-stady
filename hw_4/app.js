/*
1.task
[1, 2, 3, 4, 5, 6, 7] -> [2, 1, 4, 3, 6, 5, 7]
В одномерном массиве произвести такую замену:
1 элемент поменять с 2
3 элемент поменять с 4
5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.
*/
var arr = [1, 2, 3, 4, 5, 6, 7];
for (var i = 1; i < arr.length; i += 2) {
    // result.push(arr[i], arr[i - 1]);
    var tmp = arr[i - 1]
    arr[i - 1] = arr[i]
    arr[i] = tmp
}
// if (arr.length % 2 !== 0) {
//     result.push(arr.length);
// }
console.log(arr);


/*
2.task
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
Найти колонку, где сумма элементов наименьшая.
Найти колонку, где сумма элементов найбольшая.
*/
var array = [];
var columsSumms = []

for (var columIndex = 0, size = 3; columIndex < size; columIndex++) {
    array[columIndex] = new Array(size);

    for (var rowIndex = 0, columSum = 0; rowIndex < size; rowIndex++) {
        array[columIndex][rowIndex] = Math.round(Math.random() * 30)
        columSum = array.reduce((a, b) => a.map((x, i) => x + b[i]));
    }
}
console.log(array);
console.log(columSum);
console.log(Math.max.apply(null, columSum));
console.log(Math.min.apply(null, columSum));


