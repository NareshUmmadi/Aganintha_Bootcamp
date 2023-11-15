

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

}



const library1=new Library();

console.log(library1);

