// var f = 15;
// var m = 5;
// var a = f / m;

// document.write(
//   "**************" +
//     "<br/>" +
//     "<br/>" +
//     "Ускорение тела при силе F = " +
//     f +
//     ", и массе m = " +
//     m +
//     ":" +
//     "<br/>" +
//     "<br/>" +
//     "--------------------" +
//     "<br/>" +
//     "<br/>" +
//     "a = " +
//     a +
//     "<br/>" +
//     "<br/>" +
//     "-------------------" +
//     "<br/>" +
//     "<br/>" +
//     "end."
// );

// var star = "**************\n\n";
// var list = "Список студентов зарегестрировавшихся на вебинар:\n\n";
// var a = 18;
// var b = 16;
// var c = 19;
// var firstName = "1. " + a + " лет Юрий Иванов\n\n";
// var secondName = "2. " + b + " лет Дмитрий Кузьмин\n\n";
// var thirdName = "3. " + c + " лет Оксана Петрова\n\n";

// var sum = (a + b + c)/3;
// var averageStudentAge = "-------------- Средний возраст студента: [" + sum + "] --------------\n\n";
// var result = star + list + firstName + secondName + thirdName + averageStudentAge + star;
// console.log(result);

// var a = "**************\n\n" + "Список студентов зарегестрировавшихся на вебинар:\n\n";
// var b =
//   "1. 18 лет Юрий Иванов\n\n" +
//   "2. 16 лет Дмитрий Кузьмин\n\n" +
//   "3. 19 лет Оксана Петрова\n\n" +
//   "-------------- Средний возраст студента: [17,66666666666667] --------------\n\n" +
//   "**************\n\n";

// var result = a + b;
// console.log(result);

// var a = "**************\n\n" + "Список студентов зарегестрировавшихся на вебинар:\n\n";
// var b =
//   "1. 18 лет Юрий Иванов\n\n" +
//   "2. 16 лет Дмитрий Кузьмин\n\n" +
//   "3. 19 лет Оксана Петрова\n\n";

// var c = "-------------- Средний возраст студента: [17,66666666666667] --------------\n\n" +
// "**************\n\n";;
// console.log(a + b + c);

var a = prompt() + " лет " + prompt() + " " + prompt();
var b = prompt() + " лет " + prompt() + " " + prompt();
var c = prompt() + " лет " + prompt() + " " + prompt();
console.log(
  "**************\n\n" +
    "Список студентов зарегестрировавшихся на вебинар:\n\n" +
    "1. " +
    a +
    " \n\n" +
    "2. " +
    b +
    " \n\n" +
    "3. " +
    c +
    " \n\n" +
    "-------------- Средний возраст студента: [" +
    (parseInt(a) + parseInt(b) + parseInt(c)) / 3 +
    "] --------------\n\n" +
    "**************\n\n"
);
