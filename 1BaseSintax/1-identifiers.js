'use strict';

const INTERVAL =    500;
let counter =       0;
const MAX_VALUE =   10;
let timer =         null;

console.log("Begin");

const event = () => {
    if (counter === MAX_VALUE) {
        console.log("The end");
        clearInterval(timer);
        return;
    }
    console.dir({ counter, date: new Date() });
    counter++;
};

timer = setInterval(event, INTERVAL)