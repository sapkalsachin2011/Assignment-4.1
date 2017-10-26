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
