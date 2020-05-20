//1 Створіть об'єкт Person який буде містити імя, прізвище і метод для виводу повного імені і просто імені за допомогою трьох різних варіантів

//2 Просто функції
const createPerson = (firstName,secondName)=>{
    const Person = {}
        Person.firstName = firstName;
        Person.secondName = secondName;
        return`${firstName} ${secondName}`;
    
};
//3 Функції конструктору
function Person (firstName,secondName){
    
        this.firstName = firstName;
        this.secondName = secondName;
        return`${firstName} ${secondName}`;
    
};

//4 Класу
let Person = class{
    constructor(firstName,secondName){
        this.firstName = firstName
        this.secondName= secondName
        return`${firstName} ${secondName}`
    };

};