function isValidLinkedInProfile(url) {
    let pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/?$/
  
    if (pattern.test(url)) {
      console.log("Valid LinkedIn profile URL.")
    } else {
      console.log("Not a valid LinkedIn profile URL.")
    }
}
  
isValidLinkedInProfile("https://www.linkedin.com/in/ritik-mahapatra/")  
isValidLinkedInProfile("https://www.linkedin.com/in/johndoe123")
isValidLinkedInProfile("https://www.linkedin.com/in/jane_smith")
isValidLinkedInProfile("https://www.linkedin.com/in/mark")
isValidLinkedInProfile("https://www.linkedin.com/in/invalid*profile")
isValidLinkedInProfile("https://www.linkedin.com/invalid-format")
  