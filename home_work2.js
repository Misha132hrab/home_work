// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let roadLength = 1000;
roadLength = String(roadLength);
console.log(typeof roadLength);

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let roadWidth = 20;
roadWidth = Boolean(roadWidth);
console.log(typeof roadWidth);

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
/* Переводити дані можна тільки   string number Boolean
let a = 1;
a = null;
console.log(typeof a);*/


// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let misha  = 'qa';
misha = Number(qa)
console.log(typeof qa);(NaN)
let misha = '12';
misha = Number(misha);
console.log(typeof misha);(12)

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let sofia = 'content';
sofia = Boolean(sofia);
console.log(typeof sofia);

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
/*Переводити дані можна тільки  в  string number Boolean
let a = 'true'
a = null*
console.log(typeof a)*/

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let mama = true;
mama =String(mama);
console.log(typeof mama);

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let tato = false;
tato = Number(tato);
console.log(typeof tato);

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
/*let a = true
a = null*
console.log(typeof a)
Переводити дані можна тільки  в string number Boolean*/

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let cash = null;
cash = String(cash);
console.log(typeof cash);(спочатку невдуплив чого null об'єкт, далі згадав)

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let cache = null;
cache = Number(cache);
console.log(typeof cache);

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let i = null;
i = Boolean(i);
console.log(typeof i);

// 13) Напишіть всі способи створення функції.
function vidnimannja(odun, dva){return 2 - 'c'};
vidnimannja = function ( three, four){return three - four};

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію
function nothing () {};
nothing();

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію
function getName () {return 'Misha'};
getName();

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
function getResult (a){return 'a'};
getResult(a);
let a = 1;
getResult(1);


// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
function getAdd(first,second){return first+second};
getAdd(2,1);
let p = 2;
let r = 4;
getAdd(p,r);

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
function getAdd1(first,second,third){return first+second+third};
getAdd(2,1,3);
let p = 2;
let r = 4;
let q = 5;
getAdd(p,r,q);