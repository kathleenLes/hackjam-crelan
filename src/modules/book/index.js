import angular from 'angular';
import booksComponent from './list/booklistComponent';
import bookDetailsComponent from './details/bookDetailsComponent';
import bookAddComponent from './add/bookAddComponent';

export default angular.module('book', [booksComponent, bookDetailsComponent, bookAddComponent]).name;
