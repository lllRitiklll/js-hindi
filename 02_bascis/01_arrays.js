let myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "Dandadikari", "naagraj"];
const myArray2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray2[3]);
// console.log(myHeros[1]);

//Array method

// myArray.push(6) //push an element in existing Array(last)
// myArray.push(7)
// myArray.pop() //remove last elimennt from array

// myArray.unshift(9)// push an element in existing Array(front)
//myArray.unshift(10)
// myArray.shift()//remove front elimennt from array

// console.log(myArray.includes(10));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(1));

// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);


//slice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1,3)//
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)
console.log("c ", myArray);
console.log(myn2);



