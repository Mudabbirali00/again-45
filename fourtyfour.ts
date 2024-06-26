// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function order_sandwich(...items : string[]): void{
    console.log("You Ordered a sandwich with this item")
    items.forEach(item => console.log(" - " + item))
    console.log("Enjoy you sandwich")
}

order_sandwich("BBQ", "CHICKEN")
order_sandwich("mayo", "CHICKEN")
order_sandwich("kheera", "CHICKEN")
