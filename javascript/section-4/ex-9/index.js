class Book{
    
    _title;
    _authors;
    _pages;
    _status;
   

    constructor(title,authors,pages){

        this._title=title;
        this._authors=authors;
        this._pages=pages;
        this._status='available';
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

    constructor(){
        this._books=[];
    }

    addBook(book){
   this._books.push(book);
    }

    borrowBook(title){
     for(const book of this._books){
         if(book._title===title && book.getStatus()=== "available"){
            book.updateStatus('borrowed');
            return book;
         }
     }

     console.log(`Book with the Title "${title}"is not available for borrowing.`);
    return null;
    }

}


const library = new Library();

const book1 = new Book('The Catcher in the Rye', ['J.D. Salinger'],455);
const book2 = new Book('To Kill a Mockingbird', ['Harper Lee'],566);


library.addBook(book1);
library.addBook(book2);


const borrowbook=library.borrowBook("The Catcher in the Rye");

console.log(borrowbook);

console.log(library.borrowBook("The Catcher in the Rye"));

