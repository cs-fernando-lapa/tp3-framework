import angular from 'angular';
import uiRouter from 'angular-ui-router';
import respostatp6Component from './respostatp6.component';
import controller from './respostatp6.controller.js'


let respostatp6Module = angular.module('respostatp6', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('respostatp6', {
      url: '/respostatp6',
      component: 'respostatp6',
    });
})

.component('respostatp6', respostatp6Component)

.name;

export default respostatp6Module;
