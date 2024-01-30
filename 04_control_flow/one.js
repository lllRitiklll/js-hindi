// if
// const temperature =70;

// if (temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is grater than 50");
// }


// if (2 == "2") {
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==,


// const score =200;
// if (score>100){
//     const power = "fly"
//     console.log(`User Power : ${power}`);
// }

// const balance = 1000;
// if (balance> 500) console.log("test"),console.log("test2");//aisa likh sakte hai kaam bhi karega lekinn likhna nahi chajiye

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 700) {
//     console.log("less than 700");
// } else if (balance < 900){
//     console.log(" less than 900");
// }else if (balance == 1000) {
//     console.log(`balance is ${balance}`);
// }else{
//     console.log("balance is grater than 1000");
// }


const userLoggedIn = true;
const debitCard =true;
const loggedinFromGoogle =false;
const loggedinFromEmail=true;

if (userLoggedIn && debitCard){
    console.log("allowed To be Course");
}

if (loggedinFromEmail || loggedinFromGoogle){
    console.log("User logged in");
}