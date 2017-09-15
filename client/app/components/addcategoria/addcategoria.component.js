import template from './addCategoria.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './addCategoria.controller';
import './addCategoria.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let addCategoriaComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default addCategoriaComponent;
