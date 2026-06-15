const getTheTitles = function (books) {
   return (books.map((book) => book.title))
};
// Do not edit below this line
module.exports = getTheTitles;


// const books = [
//       {
//         title: 'Book',
//         author: 'Name'
//       },
//       {
//         title: 'Book2',
//         author: 'Name2'
//       }
//     ]
// const getTheTitles = function (books) {
//     console.table(books) // to see if the array of objects was coming through
//     console.table(books.map((book) => book.title)) // map to get a new array that only outputs my desired data i.e book titles
// };
// getTheTitles(books)