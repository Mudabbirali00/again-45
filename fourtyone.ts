// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians : string[] =["david", "harry", "potter"]
function show_magicians(magicians: string[]):void{
    magicians.forEach(names =>{
        console.log(`${names}`)
    })
}

show_magicians(magicians)