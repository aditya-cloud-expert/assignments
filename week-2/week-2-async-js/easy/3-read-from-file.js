// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// Synchronous expensive operation
function expensiveOperation(iterations) {
    console.log(`Starting expensive operation with ${iterations} iterations...`);
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sin(i) * Math.cos(i);
    }
    console.log('Expensive operation completed');
    return result;
}

// Asynchronous file read
console.log('Starting program...');

 fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

// Try different values here to see how it affects the order of operations
const iterations = 100; // Try 1000, 1000000, 100000000
expensiveOperation(iterations);

console.log('Program continues executing...');
