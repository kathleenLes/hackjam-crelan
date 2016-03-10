BookAddController.$inject = ['BookFactory'];

export default function BookAddController(BookFactory) {

    function addBook() {
      BookFactory.addBook(this.book);
    }

    this.addBook = addBook;
  }


