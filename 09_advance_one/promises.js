const promiseOne = new Promise((resolve, reject) => {

    //Do an async task
    // DB calls, cryptography, network

    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
promiseOne.then(() => {
    console.log('promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task two');
        resolve()
    }, 1000)
}).then(() => {
    console.log('Async two consumed');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Ritik", email: "ritikgupta2307@gmail.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})

const promiceFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Gupta", password: "123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)

})
promiceFour.then((user) => {
    console.log(user);
    return user.username
}).then((myUsername) => {
    console.log(myUsername);
}).catch(() => {
    console.log('error')
}).finally(() => {
    console.log('the promise is either resolved or rejected');
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javaScript", password: "123" })
        }
        else {
            reject('ERROR: js went wrong')
        }
    }, 2000)
})
async function consumedPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}
consumedPromiseFive()

// async function getUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/lllRitiklll')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getUser()

fetch('https://api.github.com/users/lllRitiklll')
.then((response)=>{
    return response.json()
}).then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);})