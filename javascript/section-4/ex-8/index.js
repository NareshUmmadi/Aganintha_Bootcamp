class Author {

    _name;
    _birthYear;
    _nationality;

    constructor(name, birthYear, nationality) {
        this._name = name;
        this._birthYear = birthYear;
        this._nationality = nationality;
    }

}

class Book {

    _title;
    _authors;
    _pages;



    constructor(title, authors, pages) {

        this._title = title;
        this._authors = authors;
        this._pages = pages;
    }

}

class FictionBook extends Book {

    _genre;

    constructor(title, authors, pages, genre) {
        super(title, authors, pages);
        this._genre = genre;
    }

    getGenre() {
        return this._genre;
    }

}

class NonFictionBook extends Book {

    _topic;


    constructor(title, authors, pages, topic) {
        super(title, authors, pages);
        this._topic = topic;
    }

    getTopic() {
        return this._topic
    }

}


const fictionAuthor = new Author('Fiction Author', 1980, 'Fictionland');
const fictionAuthor1 = new Author('Fiction Author1', 1938, 'Fictionland2');
const nonFictionAuthor = new Author('Non-Fiction Author', 1970, 'NonFictionville');

const fictionBook = new FictionBook('Epic Tale', [fictionAuthor,fictionAuthor1], 300, 'Adventure');
const nonFictionBook = new NonFictionBook('Scientific Journey', [nonFictionAuthor], 200, 'Science');

console.log(fictionBook);
console.log(nonFictionBook.getTopic()); 