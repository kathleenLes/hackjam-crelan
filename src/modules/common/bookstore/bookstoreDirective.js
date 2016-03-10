import angular from'angular';
import bookstoreTemplate from './bookstore.html';
//import navbar from './../nav/navBarDirective';

  function bookstoreDirective(){
    return {
      restrict: 'EA',
      template: bookstoreTemplate
    };
  }

let module = angular.module('common.shell', [/*navbar*/]).directive('bookstore', bookstoreDirective);
export default module.name;

