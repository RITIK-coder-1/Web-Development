// Function to check if a user is present in a list ------> 



const list1 = [ "Ritik", "Bijay", "Mithun" ]
const list2 = [ "Sonali", "Sunena", "Sushma" ]

const isUserPresent = (list, username) => {
    if (list.includes(username)){
        return `Yes, ${username} is present in the list`
    } else {
        return `${username} is not present in the list`
    }
}

console.log(isUserPresent(list1, "Mithun"));
console.log(isUserPresent(list2, "Ritik"));
