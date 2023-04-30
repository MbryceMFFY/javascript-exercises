const removeFromArray = function(array, item) {
    const newArray = [];
    array.forEach(myFunction);
    function myFunction(value) {
        if (value != item) {
            newArray.push(value);
        };
        console.log(newArray);
        return newArray;
        
    }
}

// Do not edit below this line
module.exports = removeFromArray;
