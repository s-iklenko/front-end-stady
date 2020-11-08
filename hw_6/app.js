/*
1.task
Вывести в консоль последовательность чисел в обратном порядке, 
используя рекурсивный вызов функиции
row (5) // 5 4 3 2 1
*/
// var a = 0;

function row(a) {

    console.log(a--);

    if (a < 1) {
        return a;
    }

    row(a);

}
row(5)

/*
2.task
Написать рекурсивную функцию sumTo(n), которая для данного n вычисляет
сумму чисел от 1 до n, например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
*/

function sumTo(num) {

    if (num > 0 && num <= 1) {
        return 1;
    } else {
        return num + sumTo(num - 1);
    }

}
console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));

/*
3.task
Написать функция factorial(n) - которая при помощи рекурсии будет считать 
значение факториала числа n!
*/

function factorial(n) {

    if (n > 0 && n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

/*
4.task
Cоздать конвертер-функцию которая получает на вход массив вида: 
mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]]; а на выходе получим переобразованый 
массив: [1,2,3,3.1,4,5,6,7,8]
*/

var mass = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8]]];
var array = [];
function converter(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            converter(arr[i]);
        } else {
            array.push(arr[i]);
        }
    }
}
converter(mass);
console.log(array);