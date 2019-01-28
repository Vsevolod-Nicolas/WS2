let util = require('util');

let obj = {
    a: 5,
    b: "Test",
    test: function () {
        return 123;
    }
};

console.log(util.inspect(obj));
console.log(obj);

let str = util.format( "My %s %d %j", "JJJJJ", 123, {jjj:"123"});
console.log(str);