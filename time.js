function printDateTime() {
    console.log(greeting + ' Current Date/Time is ' + new Date());
}

var greeting = 'Hello there.';
var delay = 2000;
setTimeout(printDateTime, delay);