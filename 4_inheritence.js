//constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//get summary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//Inherite prototype
Magazine.prototype = Object.create(Book.prototype);

//instantiate Magazine object
const mag1 = new Magazine("Mag one", "John Doe", "2018", "Jan");

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);
