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


class SpecializedBook extends Book{
     
    _topic;


    constructor(title,author,pages,noOfBooks,topic){

        super(title,author,noOfBooks,noOfBooks);
        this._topic=topic;

    }


}
const regularBook = new Book('The Catcher in the Rye', 'J.D. Salinger', 224,30);

const specializedBook = new SpecializedBook('The Art of Programming', 'Donald Knuth', 700,25, 'Computer Science');

console.log("regularBook\n"+regularBook._title,regularBook._author,regularBook._pages);
console.log("specializedBook\n"+specializedBook._author,specializedBook._title,specializedBook._pages,specializedBook._topic);