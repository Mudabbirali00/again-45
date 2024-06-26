"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestlist2 = ["Mubashir", "Junaid", "Ateeb"];
// ateeb can't make the dinner
let notComing2 = guestlist2[2];
// printing message to that person wo can't make dinner
console.log(notComing2 + " " + "is not coming on dinner");
let newPerson2 = "Zayn Ali";
// replacing to newPerson
guestlist2[guestlist2.indexOf(notComing2)] = newPerson2;
// guestlist1.forEach(name => {
//     console.log(`${name}, You are invited to a dinner.`)
// });
// console.log(`Hello! I found a bigger dining table.`)
// add a name in the begining of the array
let newName3 = "Ali";
guestlist2.unshift("Ali");
// add a name at the middle of the array
let newName4 = "Muhammad";
let index1 = 2;
guestlist2.splice(index1, 0, newName4);
// console.log(guestlist1)
let newName5 = "Saad Ahmed";
guestlist2.push(newName5);
// guestlist2.forEach(name=> {
//     console.log(`Hello! ${name}, I found a biger dining table so i invited you`)
// })
console.log("I can invite only two persons for dinner");
// console.log(guestlist2)
while (guestlist2.length > 2) {
    let remove = guestlist2.pop();
    console.log(`Dear ${remove}, Sorry i can't invite you on my dinner `);
}
guestlist2.forEach(name => {
    console.log(`Dear ${name} You are still invited to a dinner`);
});
guestlist2.pop();
guestlist2.pop();
console.log(guestlist2);
