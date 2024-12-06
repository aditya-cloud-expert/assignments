// ## Write to a file
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Using the fs library again, try to write to the contents of a file.

const fs = require('fs');

// Synchronous version - blocks execution until complete
try {
    fs.writeFileSync('output.txt', 'Hello World Sync!');
    console.log('Sync write completed');
} catch (error) {
    console.error('Sync write failed:', error);
}

// Asynchronous version with callback
fs.writeFile('output.txt', 'Hello World Async!', (error) => {
    if (error) {
        console.error('Async write failed:', error);
        return;
    }
    console.log('Async write completed');
});

// Asynchronous version with promises
async function writeFilePromise() {
    try {
        await fs.promises.writeFile('output.txt', 'Hello World Promise!');
        console.log('Promise write completed');
    } catch (error) {
        console.error('Promise write failed:', error);
    }
}

writeFilePromise();

// The code below will run immediately, showing the non-blocking nature
console.log('This runs right away!');