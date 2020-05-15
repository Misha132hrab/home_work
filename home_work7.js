//1. Створіть функцію за допомогою "function expression".
let sayHello = function(){
    prompt('hi man')
}

// 2. Створіть функцію за допомогою "new Function".
let addresult = new Function('odun', 'dva', ' return odun + dva');

// 3. Створіть функцію за допомогою "arrow function". 
 let addresult = ( odun, dva) => odun + dva

// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.
let fishLenght = function (arg1,arg2){
    let firstPlate = {};
    let secondPlate = function (cb)
};  

// 5. Створіть рекурсивну функцію.
function showObjectKeyRecur (arg1){
    for (let key in arg1){
        console.log(key)
            if (typeof arg1[key] ==='object'){
                showObjectKeyRecur(arg1[key])
            }
        }
    } 

// 6. Створіть самовикликаючусь функцію.
(function(arg1){
    console.log(typeof arg1)
})(29)

// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.
let ryba = function (arg1,arg2,arg3){
    console.log(arguments)
};
ryba('karas',['carp','shchyka','tovstolob'],27);