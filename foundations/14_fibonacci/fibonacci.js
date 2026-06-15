const fibonacci = function (index) {
    index = parseInt(index)
    console.log(typeof(index))
    if (index === 0)
        return 0
    if (index < 0)
        return "OOPS"
    let fibonacciSequence = [1, 1]
    for (let i = 2; i < index; i++){
        fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2])
    }
    return(fibonacciSequence[index - 1])
};


// Do not edit below this line
module.exports = fibonacci;
