

class Book{

    _title;
    _author;
    _pages;

    constructor(title,author,pages=0){
      
        if(!title  || !author){
           
            throw new Error("Title and Author is mandatory");

        }

        this._title=title;
        this._author=author;
        this._pages=pages;

    }



}


const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 224);
console.log(book1);

const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
console.log(book2);



