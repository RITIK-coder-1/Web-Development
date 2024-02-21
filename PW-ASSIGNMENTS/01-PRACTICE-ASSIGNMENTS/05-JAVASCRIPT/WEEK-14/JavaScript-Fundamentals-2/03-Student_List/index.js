// Function to check is a given student passed or not ------>

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 98 },
    { name: "David", score: 67 },
    { name: "Eva", score: 73 },
    { name: "Frank", score: 89 },
    { name: "Grace", score: 94 },
    { name: "Hank", score: 76 },
    { name: "Ivy", score: 81 },
    { name: "Jack", score: 88 },
];

function isPassed(anyName){
    let Passed = false
    let exists = false
    
    for (const element of students) {
        if (element.hasOwnProperty("name") && element.hasOwnProperty("score")) {
            if (element.name === anyName){
                exists = true
                if (element.score > 90) {
                    Passed = true
                }
            }
        }
    }

    if (Passed && exists) {
        console.log(`Congratulations! ${anyName}, You have cleared the exam!`);
    } else if (!Passed && exists) {
        console.log(`Sorry! You have not cleared the exam.`);
    } else {
        console.log("Invalid user!!");
    }
}

isPassed("Ivy")
isPassed("Charlie")
isPassed("Bob")
isPassed("Grace")
isPassed("Jack")
isPassed("")