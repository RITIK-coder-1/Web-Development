// Program to check if any given string has unique characters or not ----------->

const uniqueString = (anyString) => {
    let isUnique = true
    for (let i = 0; i < anyString.length; i++) {
        for (let j = i + 1; j < anyString.length; j++) {
            if (anyString[i] === anyString[j]) {
                isUnique = false
                break; // stop the inner loop // to avoid furthur iteration after finding the common value 
            } 
        }    
        if (!isUnique){
            break; // stop the outer loop once the common value is found
        }  
    } 
    

    if (isUnique){
        console.log("This String has got unique characters!");
    } else {
        console.log("This String doesn't have all unique characters!");
    }
}

uniqueString("ritik")
uniqueString("sonali")
uniqueString("kkkk")
uniqueString("Jack")

// USING A SET ------------------->

const hasUniqueCharacters = (username) => {
const charSet = new Set();
      
for (let i = 0; i < username.length; i++) {
    if (charSet.has(username[i])) {
        return "The username does not have all unique characters!"; // If a character is already in the Set, it's not unique
    }
    charSet.add(username[i]);
    }
    
    return "The username has unique characters!"; // All characters are unique
}
        
const username1 = "ritik"
const username2 = "sonali"
const username3 = "kkkk"
const username4 = "Jack"

console.log(hasUniqueCharacters(username1));
console.log(hasUniqueCharacters(username2));
console.log(hasUniqueCharacters(username3));
console.log(hasUniqueCharacters(username4));