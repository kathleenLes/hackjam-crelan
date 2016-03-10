import angular from 'angular';
//import common from './modules/common/';
//import book from './modules/book/';
//import routes from './routes';

angular.module('bookstore', [/*common,*/ /*routes*//* book,*/]);

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document.body, ['bookstore']);
});

