const coding = ["py", "js", "cpp", "java", "rb"]

coding.forEach( function (item) {
    //callback function ka naam nahi hota
    // console.log(item);
} );

coding.forEach( (item) => {
    //arrow function
    // console.log(item);
} )

function printMe(val) {
    console.log(val);
}
// coding.forEach(printMe) //refrance dena hai

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageFileName);//loop on array in side obj
})