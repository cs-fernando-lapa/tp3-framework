import angular from 'angular';
import homeModule from './home/home';
import categoriaModule from './categoria/categoria';
import contactsModule from './contacts/contacts';

let componentModule = angular.module('app.components', [
  homeModule,
  categoriaModule,
  contactsModule
])

.name;

export default componentModule;
