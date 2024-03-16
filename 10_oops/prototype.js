let myName = "Ritik      "

function truelength() {

}

console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",
    getSpiderPower: function () {
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.ritik = function () {
    console.log(`ritik is present in all object`);
}

// heroPower.ritik()
// myHeros.ritik()
Array.prototype.hitesh = function () {
    console.log(`hhhhh`);
}

myHeros.ritik()
myHeros.hitesh()
// heroPower.hitsh()


// inheritance

const User = {
    name: "Mittal",
    eamil: "chai@google.com"
}


const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}
const taSupport = {
    makeAssignment: "ja Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User

//Morden Syntax

Object.setPrototypeOf(teachingSupport, teacher)


let anotherUsername = "RitikGupta     "

String.prototype.truelength= function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);

}
anotherUsername.truelength()
"babbu Maan".truelength()