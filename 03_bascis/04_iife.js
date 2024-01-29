// Immediately invoked function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log("DB Connected");
})();
( (name) => {
    console.log(`DB Connected ${name}`);
})("Raj")