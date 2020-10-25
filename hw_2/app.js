// 1. Реализовать скрипт согласно схеме: 

/*

var login = prompt('Кто пришел?');
var password

if (login === 'Админ'){
    password = prompt('Пароль?');
    if (password == 'Черный Властелин') {
        console.log('Добро пожаловать!');
    } else if (password !== null) {
        console.log('Пароль неверен');
    } else {
        console.log('Вход отменен');
    }
} else if (login !== null) {
    console.log('Я вас не знаю');
} else {
    console.log('Вход отменен');
}

*/

// 2.1 Ораганизовать перебор чисел от 1 до 150
/*

var i;
for (i = 1; i <= 150; i++) {
    console.log(i);
}

*/

// 2.2 Посчитать сумму всех чисел.

/*

var a = 1;
var n = 150;
var sum = 0;

while (a <= n) {
    sum += a;
    a++;
    console.log(sum);
}

*/

// 2.3 Посчитать сумму чётных чисел. 5700
 
/*

var sum = 0;
for (var n = 0; n <= 150; n++) {
    if (n % 2 == 0) {
        sum += n;
        console.log(sum);
    }
}
   
*/



// 3. "Заставить" пользователя ввести с клавиатуры число. 
//Просить пользователя ввести число до тех пор, пока мы не получим число.


/*

do {
  var num = prompt("");
} while(num !== null && isNaN(num))
    console.log(num);

*/

// 4. Посчитать факториал n!, где n - ввести с клавиатуры.
// `Например: факториал числа 5! == 120, вычисляется так: 1 * 2 * 3 * 4 * 5 = 120/

/*

var a = 1;
var n = prompt('');
var sum = 1;

while (a <= n) {
    sum *= a;
    a++;
    console.log(sum);
}


function factorial(n){
    if (n == 1) return 1;
    else return n * factorial(n - 1);		
    }
    var userNum =+ prompt('Введите число');
    console.log(factorial(userNum));

*/

// var a,b,result;
// a = 0;
// b = 1;
// result = b;
// n = prompt('');
// for(var i = 1; 1 < 10; i++){
//     console.log(result);
//     result = a + b;
//     a = b;
//     b = result;
// }


var a = prompt('');
var b = prompt('');
var sum = 0;
for (var i = 0; a < b; i++) {
    if (a % 2 == 0) {
        sum = sum + a;
        sum = sum ** sum;
        console.log(sum);
    }
}