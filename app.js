
// Import Library class, Book class, Audiobook class, Games class, Movies class, Music class

const { Book } = require("./Book")
const { Media } = require("./Media")

// Create instances of classes

let lotr = new Book("fellowship of the ring");

console.log(lotr);
console.log(lotr.name);
console.log(lotr.edition);

// Lord of the Rings as a instance of Book class

// Do things with those instances

// Create an instance of a Library
// add media instances into the Library instance

let libraryInstance = new Library();
libraryInstance.books.push(lotr);

// Log the data in the library
console.log(libraryInstance)

console.log(libraryInstance.books[0].name);