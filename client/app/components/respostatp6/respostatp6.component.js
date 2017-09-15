import template from './respostatp6.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './respostatp6.controller';
import './respostatp6.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let respostatp6Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default respostatp6Component;
