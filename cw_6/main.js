// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

function normalizeName(name) {
    name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
}

console.log(normalizeName(n2));
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function random(length){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;

}

console.log(random(100));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
function random1(length){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(Math.round(Math.random() * 100));
    }
    return arr.sort((a, b) => a - b);

}

console.log(random1(100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
function random2(length){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(Math.round(Math.random() * 100));
    }
    return arr.filter(value => !(value % 2) );

}

console.log(random2(100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
function random3(length){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(Math.round(Math.random() * 100));
    }
    return arr.map(value => value + '');

}

console.log(random3(100));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

function sortNums(numbers, direction) {

    if (direction === 'asc') {
        return numbers.sort((a, b) => a - b);
    } else if (direction === 'desc') {
        return numbers.sort((a, b) => b - a);
    }
    return [];
}

sortNums([1, 2, 3], 'asc');
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));
