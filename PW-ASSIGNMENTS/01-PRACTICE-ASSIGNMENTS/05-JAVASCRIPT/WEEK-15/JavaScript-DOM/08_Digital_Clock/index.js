const updateTime = () => {
    const date = new Date()
    const hour = date.getHours()
    const mins = date.getMinutes()
    const secs = date.getSeconds()
    
    const time = `${hour}:${mins}:${secs}`
    
    const div = document.querySelector("div")
    div.textContent = time;

    const bgColor = `#${hour}${mins}${secs}`;
    document.body.style.backgroundColor = bgColor;
}

setInterval(updateTime, 1000);


