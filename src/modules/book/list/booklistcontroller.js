BookListController.$inject = ['BookFactory'];

export default function BookListController(BookFactory) {

      BookFactory.getBooks()
        .then(function(books){
          this.books = books;
        }.bind(this));

    }

