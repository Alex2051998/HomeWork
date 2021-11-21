// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let num = [1, 2, 3, 4, 5];
let str = ['Alex', 'Max', 'Oleg', 'Valera', 'Vasia'];
let other = ['Alex', 23, 4, 1998, true];
console.log(num);
console.log(str);
console.log(other);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
arr[0] = 'Max';
arr[1] = 19;
arr[2] = 2002;
console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i = 0; i < 10; i++){
    document.write('<div> "Hello world" </div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let mas = [];

for(let i = 0; i < 10; i++){
    mas[i] = 'Hello world'
    document.write(`<div> ${mas[i]}  ${[i]}  </div>`);
}
console.log(mas);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let n = 0;

while (n < 20) {
    n++;
    document.write(`<h1>Alex</h1>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let block = [];
let i = -1;
while (i < 20) {
    i++;
    block[i] = 'Alex';
    document.write(`<h1>${block[i]}  ${[i]}  </h1>`);
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = [1,2,3,4,5,6,7,8,9,10];
for(let i =0; i < arr1.length; i++){
    console.log(arr1[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr2 = ['q','w','e','r','t','y','u','i','o','p'];
for(let i =0; i < arr2.length; i++){
    console.log(arr2[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr3 = [1,2,'r','t',5,6,7,'o','p',10];
for(let i =0; i < arr3.length; i++){
    console.log(arr3[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr4 = [1,2,3,'a','b','c',true,false,true,false];
for(let i = 0; i < arr4.length; i++){
    if(typeof arr4[i] === "boolean"){
        console.log(arr4[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr5 = [1,2,3,'a','b','c',true,false,true,false];
for(let i = 0; i < arr5.length; i++){
    if(typeof arr5[i] === "number"){
        console.log(arr5[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr6= [1,2,3,'a','b','c',true,false,true,false];
for(let i = 0; i < arr6.length; i++){
    if(typeof arr6[i] === "string"){
        console.log(arr6[i]);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr7 = [];
arr7[0] = 'a';
arr7[1] = 'b';
arr7[2] = 'c';
arr7[3] = 'd';
arr7[4] = 1;
arr7[5] = 2;
arr7[6] = 3;
arr7[7] = 4;
arr7[8] = true;
arr7[9] = false;
for(let i = 0; i < arr7.length; i++){
    console.log(arr7[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let arr8 = [];
for(let i = 0; i < 10; i++){
    console.log(i)
    document.write(`<div> ${[i]} </div>`)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let arr9 = [];
for(let i = 0; i < 100; i++){
    console.log(i)
    document.write(`<div> ${[i]} </div>`)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let arr10 = [];
for(let i = 0; i < 100; i+=2){
    console.log(i)
    document.write(`<div> ${[i]} </div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
let arr11 = [];
for(let i = 0; i < 100; i++){
    if (i % 2 == 0) {
        console.log(i)
        document.write(`<div> ${[i]} </div>`)
    }

}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let arr12 = [];
for(let i = 0; i < 100; i++){
    if (i % 2 !== 0) {
        console.log(i)
        document.write(`<div> ${[i]} </div>`)
    }

}

