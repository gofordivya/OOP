//Object of protos
const bookProto = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

//create Object
const book1 = Object.create(bookProto);
book1.title = "Book One";
book1.author = "John Doe";
book1.year = "2013";
console.log(book1);
