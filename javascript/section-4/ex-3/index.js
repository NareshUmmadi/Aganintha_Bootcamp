

class Book{

    _title;
    _author;
    _pages;
    _noOfBooks

    constructor(title,author,pages,noOfBooks){

        this._title=title;
        this._author=author;
        this._pages=pages;
        this._noOfBooks=noOfBooks
    }
}

class Library{

   books=[];

   construtor(){
    this.books=[];
   }

    addBook(book){
      this.books.push(book);
   }


}

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 224,25);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281,20);

const library1=new Library();

library1.addBook(book1);
library1.addBook(book2);

console.log(library1.books);

