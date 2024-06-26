"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist1 = ["Mubashir", "Junaid", "Ateeb"];
// ateeb can't make the dinner
let notComing1 = guestlist1[2];
// printing message to that person wo can't make dinner
console.log(notComing1 + " " + "is not coming on dinner");
let newPerson1 = "Zayn Ali";
// replacing to newPerson
guestlist1[guestlist1.indexOf(notComing1)] = newPerson1;
// guestlist1.forEach(name => {
//     console.log(`${name}, You are invited to a dinner.`)
// });
console.log(`Hello! I found a bigger dining table.`);
// add a name in the begining of the array
let newName = "Ali";
guestlist1.unshift("Ali");
// add a name at the middle of the array
let newName1 = "Muhammad";
let index = 2;
guestlist1.splice(index, 0, newName1);
// console.log(guestlist1)
let newName2 = "Saad Ahmed";
guestlist1.push(newName2);
guestlist1.forEach(name => {
    console.log(`Hello! ${name}, I found a biger dining table so i invited you`);
});
