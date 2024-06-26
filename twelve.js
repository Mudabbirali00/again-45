"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friends_name = ["Mubashir", "Junaid", "Ateeb"];
friends_name.forEach(name => {
    console.log(`Hello! ${name}, How are you?`);
});
