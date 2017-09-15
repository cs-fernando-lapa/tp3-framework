import angular from 'angular';
import categoriaModule from './categoria/categoria';
import tarefaModule from './tarefa/tarefa';
import homeModule from './home/home';
import addCategoriaModule from './addCategoria/addCategoria';
import respostaEmailModule from './respostaemail/respostaemail';




let componentModule = angular.module('app.components', [
  categoriaModule,
  tarefaModule,
  homeModule,
  addCategoriaModule,
  respostaEmailModule,
])

.name;

export default componentModule;
