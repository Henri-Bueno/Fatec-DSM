interface Pessoa {
    nome: string,
    idade: number
}

interface Aluno extends Pessoa {
    ra: number
}

interface Professor extends Pessoa {
    disciplina: string
}

class PilhaVaziaError extends Error {
    constructor(){super("A pilha está vazia.")
        this.name = "PilhaVaziaError"
    }
}

class CadastroPessoa {
    private static pessoas: Map<string, Pessoa> = new Map()

    static registrar(codigo: string, pessoa: Pessoa): void{
        if(this.pessoas.has(codigo)){
            throw new Error("já esta registrado")
        }
        this.pessoas.set(codigo, pessoa)
    }

    static buscar(codigo: string): Pessoa {
        const pessoa = this.pessoas.get(codigo)

        if (pessoa === undefined){
            throw new Error("Pessoa não cadastrada")
        }
        else{
            return pessoa
        }
    }
}

class Stack {
    private static individuos: Pessoa[] = [] 
    
    static push(pessoa: Pessoa): void{
        this.individuos.push(pessoa)
    }

    static size(): number {
        return this.individuos.length
    }

    static isEmpty(): boolean{
        return this.individuos.length === 0
    }

    static peek(): Pessoa {
    const pessoa = this.individuos[this.individuos.length - 1];

    if (pessoa === undefined) {
        throw new PilhaVaziaError();
    }

    return pessoa;
    }

    static pop(): Pessoa {
        const pessoa = this.individuos[this.individuos.length - 1]

        if(pessoa === undefined){
            throw new PilhaVaziaError()
        }
        this.individuos.pop()
        return pessoa
    }

}
