//for

for (let i = 0; i<=10; i++) {
    const element = i;

    if(element == 7){
        // console.log("Thala for a reasion");
    }

    // console.log(element);
} 
for (let i = 1; i <=10; i++) {
  //  console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(`i * j = ${i * j}`);
    }
}



let myArray = ["Maruti", "Hanuman", "shiv", "Ram"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break and continue
// for (let index = 1; index <=20; index++) {
//     if (index==5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 1; index <=20; index++) {
    if (index==5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
}