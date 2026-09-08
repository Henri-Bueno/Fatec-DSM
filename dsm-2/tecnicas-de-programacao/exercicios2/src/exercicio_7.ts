interface Pessoa {
    nome: string;
}
interface Funcionario {
    matricula: number;
}
interface Professor extends Pessoa, Funcionario {
    disciplina: string;
}
function cadastrarProfessor(professor: Professor) {
    console.log(professor);
}

cadastrarProfessor({nome: "Arley", matricula: 29, disciplina: "aquela la"});






