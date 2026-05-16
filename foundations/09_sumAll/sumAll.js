const sumAll = function (a, b) {
    if ((Number.isInteger(a) && a > 0) && (Number.isInteger(b) && b > 0)) {
        let sum = 0;
        let min = a < b ? a : b;
    let max = a > b ? a : b;
        
        for (let i = min; i <= max; i++){
            sum += i
        }

        return sum
        
    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
