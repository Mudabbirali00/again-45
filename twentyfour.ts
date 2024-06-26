// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let car = "toyota"
let car1 = "honda" 
// equality
console.log("Is car == 'toyota' is available on your showroom? i predict true")
console.log(car == car)
// inequality
console.log("Is car == 'toyota' is available on your showroom? i predict true")
console.log(car == car1)


// • Tests using the lower case function
let bike = "YAMAHA"
console.log("Is bike == 'YAMAHA' is available after convertig in lowercase? i predict true")
console.log(`${bike}`.toLowerCase() === "yamaha")

let num1 = 15
let num2 = 12

// equality
console.log("Is num1 == is equal to num1? I predict true")
console.log(num1 == num1)
// inequality
console.log("Is num1 == is equal to num2? I predict false")
console.log(num1 == num2)

// greater than
console.log("Is num1 == is greater than num2? i predict true")
console.log(num1 > num2)

// less than 
console.log("Is num1 == is less than num2 ? i predict false")
console.log(num1 < num2)

// greater than or equal to,
console.log("Is num1 == is greater than or equal to num2?")
console.log(num1 >= num2)

// and less than or equal to
console.log("Is num1 == is less than or equal to num2?")
console.log(num1 <= num2)


// • Tests using "and" and "or" operators

let bool1 = true
let bool2 = false

// &&

console.log("Is bool1 is true is bool2 false? i predict true")
console.log(bool1 && bool2)

// ||


console.log("Is bool1 is true is bool2 false? i predict true")
console.log(bool1 || bool2)


// • Test whether an item is in a array

// • Test whether an item is not in a array

let ourFriends :string[] = ["Mubashir", "Junaid", "Mudabbir"]
console.log("Is Junaid in the array")
console.log(ourFriends.includes("Junaid")) 

// • Test whether an item is not in a array

console.log("Is ateeb in the array")
console.log(ourFriends.includes("ateeb")) 