Math.PI =44;
console.log(Math.PI);

const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discripter);

const chai ={
    name: 'ginger chai',
    price: 350,
    isAviable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}
