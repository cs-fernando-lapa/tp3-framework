import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addCategoriaComponent from './addCategoria.component';
import controller from './addCategoria.controller.js'


let addCategoriaModule = angular.module('addCategoria', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('addCategoria', {
      url: '/addCategoria',
      component: 'addCategoria',
    });
})

.component('addCategoria', addCategoriaComponent)

.name;

export default addCategoriaModule;
