// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames1 : string[] = ["Mudabbir", "Junaid", "Mubashir"]
if(usernames1.length > 0){
    for(let username of usernames1){
        console.log("Friend: " + username)
    }
}
else{
    console.log("We need to find some users!")
}


let usernames2 : string[] = []
if(usernames2.length > 0 ){
    for(let username of usernames2){
        console.log("Friend: " + username)

    }
}
else{
    console.log("We need to find some users!")
}