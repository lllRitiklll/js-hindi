//for of

//["", "", ""]
//[{}, {}, {}]

let myArray = ["Maruti", "Hanuman", "shiv", "Ram"]
for (const name of myArray) {
    // console.log(name);
}

const myname ="Ritkik"
for (const iterator of myname) {
    // console.log(iterator);    
}


//maps
const map = new Map()
map.set('ind', "India")
map.set('fr', "france")
map.set('aus', "Australia")
map.set('ind', "India")
console.log(map);

for (const kye of map) {
    console.log(kye);
}
for (const [kye, value] of map) {
    console.log(`${kye} :- ${value}`);
}
