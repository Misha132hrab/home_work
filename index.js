// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"
let a = 1;
const b = 2;
var c = 3;

// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let a = 2;
const b = 3;
// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки
// коментар на 1 рядок
/*коментар
на
4
рядки*/
// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let name = 'misha';
typeof name;
console.log(name);

// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let age = 29;
typeof age;
console.log(age);

// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
const mishaIsHere = true;
typeof mishaIsHere;
console.log(mishaIsHere);

// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let misha = {"head":"one","hand1":"left","hand2":"right"};
typeof misha;
console.log(misha);

// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let body = ["head","body","hands","legs","other"];
typeof body;
console.log(body);


// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
 function rubalka() {
    alert( 'Не клює' );
  }
typeof rubalka;
console.log(rubalka);
// 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let fishcaras = undefined;
typeof fishcaras;
console.log(fishcaras);


// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let fishleight = null;
typeof fishleight;
console.log(fishleight);

// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.
let MishaHrab = {"name":"Misha","surname":"Hrab","birthday":'16.08.1990',"address":"Uzghhorod","sex":"male","fisherman":"true"};
typeof MishaHrab;
console.log(MishaHrab);