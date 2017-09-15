import angular from 'angular';
import uiRouter from 'angular-ui-router';
import respostaEmailComponent from './respostaEmail.component';
import controller from './respostaEmail.controller.js'


let respostaEmailModule = angular.module('respostaEmail', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('respostaEmail', {
      url: '/respostaemail',
      component: 'respostaEmail',
    });
})

.component('respostaEmail', respostaEmailComponent)

.name;

export default respostaEmailModule;
