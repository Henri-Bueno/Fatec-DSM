interface Entidade {
    id: number;
}

class Repositorio<T extends Entidade> {
    private dados: T[] = [];

    public adicionar(item: T): void {
        this.dados.push(item);
    }

    public listar(): T[] {
        return this.dados;
    }
}

interface Aluno extends Entidade {
    nome: string;
    curso: string;
}

interface Disciplina extends Entidade {
    descricao: string;
    cargaHoraria: number;
}

const um = new Repositorio<Aluno>();

um.adicionar({
    id: 1,
    nome: "João",
    curso: "ADS",
});

// 1. A interface Entidade funciona como um contrato/base comum.
// Tudo que for uma Entidade precisa possuir um id do tipo number.
// Aluno e Disciplina utilizam esse contrato.

// 2. T extends Entidade significa que o tipo T utilizado pelo
// Repositorio precisa ser compatível com Entidade.
// Ou seja, T precisa possuir pelo menos a propriedade id: number.
// Porém, pode possuir outras propriedades.

// 3. Aluno pode ser utilizado porque ele extends Entidade.
// Portanto, Aluno possui a propriedade id: number e satisfaz
// a restrição T extends Entidade.
//
// Quando fazemos Repositorio<Aluno>, o T passa a ser Aluno.
// Assim, o repositório armazena objetos do tipo Aluno,
// ou seja, dados é um Aluno[].