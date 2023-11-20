const LoggerMixin={
    log(message){
        console.log(`[LOG]  ${message}`);
    }
}



 class Book{
    
    _title;
    _authors=[];
    _publicationDate
    _status;
   

    constructor(title,authors,publicationDate){

        this._title=title;
        this._authors=authors;
        this._publicationDate=publicationDate;
        this._status='available';
       this.logBookCreation();

    }


    logBookCreation(){
     
        const messsage=`New Book is created-Title: ${this._title}, Authors: ${this._authors.join(', ')}, Publication Date: ${this._publicationDate}`;
       LoggerMixin.log(messsage);

    }

    getStatus(){
        return this._status;
    }


    updateStatus(newStatus){

        this._status=newStatus;
    }

}

class Library{

    _books;
    _borrowers;

    constructor(){
        this._books=[];
       this._borrowers=[];
    }


    addBook(book){
   this._books.push(book);

   this.logBookAddition(book);
    }

    logBookAddition(book) {
        const message = `Book added to the library - Title: ${book._title}, Authors: ${book._authors.join(', ')}`;
        LoggerMixin.log(message);
      }

      borrowBook(title, borrower) {
        const book = this._books.find(book => book._title === title && book.getStatus() === "available");
    
        if (book) {
          book.updateStatus("borrowed");
    
          // Using the Logger mixin to log book borrowing
          this.logBookBorrowing(book, borrower);
    
          return book;
        } else {
          console.log(`Book with title "${title}" is not available for borrowing.`);
          return null;
        }
      }
    
      logBookBorrowing(book, borrower) {
        const message = `Book borrowed - Title: ${book._title}, Borrower: ${borrower}`;
        LoggerMixin.log(message);
      }
}




const book1 = new Book('The Catcher in the Rye', ['J.D. Salinger','wilson thomus'], '1951-07-16');
const book2 = new Book('To Kill a Mockingbird', ['Harper Lee'], '1960-07-11');

const library = new Library();


library.addBook(book1);
library.addBook(book2);

library.borrowBook('The Catcher in the Rye', 'John Doe');



// const borrowbook=library.borrowBook("The Catcher in the Rye");

// console.log(borrowbook);

// console.log(library.borrowBook("The Catcher in the Rye"));




