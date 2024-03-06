const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId

const startCangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeBGC,1000)
    }

    function changeBGC() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopCangingColor = function () {
    clearInterval(intervalId)
    intervalId=null;
}

document.querySelector('#start').addEventListener('click', startCangingColor)
document.querySelector('#stop').addEventListener('click', stopCangingColor)