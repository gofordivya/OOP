//object literals
const book1 = {
  title: "Book One",
  author: "John Dane",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: "Book two",
  author: "Jane Dane",
  year: "2015",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book1.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));
