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
