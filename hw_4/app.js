// 1.
// [1, 2, 3, 4, 5, 6, 7] -> [2, 1, 4, 3, 6, 5, 7]
// В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.

var arr = [1, 2, 3, 4, 5, 6, 7];
var result = [];
for (var i = 1; i < arr.length; i += 2) {
    result.push(arr[i], arr[i - 1]);
}
if (arr.length % 2 !== 0) {
    result.push(arr.length);
}
console.log(result);

// 2.
// Создать двумерный массив, заполненный случайными числами в любом диапазоне.

// Найти колонку, где сумма элементов наименьшая.
// Найти колонку, где сумма элементов найбольшая.

var mass = [];
for (var i = 0, size = 3; i < size; i++) {
    mass[i] = new Array(size);

    for (var j = 0; j < size; j++) {
        mass[i][j] = Math.round(Math.random() * 30)
    }
}

console.log(mass)

for (var i = 0, size = mass.length; i < size; i++) {
    for (var j = 0, sum = 0; j < mass[i].length; j++) {
        sum = sum + mass[i][j]
    }

    console.log(sum)
    if (i === 0) {
        sumMin = sum;
        sumMax = sum;
        continue;
    }

    if (sum < sumMin) {
        sumMin = sum;
    }

    if (sum > sumMax) {
        sumMax = sum;
    }
}

console.log(sumMin);
console.log(sumMax);
