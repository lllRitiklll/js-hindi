function printName(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("k");
}

// printName();


// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumber(num1, num2){
    // let result =num1 + num2;
    // return result;
    return num1+num2;
}

const result = addTwoNumber(88 ,12)

// console.log("Result ", result );

function loginUserMessage(username){
    if (!username) {
        console.log("Please Enter A Username");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Ritik"))

//*********************************/

function calculateCartPrice(val1 ,val2, ...num1){
    return num1

}
console.log(calculateCartPrice(200 ,400 ,100))

const user ={
    username : "Ritik",
    price : 70
}

function handerlObject(anyobject){
    console.log(`Username ${anyobject.username} and Price is ${anyobject.price}`);
    
}
// handerlObject(user)

handerlObject({
    username:"Billu Badmash",
    price: 322
})

const myNewArray = [200 , 330, 22, 45]

function returnSecondValue(getArray) {
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 330, 22, 45]));