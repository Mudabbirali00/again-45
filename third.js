"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "mudaBbIr ali mubashir junaid";
console.log("lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
// creating title case by function
function toTitleCase(str) {
    return str.split(' ')
        .map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
        .join(' ');
}
console.log("Titlecase: " + toTitleCase(personName));
