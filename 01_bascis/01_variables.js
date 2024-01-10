const accountId = 144553
let accountEmail = "ritikgupta@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId =2 not allowed

accountEmail ="hc@gmail.com"
accountPassword = "2322323"
accountCity = "jaipur"
let accountState; 
console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountPassword,accountEmail,accountCity,accountState])