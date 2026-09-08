type Pessoa = {
    nome: string;
}
type Funcionario = {
    matricula: number;
}
type Professor = Pessoa & Funcionario & {
    disciplina: string;
}
function cadastrarProfessor(professor: Professor) {
    console.log(professor);
}

cadastrarProfessor({nome: "Arley", matricula: 29, disciplina: "aquela la"});