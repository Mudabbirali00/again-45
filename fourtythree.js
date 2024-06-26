"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians1(magicians2) {
    magicians2.forEach(names => {
        console.log(`${names}`);
    });
}
function make_great(magicians2) {
    return magicians2.map(magicians2 => "The Great " + magicians2);
}
let magicians2 = ["david", "harry", "potter"];
let great_magicians = make_great([...magicians2]);
console.log("Original Magicians");
show_magicians1(magicians2);
console.log("\nThe Great Magicians");
show_magicians1(great_magicians);
