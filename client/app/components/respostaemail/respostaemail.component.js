import template from './respostaEmail.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './respostaEmail.controller';
import './respostaEmail.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let respostaEmailComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default respostaEmailComponent;
