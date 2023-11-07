//prototypes
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //get summary
  Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
//get Age
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};
//Revise/Change year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};
//instatiate an object
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Joe Doe", "2015");
console.log(book2);
book2.revise("2023");
console.log(book2);
