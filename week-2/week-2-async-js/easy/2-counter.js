

let counter = 1;

function increaseCounter(){
    console.log(counter)
    counter++;
    setTimeout(increaseCounter,1000)
}

increaseCounter();
































































// (Hint: setTimeout)