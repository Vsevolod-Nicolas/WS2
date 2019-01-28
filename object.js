let util = require('util');

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log("Гуляет " + this.name)
}

function Cat(n) {
    this.name = n
}

Cat.prototype.sound = function () {
    console.log("Мяукает " + this.name)
}

util.inherits(Cat, Animal);

let murka = new Cat ("Мурка");

murka.walk()
murka.sound()