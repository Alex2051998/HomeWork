// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function showMessage(a, b) {
    return  a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r){
    const p = 3.14;
    return  p *(r*r);
}


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(h, r){
    const p = 3.14;
    return  2 * p * r * (r + h);
}
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1,2,3,4];
function arr(arr){
    console.log(arr);
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(a){
    document.write(`
    <p>${a}</p>
    `)
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(a){
    document.write(`
    <ul>
        <li>${a}</li>
        <li>${a}</li>
        <li>${a}</li>
    </ul>
    `)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ull(a, b){
    for (let i = 0; i < b; i++){
        document.write(`
    <ul>
        <li>${a}</li>
    </ul>
    `)
    }
    

}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr1 = [1,2,'arr',true];

function mass(arr){
    for (let i = 0; i < arr.length; i++){
        document.write(`
    <ul>
        <li>${arr[i]}</li>
    </ul>
    `)
    }
}

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr2 = [{id:1, name:'Alex', age:20,}, {id:2, name:'Max', age:10,}, {id:3, name:'Losha', age:25,}]
function object(arr){
    for (let i = 0; i < arr.length; i++){
        document.write(`
        <div>
        ${arr[i].id}
        ${arr[i].name}
        ${arr[i].age}
        </div>
        `)
    }
}
