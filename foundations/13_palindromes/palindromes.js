const palindromes = function (str) {
    const allowedChars = "abcdefghijklmnopqrstuvwxyzäöüß123456789"
    
    const cleanedString = str
        .toLowerCase()
        .split("")
        .filter((character) => allowedChars.includes(character))
        .join("")
    
    const reversedString = cleanedString
        .split("")
        .reverse()
        .join("")
    

    return cleanedString === reversedString
};
// console.log(palindromes("A car, a man, a maraca."))
// Do not edit below this line
module.exports = palindromes;



