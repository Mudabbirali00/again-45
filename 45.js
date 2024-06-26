"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carDetails(manufacturer, model, options) {
    return Object.assign({ manufacturer: manufacturer, model: model }, options);
}
let info = carDetails("Honda", "Civic", { color: "black", year: 2022 });
console.log(info);
