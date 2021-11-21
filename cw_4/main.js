// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let mini = 0;
function min(a, b, c){
    if(a < b && a < c){
        mini = a;
    }else if (b < c){
        mini = b;
    }else{
        mini = c;
    }
    return mini;
}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxi = 0;
function max(a, b, c){
    if(a > b && a > c){
       maxi = a;
    }else if (b > c){
        maxi = b;
    }else{
        maxi = c;
    }
    return maxi;
}
// - створити функцію яка повертає найбільше число з масиву
let array = [1,2,3,4,5,6,7,8,9,210];
function arrmax(arr){
    return Math.max.apply(null, arr);
}

// - створити функцію яка повертає найменьше число з масиву
function arrmin(arr){
    return Math.min.apply(null, arr);
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let suma = 0;
function sum(arr){
    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function seredne(arr){
    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma / arr.length;

}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax(arg) {
        let min = arguments[0];
        let max = arguments[0];
        for (const element of arguments) {
            if (element > max) {
                max = element;
            }
            if (element < min) {
                min = element;
            }
        }
        console.log("max ", max);
        return min;
    }
    document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021))


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arr2 =[];
function random(){
    for (let i = 0; i < 100; i++){
        arr2[i] = (Math.round(Math.random()*100));
    }
console.log(arr2);
}
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let arr3 =[];
function randomLimit(a){
    for (let i = 0; i < a; i++){
        arr2[i] = (Math.round(Math.random()*100));
    }
    console.log(arr2);
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr){


function revers(arr){
    let arr5 = []
    for(let i = arr.length-1; i >= 0; i-- ){
        arr5.push(arr[i]);
    }
    return arr5;
}


