// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


let data = new Date();



function printdate() {
    const data2 = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(data2)
}
setInterval(printdate , 1000)