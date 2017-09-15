import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriaComponent from './categoria.component';

let categoriaModule = angular.module('categoria', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('categoria', {
      url: '/categoria',
      component: 'categoria'
    });
})

.component('categoria', categoriaComponent)

.name;

export default categoriaModule;
