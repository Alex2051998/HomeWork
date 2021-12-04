// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з
// властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, producer, year, release, maxspead, maxpover){
        this.model = model,
        this.produce,
            this.year =year,
            this.release = release,
            this.maxspead = maxspead,
            this.maxpover = maxpover,
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
            this.drive = function (){
            console.log(`їдемо зі швидкістю ${maxspead} на годину`)
            }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
            this.info = function(){
                for (const key in this) {
                                if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
                            }
            }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
            this.increaseMaxSpeed = function(newSpeed){
                this.maxspead += newSpeed;
            }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
            this.changeYear = function (newValue){
            this.year = newValue;
            }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
            this.addDriver = function (driver){
            this.driver = driver;
            }
}

let addCar = new Car('Citroen', 'France', 2010, 270, 150);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(50);
addCar.drive();
addCar.changeYear(2020)
addCar.info();
addCar.addDriver('Valera')
console.log(addCar)






//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car1 {
    constructor(model, producer, year, release, maxspead, maxpover) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.release = release;
        this.maxspead = maxspead;
        this.maxpover = maxpover;
    }
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspead} на годину`);
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxspead += newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue){
        this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver){
        this.driver = driver;
    }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class popelushka{
    constructor (name, age, footsize){
        this.name = name;
            this.age = age;
            this.footsize = footsize;
    }
}


let popelushkaArr = [
    new popelushka('Anja', 17, 31),
    new popelushka('Sveta', 18, 37),
    new popelushka('Alona', 20, 42),
    new popelushka('Angelina', 21, 36),
    new popelushka('Frosia', 26, 39),
    new popelushka('nina', 21, 25),
    new popelushka('ira', 24, 30),
    new popelushka('lesia', 26, 31),
    new popelushka('nadia', 29, 32),
    new popelushka('genia', 90, 58),

];

console.log(popelushkaArr);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class princ {
    constructor(name, age, findShose) {
            this.name = name;
            this.age = age;
            this.findShose = findShose;
    }

}

let prince = new princ('Sergey', 25, 30);
console.log(prince);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function nevPara (popelushkaArr, prince){
    for (let i of popelushkaArr){
        if(i.footsize === prince.findShose){
            return `Твоя принцеса: ${i.name}`;
        }
    }
};

console.log(nevPara (popelushkaArr, prince));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const emptyPrincess = popelushkaArr.find((i) => i.footsize === prince.findShose);
console.log(emptyPrincess); // Підкажіть як це працює будьласка ???