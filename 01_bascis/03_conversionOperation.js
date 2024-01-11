let score = "23ac"

console.log(typeof score)
console.log(typeof(score))

let ValueInNumber = Number(score)
console.log(score)
console.log(typeof ValueInNumber)
console.log(ValueInNumber)


// "33" => 33
// "33abc" => NaN
// true => 1; , false => 0;

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Ritik" => true


let someNumber = 33
let convertNumberInToString = String(someNumber)
console.log(convertNumberInToString)
console.log(typeof someNumber)
console.log(typeof convertNumberInToString)

//*************** operations *********************//
 
let value = 3
let negValue = -value
console.log(negValue)

let str1 = "Ritik"
let str2 = " Gupta"

let str3 = str1 + str2 
console.log(str3)

console.log(1 + " 2")
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log("1" + (2 + 2))
console.log(1 + 2 + "2")


let gameCounter =100
gameCounter++;
console.log(gameCounter);
//postfix
let x = 3;
let y = x++;
console.log(x)
console.log(y)
//prefix
let a = 3;
let b = ++a;
console.log(a)
console.log(b)