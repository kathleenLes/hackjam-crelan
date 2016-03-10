import bookFactory from './../services/bookservice.js'

BookListController.$inject = [bookFactory];

export default function BookListController(BookFactory) {

      BookFactory.getBooks()
        .then(function(books){
          this.books = books;
        }.bind(this));

    }

