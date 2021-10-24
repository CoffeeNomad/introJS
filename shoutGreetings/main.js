/*
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!

*/

// Write your code here:

function shoutGreetings(arryOfGreetings) {
    let greet = greetings.map(function (value) {
        return value.toUpperCase() + "!"
    })
    return greet
}
//testing arrow functions

const shoutGreetings2 = arryOfGreetings => {
    let greet = greetings.map(function (value) {
        return value.toUpperCase() + "!"
    })
    return greet
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
console.log(shoutGreetings2(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

