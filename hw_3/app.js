// 1. Заполнить массив А случайными числами (диазпазон на ваше усмотрение).
// Заменить каждый элемент массива с нечетным индексом на ноль.

var arr = new Array(10);
var min = 10, max = 30;
for (var i = 0; i < arr.length; i++) {
  arr[i] = Math.round(Math.random() * (max - min) + min);
  if (i % 2 === 1) arr[i] = 0;
}
console.log(arr);

// 2. Заполнить массив размерностью n значениями с клавиатуры.
// Если введенное значение пользователя не число, или отрицательное значение,
//   то запросить повторный ввод данных.

var array = [];
while (array.length < 5) {
  var n = +prompt('');
  if (n > 0) {
    array.push(n);
  }
}
console.log(array);

// 3. Создать массив А размерностью n.
// Заполнить случайными числами любом диапазоне.
//   Найти максимальное число и минимальное число.
//   Элементы массива между min -- max записать в массив B.

// var A = new Array(10);
// var B = [];
// var max = 30;
// var min = 1;
// for (var i = 0; i < A.length; i++) {
//   A[i] = Math.round(Math.random() * (max - min) + min);
// }
// console.log(A);

var arrA = [10, 5, 1, 3, 7, 21, 6, 4, 25];
var arrB = [];
var min = arrA[0];
var max = arrA[0];
var minI = 0;
var maxI = 0;
for (var i = 1, size = arrA.length; i < size; i++) {
  if (min >= arrA[i]) {
    min = arrA[i];
    minI = i;
  }
  if (max <= arrA[i]) {
    max = arrA[i];
    maxI = i;
  }
}
console.log(minI, maxI);
for (var i = minI; i < maxI; i++) {
  if (i > minI && i < maxI) arrB.push(arrA[i]);
}
console.log(arrB);
