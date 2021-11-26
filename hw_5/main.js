// - створити функцію яка обчислює та повертає площу прямокутника висотою
let square = (a) => {
    let res = a * 10;
    return res;
    // console.log(res);
}
square(10);


// - створити функцію яка обчислює та повертає площу кола

let squareсcircle = (r) => {
    const p = 3.14;
    let s = p * (r * r);
    return s;
}

squareсcircle(5);

// - створити функцію яка обчислює та повертає площу циліндру
let squareC = (r, h) => {
    const p = 3.14;
    let S = 2 * p * r * (r + h);
    return S;
}
squareC(10, 10);

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 4];
let comearr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

comearr(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let text = (str) => {
    document.write(`<p>${str}</p>`);
}

text('Hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul = (li) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}

ul('Hello world');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulprofesional = (str, li) => {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${str}</li>`)
    }
    document.write(`</ul>`);
}

ulprofesional('Hello kiti', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr1 = [1,'str', true];

let list = (array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`);
}

list(arr1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arr2 = [{id: 1, name: 'Alex', age: 23}, {id: 2, name: 'Max', age: 19}];
let obj = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div> ${array[i].id} - ${array[i].name} - ${array[i].age} </div>`);
    }

}
obj(arr2);

function printArrayOfObjects(arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
    }
}



printArrayOfObjects(arr2);
