// /3
// round down
// -2

import fs from 'fs'; 

// Specify the path to your file
const filePath = './input.txt';

// Read the file synchronously with utf8 encoding
const data = fs.readFileSync(filePath, 'utf8');

// Split the data by new lines
const lines = data.split('\n');
    
// Log the result
console.log('File content split by lines:', lines);

const exampleData = [12, 14, 1969, 100756]

const totalFuel = lines.map(item => {
  const dividedItem = item / 3
    const roundedDownItem = Math.floor(dividedItem)
    const subtractedItem = roundedDownItem - 2
  console.log('subtracted Items:', subtractedItem)
  return subtractedItem
});

const initialValue = 0;
const sumWithInitial = totalFuel.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log('Sum of items:', sumWithInitial);

