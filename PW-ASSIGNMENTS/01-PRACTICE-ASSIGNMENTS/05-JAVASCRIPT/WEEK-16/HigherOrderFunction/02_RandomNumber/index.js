setTimeout(function(){
    console.log(Math.floor(Math.random()*100))
}, 4000)

let seconds = 4

let timeLeft = setInterval(() => {
    seconds--
    const statement = `Time left for the random number: ${seconds} Sec(s)`

    console.log(statement)

    if (seconds === 1) {
    clearInterval(timeLeft)
    }
}, 1000)