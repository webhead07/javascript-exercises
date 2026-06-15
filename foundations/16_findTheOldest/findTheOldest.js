const findTheOldest = function (people) {
    people.map((person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear()
        }
    })

    const oldest = people.reduce((oldestPerson, currentPerson) => {
        if ((oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) > (currentPerson.yearOfDeath - currentPerson.yearOfBirth)) {
            return oldestPerson
        }
        return currentPerson
    })
    return oldest
    }
// Do not edit below this line
module.exports = findTheOldest;

//--------------------------------

//    const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1066,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

// const findTheOldest = function (people) {
//     people.map((person) => {
//         if (!person.yearOfDeath) {
//             person.yearOfDeath = new Date().getFullYear()
//         }
//      return person
//     })

//     const oldest = people.reduce((oldestPerson, currentPerson) => {
//         if ((oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) > (currentPerson.yearOfDeath - currentPerson.yearOfBirth)) {
//             return oldestPerson
//         }
//         return currentPerson
//     })
//     return oldest
//     }


// console.log(findTheOldest(people))