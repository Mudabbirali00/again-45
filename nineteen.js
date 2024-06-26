"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestlist3 = ["Mubashir", "Junaid", "Ateeb"];
// ateeb can't make the dinner
let notComing3 = guestlist3[2];
// printing message to that person wo can't make dinner
console.log(notComing3 + " " + "is not coming on dinner");
let newPerson3 = "Zayn Ali";
// replacing to newPerson
guestlist3[guestlist3.indexOf(notComing3)] = newPerson3;
// guestlist3.forEach(name => {
//     console.log(`${name}, You are invited to a dinner.`)
// });
// console.log(`Hello! I found a bigger dining table.`)
// add a name in the begining of the array
let newName6 = "Ali";
guestlist3.unshift("Ali");
// add a name at the middle of the array
let newName7 = "Muhammad";
let index2 = 2;
guestlist3.splice(index2, 0, newName7);
// console.log(guestlist1)
let newName8 = "Saad Ahmed";
guestlist3.push(newName8);
// guestlist3.forEach(name=> {
//     console.log(`Hello! ${name}, I found a biger dining table so i invited you`)
// })
// console.log("I can invite only two persons for dinner")
// // console.log(guestlist2)
// while (guestlist3.length > 2) {
//     let remove = guestlist3.pop()
//     console.log(`Dear ${remove}, Sorry i can't invite you on my dinner `)
// }
// guestlist3.forEach(name => {
// console.log(`Dear ${name} You are still invited to a dinner`)
// })
// guestlist3.pop()
// guestlist3.pop()
// console.log(guestlist3)
console.log(guestlist3.length + " " + `Persons are invited to a dinner`);
