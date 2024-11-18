// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

function counter() {
    console.log(count);
    count++;
    setTimeout(counter, 1000); // Recursively call the function after 1 second
}

counter(); // Start the counter
