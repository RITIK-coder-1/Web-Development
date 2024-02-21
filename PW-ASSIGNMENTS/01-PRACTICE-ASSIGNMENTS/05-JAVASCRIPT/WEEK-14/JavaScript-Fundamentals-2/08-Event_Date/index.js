// Program to find remaining days for any event from current date ---------->


function remainingDays(anyDate) {
    const currentDate = new Date("Nov 6, 2023") / (1000*60*60*24) // in Days
    const Days = anyDate - currentDate
    return `The remaining days for the event: ${Days}`
}

const eventDate = new Date("Dec 7, 2023") / (1000*60*60*24) // in Days

const daysLeft = remainingDays(eventDate)
console.log(daysLeft);