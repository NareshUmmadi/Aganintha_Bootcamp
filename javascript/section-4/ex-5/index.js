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


    constructor(title,author,pages,noOfBooks,topic="General"){

        super(title,author,noOfBooks,noOfBooks);
        this._topic=topic;

    }


}


const specializedBook = new SpecializedBook('The Art of Programming', 'Donald Knuth', 700,25, 'Computer Science');

const specializedBook2 = new SpecializedBook('The Art of drawing', 'Knuth', 700,25,);

console.log("specializedBook\n"+specializedBook._author,specializedBook._title,specializedBook._pages,specializedBook._topic);

console.log("With generalTopic\n"+specializedBook2._author,specializedBook2._title,specializedBook2._pages,specializedBook2._topic);