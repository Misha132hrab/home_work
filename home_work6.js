// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.
let misha = ['body','hands', 'legs','head'];
console.log(misha);
for (i = 0; i < misha.length; ++i) {
    console.log (misha[i])
};


// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.
let misha = {
    name: 'Misha', 
    age: 25,
    playVoleyball: true
    };
console.log(misha);
for (let params in misha){
    console.log(params,misha[params])
};


// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву
let misha = ['body','hands', 'lags','head'];
misha.pop('head');
console.log(misha.length);

// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву
let misha = ['body','hands', 'legs','head'];
misha.push('20kg');
console.log(misha.length);

// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву
let misha = ['body','hands', 'lags','head'];
misha.shift('body');
console.log(misha.length)

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву
let misha = ['body','hands', 'lags','head'];
misha.unshift('20kg');
console.log(misha.length)

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву
// не получилось написати рекурсивну функцію для масиву
    


// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту
function showObjectKeyRecur (arg1){
    for (let key in arg1){
        console.log(key)
            if (typeof arg1[key] ==='object'){
                showObjectKeyRecur(arg1[key])
            }
        }
    }


// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.
let car = [
    'bmw',
    'fiat', [
        'zhigul','zapor']
    ];
console.log(car);

// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.
let misha = {
    name: 'Misha', 
    age: 25,
    playVoleyball: true,
    location: {
        town: "Uzhhorod",
        country: 'Ukraine',
        region : { 
            postcode: 88000,
            district: 'Uzghhorodsjkyj'

        }
     }
};
showObjectKeyRecur(misha);
