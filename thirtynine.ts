// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string):string{
    return `${city},${country}`
}
let city1 :string = city_country("Karachi", "Pakistan")
let city2 :string = city_country("Mashhad", "Iran")
let city3 :string = city_country("New york", "America")

console.log(city1)
console.log(city2)
console.log(city3)