const myBooks = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 }
]

// funtion that takes a book and a callback ---->

const newList = (book, func) => {
    const newList = book.map(ele => ele.title)
    func(newList)
}

// callback function ---->

const callback = book => {
    const sortedBooks = book.sort((a, b) => a.localeCompare(b)) // sorts the list on the basis of alphabet
    console.log(sortedBooks);
}

newList(myBooks, callback)
