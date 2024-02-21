const books = [
    {
      author: "Haruki Murakami",
      bookName: "Kafka on the Shore",
      publicationYear: 2001
    },
    {
      author: "J.K. Rowling",
      bookName: "Harry Potter and the Goblet of Fire",
      publicationYear: 2008
    },
    {
      author: "Stephen King",
      bookName: "The Dark Tower: The Gunslinger",
      publicationYear: 2010
    },
    {
      author: "Chimamanda Ngozi Adichie",
      bookName: "Half of a Yellow Sun",
      publicationYear: 2012
    }
]

const filteredBooks = books.filter((ele) => {
    return ele.publicationYear >= 2010
})

const newBooks = filteredBooks.map((ele) => {
    const author = ele.author.toUpperCase()
    const book = ele.bookName
    const date = ele.publicationYear
    return {author, book, date}
})

console.log(newBooks);