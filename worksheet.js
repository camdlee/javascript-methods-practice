const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
// const names = characters.map(character => {
//     return character.name;
// })
// console.log(names)

// can also create it into a one liner
// const names2 = characters.map(character => character.name)
// console.log(names2)

//2. Get array of all heights
// const heights = characters.map(character => {
//     return character.height
// })
// console.log(heights)

//3. Get array of objects with just name and height properties
// const nameAndHeights = characters.map(character => ({
//     name: character.name, 
//     height: character.height
// }));
// console.log(nameAndHeights)

//4. Get array of all first names
// const firstNames = characters.map(character => 
//     character.name.split(' ')[0]
// )
// console.log(firstNames)



//***REDUCE***
//1. Get total mass of all characters
// Scenario: want to iterate through the values in an array and accumulate or total some value
// We need an accumulator (its an accumulator pattern)

// Syntax:
// const variable = array.reduce((accumulator, current value) => {
//  return accumulator + new value
//}, initial value for accumulator)
// const totalMass = characters.reduce((acc, cur) => {
//     return acc + cur.mass;
// }, 0)
// console.log(totalMass)
//2. Get total height of all characters
// one liner option
// const totalHeight = characters.reduce((accumulator, currentvalue) => accumulator + currentvalue.height, 0);

// console.log(totalHeight)

//3. Get total number of characters by eye color
// const charByEyeColor = characters.reduce((acc, cur) => {
//     const color = cur.eye_color
//     if(acc[color]){
//         acc[color]++
//     } else {
//         acc[color] = 1;
//     }
//     return acc;
// }, [])

// console.log(charByEyeColor)

//4. Get total number of characters in all the character names
// const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0)

// console.log(totalNameCharacters)

//5. Get total number of letters in each characters names
// const totalLettersPerChar = characters.reduce((acc, cur) => {
//     const name = cur.name;
//     acc[name] = name.length;
//     return acc
// }, {})
// console.log(totalLettersPerChar)



//***FILTER***
// The filter method w

//1. Get characters with mass greater than 100
// const greaterThan100 = characters.filter((character) => {
//     return character.mass > 100
// })
// console.log(greaterThan100)

//2. Get characters with height less than 200
// const lessThan200 = characters.filter((character) => {
//     return character.height < 200
// })
// console.log(lessThan200)

//3. Get all male characters
// const maleCharacters = characters.filter((char) => char.gender == 'male')
// console.log(maleCharacters)

//4. Get all female characters
// const femaleCharacters = characters.filter((char) => char.gender == 'female')
// console.log(femaleCharacters)




//***SORT***
//Syntax:
// const sortingFunction = array.sort((callback function value a, callback function value b) => {
//      return a - b
//})

// the return a - b is considered part of a compare function which will check if the value returns a positive, negative or zero value
// in this case if the value is negative, a will be sorted before b
// if the value is negative, b will be sorted before a
// if the value is zero, no changes are done with the sort order

//1. Sort by mass
// const sortByMass = characters.sort((a, b) => {
//     return a.mass - b.mass
// })
// console.log(sortByMass)

// const sortByMassDes = characters.sort((a, b) => {
//     return b.mass - a.mass
// })
// console.log(sortByMass)

//2. Sort by height
// const sortByHeight = characters.sort((a,b) => {
//     return a.height - b.height
// })
// console.log(sortByHeight)

//one liner
// const sortByHeight2 = characters.sort((a,b) => a.height - b.height);
// console.log(sortByHeight2)

//3. Sort by name
// const sortByName = characters.sort((a, b) => {
//     if(a.name < b.name) return -1;
//     return 1
// })
// console.log(sortByName)

// strings are different because they do not return -1, 1, or 0 for the compare function to work properly
// so we need to return -1, 1, or 0 if certain conditions are met
// in this case to do it alphabetically, we need to see which value is less than

//3.1 Sort by last name
// const sortByLastName = characters.sort((a, b) => {
//     let lastNameA = a.name.split(' ')
    
// })
// console.log(lastNameA)

//4. Sort by gender
// const sortByGender = characters.sort((a, b) => {
//     if (a.gender === 'female') return 1;
//     return -1
// })
// console.log(sortByGender)



//***EVERY***
// Method will check if all items in an object meet the conditions written out
// Syntax:
// const everyFunction = array.every((item) =>{
//    condition that needs to be met
//})

//1. Does every character have blue eyes?
// const allBlueEyes = characters.every((character) => {
//     return character.eye_color === 'blue';
// })
// console.log(allBlueEyes)
// it returns false, because not all characters have blue eyes
// one liner
// const allBlueEyes1 = characters.every((character) => character.eye_color === 'blue')
// console.log(allBlueEyes1)


//2. Does every character have mass more than 40?
// const allMassOver40 = characters.every((character) => {
//     return character.mass > 40
// })
// console.log(allMassOver40)

//3. Is every character shorter than 200?
// const allShorterThan200 = characters.every((character) => character.height < 200)
// console.log(allShorterThan200)

//4. Is every character male?
// const allCharactersMale = characters.every((character) => character.gender === 'male')
// console.log(allCharactersMale)



//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
