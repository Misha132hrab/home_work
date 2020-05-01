// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.
alert('HI MARK');
// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let massa = prompt('скільки важить 1 літр води');
console.log(massa);

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let massa1 = prompt('скільки важить 1 літр води',13);
console.log(massa1);

// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let readResult = confirm('You play voleyball?');
console.log(readResult);
// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна
let successfullPayment = confirm('Do you have money?');
if (successfullPayment) {
    alert('Good job')
} else {
    alert('Bad job')
};
console.log(successfullPayment);
let successfullPayment = confirm('Do you have money?');
if (successfullPayment) {
    console.log(1)
} else {
    console.log('Bad job')
};

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"
let successfullPayment = prompt('Do you have money?');
if (successfullPayment) {
    console.log(1)
} else {
    console.log(2)
};
console.log(successfullPayment);

// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"
let successfullPayment = prompt('Do you have money?');
if (successfullPayment == 'yes' ) {
    console.log(1)
} else if (successfullPayment == 'no' ) {
    console.log(2)
} else {
    console.log(3)
} 


// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна
let successfullPayment = confirm('Do you have money?');
switch (successfullPayment) {
    case true:
        console.log(1)
        break;

    default:
        console.log(2)
        break;
} 
// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"
let successfullPayment = prompt('Do you have money?');
console.log(successfullPayment);
switch (successfullPayment) {
    case 'yes': 
        console.log(1)
        break;
    default:
        console.log(2)
        break;
}

// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"
let successfullPayment = prompt('Do you have money?');
console.log(successfullPayment);
switch (successfullPayment) {
    case 'yes': 
        console.log(1)
        break;
    case 'noooo':
        console.log(2)
        break;
    default:
        console.log(3)
        break;
}

// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади
switch (useCode) {
    case 'promocode':
        console.log(1)
        break;
    case ' i dont have code' :
        console.log(2)
        break;
    default:
        console.log(3)
        break;
}
///2 варіант
let useCode = prompt('Do you have promocode?');
console.log(useCode);
if (useCode === 'promocode'){
console.log(1)
} else if (useCode === 'i dont have promocode?'){
console.log(2)
} else  {
console.log(3)
};
 
// інший варіант
 let playerName = prompt('write your name')
 console.log(playerName);
 if (playerName === 'Misha'){
     alert('complete') 
 } else  {
     console.log('write pls your name')
 }
 let gameCompleted = prompt ('What game you completed last?')
 console.log(gameCompleted);
 switch (gameCompleted) {
    case 'HOMMV':
         console.log('nice')
         break;
    case 'Knight Of Honor':
         console.log('very nice')
         break;
    default:
        console.log('so say')

         break;
 }