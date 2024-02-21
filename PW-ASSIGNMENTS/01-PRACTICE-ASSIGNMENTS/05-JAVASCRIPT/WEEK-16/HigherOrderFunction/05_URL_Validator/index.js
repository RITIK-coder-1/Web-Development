function isValidURL(url) {
  let pattern = /^(http|https):\/\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]+\.([a-zA-Z]{2,})$/

  if (pattern.test(url)) {
    console.log("The URL is valid.")
  } else {
    console.log("The URL is not valid.")
  }
}


isValidURL("http://example.com")
isValidURL("https://www.example.com")
isValidURL("ftp://example.com")
isValidURL("https://example")
