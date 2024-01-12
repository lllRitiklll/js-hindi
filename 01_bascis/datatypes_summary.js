// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoveVal = 100.3;

const isLoggedIn=false;
const outsideTemp =null;
let userEmail;

const id =Symbol('123')
const id2 =Symbol('123')
console.log(id == id2);

const bigNumber = 293200000203920392n



// Reference (non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman" , "naagraj", "doga"]
console.log(heros);
const myObj = {
    name:"Ritik",
    age:23,
}
console.log(myObj);

const myFunction =function(){
    console.log("daddy........");
}


//+++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-primitive)

let myName = "Ritik Gupta"
let anotherName = myName;
anotherName = "billu Badmash"
console.log(myName);
console.log(anotherName)


let userOne = {
 name: "Rajesh",
 upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "ankor@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);