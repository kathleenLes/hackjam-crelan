import angular from 'angular';
import ngRoute from 'angular-route';

let module = angular.module('bookstore.routes', [ngRoute]).config(RouteConfig);

export default module.name;

RouteConfig.$inject = ['$routeProvider'];

function RouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<cl-books></cl-books>'
    })
    .when('/books', {
      template: '<cl-books></cl-books>'
    })
    .when('/books/:id', {
      template: '<cl-book-detail></cl-book-detail>'
    })
    .when('/books/add', {
      template: '<cl-book-add></cl-book-add>'
    })
    .otherwise('/');
}
