// singleton
// Object.create

// object literals
const mySym =Symbol("key1")

const jsUser = {
    name: 'Ritik',
    "full name": "Ritik Gupta",
    [mySym] : "myKey1",
    age: 21,
    location: "Delhi",
    email: "ritikgupta2307@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}
// console.log(jsUser.age);
// console.log(jsUser["email"])// dusra tarika object ke element ko acces karne ka
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]);


jsUser.email = "ritik@gv.com";
// Object.freeze(jsUser)
jsUser.email = "ritik@gv999.com";
// console.log(jsUser)

jsUser.greeting = function (){
    console.log("Hello js User");
}
console.log(jsUser.greeting());
