const add = function(a, b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return (arr.reduce((sum, current) => sum + current,0))
};

const multiply = function(arr) {
 return (arr.reduce((current, next)=> current * next))
};

const power = function(a,b) {
	return (a**b)
};

const factorial = function (a) {
  let fact = 1
    if (a === 0)
    {
      return fact
    } else {
      do {
        fact = fact * a
        a--
      } while (a >= 1)
      return fact
    }
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
