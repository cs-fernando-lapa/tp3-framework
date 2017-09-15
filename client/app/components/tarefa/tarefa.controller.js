class TarefaController {
  constructor() {
    this.tarefas = [
      { nome: 'Varrer o quarto', addcategoria: 'Casa', feito: false },
      { nome: 'Lavar a louça', addcategoria: 'Casa', feito: true },
      { nome: 'Lavar as roupas', addcategoria: 'Casa', feito: false },
      { nome: 'Consertar a porta', addcategoria: 'Casa', feito: false },
      { nome: 'Terminar o relatório', addcategoria: 'Trabalho', feito: false },
      { nome: 'Estudar para a próxima reunião', addcategoria: 'Trabalho', feito: false },
      { nome: 'Enviar email sobre o problema', addcategoria: 'Trabalho', feito: false },
      { nome: 'Levar pó de café', addcategoria: 'Trabalho', feito: true },
      { nome: 'Comprar canetas novas', addcategoria: 'Trabalho', feito: true },
      { nome: 'Estudar Etapa 1', addcategoria: 'Faculdade', feito: true },
      { nome: 'Estudar Etapa 2', addcategoria: 'Faculdade', feito: true },
      { nome: 'Estudar Etapa 3', addcategoria: 'Faculdade', feito: false },
      { nome: 'Fazer TP1', addcategoria: 'Faculdade', feito: false }
    ]

    this.addcategorias = ['Casa', 'Trabalho', 'Faculdade'];

    this.plusaddcategoria = function(){
      this.addcategorias.push(this.addcategoria)
    }

    this.plusTarefa = function(){
      this.tarefas.push({
        nome:this.nome,
        addcategoria:this.seleciona,
        feito:false
      })
    }
  }
}

export default TarefaController;
