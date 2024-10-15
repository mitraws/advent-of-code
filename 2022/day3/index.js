// items = letters in lowercase and uppercase 
// backpack = single line, first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.
// rule = Lowercase item types a through z have priorities 1 through 26., Uppercase item types A through Z have priorities 27 through 52.
// solution = Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

import fs from 'fs';


// Specify the path to your file
const filePath = './input.txt';

// Read the file synchronously with utf8 encoding
const data = fs.readFileSync(filePath, 'utf8');

// Split the data by new lines
const lines = data.split('\n');
    

// const exampleInput = fs.readFileSync('./example.txt', 'utf8').split('\n')

// Find common character
const letters = lines.map(item => {
  const firstHalf = item.substring(0, item.length/2)
  const secondHalf = item.substring(item.length/2)
  const commonCharacter = firstHalf.split('').find(char => secondHalf.includes(char));
    return commonCharacter
})

// Function to convert letter to corresponding number
function letterToNumber(letter) {
    if (letter >= 'a' && letter <= 'z') {
        // Lowercase letters: 'a' is 1, 'b' is 2, ..., 'z' is 26
        return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (letter >= 'A' && letter <= 'Z') {
        // Uppercase letters: 'A' is 27, 'B' is 28, ..., 'Z' is 52
        return letter.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    } else {
        // Return 0 or some other value if the character is not a letter
        return 0;
    }
}

// Transform the array to corresponding numbers
const numbers = letters.map(letterToNumber);

// Calculate the sum of all priorities
const initialValue = 0;
const sumOfPriorities = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  console.log(sumOfPriorities); 
