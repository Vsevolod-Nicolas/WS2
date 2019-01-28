var util = require('util');

var obj = {
    a: 5,
    b: "Test",
    test: function () {
        return 123;
    }
};

console.log(util.inspect(obj));
console.log(obj);

var str = util.format( "My %s %d %j", "JJJJJ", 123, {jjj:"123"});

console.log(str);