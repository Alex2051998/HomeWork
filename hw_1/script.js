// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'Hello';
let b = 'com';
let c = 'ua';
let d = 1;
let e = 10;
let f = -999;
let g = 123;
let h = 3.14;
let i = 2.7;
let j = 16;
let k = true;
let l = false;
// Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a, b, c, d, e, f, g, h, i, j, k, l);

alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// alert(j);
// alert(k);
// alert(l);

document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(i);
document.write(j);
document.write(k);
document.write(l);

// Переприсвоїти кожній змінній з завдання значення на довільне.
a = 'Hello';
b = 'A';
c = 'l';
d = 'e';
e = 'x';
f = '-';
g = 25;
h = '-';
i = 4;
j = '-';
k = 1998;
l = '!';
// Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a, b, c, d, e, f, g, h, i, j, k, l);
alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// alert(j);
// alert(k);
// alert(l);

document.write(a);
document.write(b);
document.write(c);
document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(i);
document.write(j);
document.write(k);
document.write(l);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Олександр ';
let middleName = 'Олександрович ';
let lastName = 'Фединець';

let person = firstName + ' ' + middleName + ' ' + lastName;

console.log(person);
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt('name');
let fname = prompt('last name');
let old = prompt('old');

alert("Вітаю " + name + ' ' + fname + " Тобі " + old);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let m = 100;
let n = '100';
let o = true;

console.log(typeof m);
console.log(typeof n);
console.log(typeof o);

// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6);
console.log(5 > 6);
console.log(5 >= 6);
console.log(5 === 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 != 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(123 === '123');
console.log(123 == '123');

// Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let result = 5;
document.write(str + result + "<br/>"); // 205 + = Конкатенація
document.write(str - result + "<br/>"); // 15 всі інші операції спрацювали в звичайному режимі
document.write(str * "2" + "<br/>"); //40
document.write(str / 2 + "<br/>"); //10 п