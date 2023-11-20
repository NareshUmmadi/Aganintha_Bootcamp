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
        _authors=[];
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
 
  //         const detailesOfBook=books.map(book=>({
  //             title:book._title,

  //             authors:book._authors.map(au=>({
                
  //               name:au._name,
  //               birthYear: au._birthYear,
  //               nationality:au._nationality
  //             })),
  //             pages: book._pages,
  //     noOfBooks: book._noOfBooks 
  //         }));
  //  return detailesOfBook;
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
    
    
      const book1 = new Book('The Catcher in the Rye', [author1], 224,25);
    const book2 = new Book('To Kill a Mockingbird', [author2], 281,30);
  const book3 = new Book('Joint Book', [author1,author2], 400,85);
  const book4 = new Book('Joint1 Book', [author1,author2], 256,45);
  const book5 = new Book('Joint2 Book', [author1,author2], 125,52);
  const book6 = new Book('Joint3 Book', [author1,author2], 100,30);
  
    book3._topic = 'Classic'; 
    book4._topic = 'Classic'; 
    book5._topic = 'Classic'; 
    book6._topic = 'Classic'; 
    book2._topic='general';

    const library1=new Library();
    library1.addBook(book1);
    library1.addBook(book2);
    library1.addBook(book3);
    library1.addBook(book4);
    library1.addBook(book5);
    library1.addBook(book6);
    // library1.addBook(book3);

    const getByTopic=library1._catalog.getBooksByTopic("Classic");
  //  console.log( library1._catalog.getBooksByTopic('general'));

  //  console.log(getByTopic);
  //  console.log(book3);

       getByTopic.forEach(book=>{
          console.log(`book-title::${book._title}`);
          console.log('authors:');
          book._authors.forEach(au=>{
            console.log(`Name: ${au._name}`);
            console.log(`Birth Year: ${au._birthYear}`);
            console.log(`Nationality: ${au._nationality}`);
            console.log('--------------');
          });
          console.log(`Pages: ${book._pages}`);
          console.log(`Number of Books: ${book._noOfBooks}`);
          console.log('====================================');
       });
    
    // console.log(book1._title, book1._authors[0]._name, book1._authors[0]._nationality, book1._pages);
    // console.log(book2._title, book2._authors[0]._name, book2._authors[0]._nationality, book2._pages);