// let a =100;//global
if (false) {
    let a =20;
    const b =32;
    var c =22;  //var use nahi karna 
    console.log("inner", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username ="Ritik"

    function two(){
        const website ="yputube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();


if (true){
    const username ="Ritik"
    if (username === "Ritik"){
        const website =" facebook.com"
        // console.log(username + website);

    }
    // console.log(website); // ye access nahi hoga
}
// console.log(username); //ye access nahi hoga 


//++++++++++++++++++++++++ intresting ++++++++++++++++++++++++//

console.log(addone(5));
function addone (num){
    return num +1
}

const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5));