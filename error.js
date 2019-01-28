var util = require('util');

var phrases = {
    "Hello": "Привет",
    "world": "мир"
};

function PhraseError(message) {
    this.message = message
}

util.inherits(PhraseError, Error);

function HttpError(status, message) {
    this.status = status;
    this.message = message;
}

util.inherits(HttpError, Error);

function getPhrases(name) {
    if(!phrases[name]) {
        throw new PhraseError("Нет такого слова")
    }
    return phrases[name];
}

function makePage(url) {
    if(url !== 'index.html') {
        throw new HttpError("Нет такой страницы")
    }
    return util.format("%s, %s!", getPhrases("Hell"), getPhrases("world"))
}

try {
    var page = makePage("index.html");

    console.log(page);
} catch(e) {
    if(e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.log("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack)
    }
}