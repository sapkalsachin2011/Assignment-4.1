"use strict";
// Naveen's Library
var AddNumbers;
(function (AddNumbers) {
    function add(params) {
        var total = 0;
        params.forEach(function (num) { return (total += num); });
        console.log('(add-numbers) total =', total);
        return total;
    }
    AddNumbers.add = add;
    AddNumbers.data = 100;
    console.log('(add-numbers) data =', AddNumbers.data);
})(AddNumbers || (AddNumbers = {}));
// Hari's Library
var AddStrings;
(function (AddStrings) {
    function add(params) {
        var total = '';
        params.forEach(function (str) { return (total += str + ' '); });
        console.log('(add-strings) total =', total);
        return total;
    }
    AddStrings.add = add;
    AddStrings.data = 'some string data';
    console.log('(add-strings) data =', AddStrings.data);
})(AddStrings || (AddStrings = {}));
/// <reference path="./add-numbers.ts" />
/// <reference path="./add-strings.ts" />
AddNumbers.add([1, 2, 3]);
AddStrings.add(['Hello', 'World']);
AddNumbers.add([1, 2]);
