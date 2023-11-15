class Author{

    _name;
    _birthYear;
    _nationality;
    
    constructor(name,birthYear,nationality){
        this._name=name;
        this._birthYear=birthYear;
        this._nationality=nationality;
    }
    
    }
    
    class Book{
    
        _title;
        _authors;
        _pages;
        _noOfBooks;
       
    
        constructor(title,authors,pages,noOfBooks){
    
            this._title=title;
            this._authors=authors;
            this._pages=pages;
            this._noOfBooks=noOfBooks
        }
    
    }
    class Catalog {
        _catalog;
      
        constructor() {
          this._catalog = new Map();
        }
      
        addToCatalog(topic, book) {
          if (!this._catalog.has(topic)) {
            this._catalog.set(topic, []);
          }
          this._catalog.get(topic).push(book);
        }
      
        getBooksByTopic(topic) {
          return this._catalog.get(topic) || [];
        }
      }


      class Library {
        _books;
        _catalog;
      
        constructor() {
          this._books = [];
          this._catalog = new Catalog();
        }
      
        addBook(book) {
          this._books.push(book);
          if (book._topic) {
            this._catalog.addToCatalog(book._topic, book);
          }
        }
    }



      const author1=new Author('J.D. Salinger', 1919, 'American');
      const author2=new Author('RavindharnathTagore', 1908, 'Indian');
    
    
      const book1 = new Book('The Catcher in the Rye', [author1], 224);
    const book2 = new Book('To Kill a Mockingbird', [author2], 281);
    const book3 = new Book('Joint Book', [author1, author2], 400);
    book3._topic = 'Classic'; 

    const library1=new Library();
    library1.addBook(book1);
    library1.addBook(book2);
    library1.addBook(book3);
    // library1.addBook(book3);

    const getByTopic=library1._catalog.getBooksByTopic("Classic");
   console.log( library1._catalog.getBooksByTopic('Classic'));
    
    // console.log(book1._title, book1._authors[0]._name, book1._authors[0]._nationality, book1._pages);
    // console.log(book2._title, book2._authors[0]._name, book2._authors[0]._nationality, book2._pages);