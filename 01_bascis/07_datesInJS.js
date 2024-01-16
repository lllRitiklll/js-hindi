console.log(Date("en-IN"));

// Date
const myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());


//let myCreateDate = new Date(2023, 0, 23);
//let myCreateDate = new Date(2023, 0, 23, 5, 3);
//let myCreateDate = new Date("2023-01-21");
let myCreateDate = new Date("01-30-2024");
console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.round(Date.now()/1000))

let newDate =new Date();
console.log("+++++++++++++++++++++++++++++++++++++++++++");
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

// console.log(`${myDate.getDate()} and the tinme iss`);

newDate.toLocaleString('default',{
    weekday:'long',
})
