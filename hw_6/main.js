// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str1 = 'Каждый охотник желает знать';

function stringToArray(str1) {
    return str1.split(' ');
}

console.log(stringToArray(str1));

//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let string = 'Каждый охотник желает знать';

function delete_characters(str, length){
    return string.substring(str, length);
}

console.log(delete_characters(0, 7));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str2 = "HTML JavaScript PHP";
function insert_dash(str){
    return str.toUpperCase().replaceAll(' ', '-');

}
console.log(insert_dash(str2));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str3 = 'lalala';
function Uper(str){
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}
console.log(Uper(str3));
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str4 = "HTML JavaScript PHP";
function capitalize(str){
  // ???
}

console.log(capitalize(str4));