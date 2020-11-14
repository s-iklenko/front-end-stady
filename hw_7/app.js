/*
1.task
Создать объект с такой структурой: obj = { a: 10, b: 12, c: { f: 13, g: { m: 20} } } 
Написать функцию convert(obj), он получает аргументом obj. Функция должна вернуть 
новый объект: newObj = { a: 10, b: 12, f: 13, m: 20 }
*/

const obj = { a: 10, b: 12, c: { f: 13, g: { m: 20 } } };
var newObj = {};

function convert(obj) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            convert(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
}
convert(obj);
console.log(newObj);

/*
2.task
Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта
и возвращает новый, который состоит из свойство обоих обьектов (склеить).
Если свойство повторяется, то взять значение второго обьекта
*/

// const newObject = {};

// function assignObjects(obj1, obj2) {
//     Object.assign(newObject, obj1, obj2);
//     return newObject
// }

function assignObjects(obj1, obj2) {
    var obj3 = {};
    for (var key in obj1) { obj3[key] = obj1[key]; }
    for (var key in obj2) { obj3[key] = obj2[key]; }
    return obj3;
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));


/*
3.task
Адаптировать функцию assignObjects() под неопределенное количество объектов.
assignObjects(obj1, obj2, ....., objn);
*/


function assignObjectsN(...objn) {
    var obj = Object.assign(...objn);
    return obj;
}
console.log(assignObjectsN({ x: 10, y: 20 }, { z: 30, d: 12 }, { a: 15 }, { b: 35 }, { c: 45 }));



// function assignObjects2(...objn) {
//     var obj1 = {};

//     for (var key in objn) {
//         obj1[key] = objn[key];
//         // var obj2 = {};
//         // for (var key in obj1) {
//         //     obj2[key] = obj1[key];
//         // }
//         // for (var key in obj1) {
//         //     var obj2 = {};
//         //     if (typeof obj1[key] === 'object') {
//         //         convert(obj1[key]);
//         //     } else {
//         //         obj2[key] = obj1[key];
//         //     }
//         // }

//     }
//     return obj1
// }
// console.log(assignObjects2({ x: 10, y: 20 }, { z: 30, d: 12 }, { a: 15 }, { b: 35 }, { c: 45 }));


function assignObjects2(...objn) {
    var obj = {};
    // var obj1 = {};

    for (var key in objn) {
        obj[key] = objn[key];
        // for (var key in obj) {
        //     if (typeof obj[key] === 'object') {
        //         convert(obj[key]);
        //     } else {
        //         obj1[key] = obj[key]
        //     }
        // }
    }
    return obj
}
console.log(assignObjects2({ x: 10, y: 20 }, { z: 30, d: 12 }, { a: 15 }, { b: 35 }, { c: 45 }));

