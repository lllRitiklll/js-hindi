const user = {
    username:"Ritik",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function cj(){
//     let username ="Ritik"
//     console.log(this);
// }
// cj()

// const chai =function(){
//     let username = "Ritik"
//     console.log(this.username);
// }
const chai = () =>{
    let username = "Ritik"
    console.log(this);
}
// chai()


const addTwo = (num1, num2)=> {
    return num1 + num2;
}
const addTo = (num1, num2)=> (num1 + num2) //ueact use karte waqt jyada kaam aayega
const addToww = (num1, num2)=> num1 + num2 //ueact use karte waqt jyada kaam aayega //ise implicit return kehte h
const addTww = (num1, num2)=> ({name : "Ritik"})//retun object 


// console.log(addTo(2,3));
// console.log(addTwo(4,3));
// console.log(addToww(4,3));
// console.log(addTww(4,3));

// const myArray = [2, 4, 5, 4, 6];
// myArray.forEach()