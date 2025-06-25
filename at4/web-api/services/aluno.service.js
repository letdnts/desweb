const AlunoModel = require("../models/aluno.model");
const alunos = require("../data/alunos");

let id = 2;

class AlunoService {
  static listar() {
    return alunos;
  }

  static buscarPorId(idParam) {
    return alunos.find(aluno => aluno.id === parseInt(idParam));
  }

  static cadastrar(data) {
    const novoAluno = new AlunoModel(data.nome, data.curso, data.ira);
    novoAluno.id = id++;
    alunos.push(novoAluno);
    return novoAluno;
  }

  static atualizar(idParam, data) {
    const index = alunos.findIndex(aluno => aluno.id === parseInt(idParam));
    if (index !== -1) {
      alunos[index].nome = data.nome;
      alunos[index].curso = data.curso;
      alunos[index].ira = data.ira;
      return alunos[index];
    }
    return null;
  }

  static deletar(idParam) {
    const index = alunos.findIndex(aluno => aluno.id === parseInt(idParam));
    if (index !== -1) {
      const deletado = alunos.splice(index, 1);
      return deletado[0];
    }
    return null;
  }
}

module.exports = AlunoService;
