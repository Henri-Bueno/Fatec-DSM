class PilhaVaziaError extends Error {
    constructor ()
    {super("a pilha esta vazia"),
        this.name = "PilhaVazia"
    }

    
}

interface Pessoa {
    nome: string,
    idade: number
}

interface Aluno extends Pessoa {
    ra: number
}

interface Professor extends Pessoa {
    cpf: number
}

class Stack {
    private static individuos: Pessoa[] = []


    static push(individuo: Pessoa): void {
        this.individuos.push(individuo)
    }

    static pop(): Pessoa | undefined {

        if(this.isEmpty()){
            throw new PilhaVaziaError
        }

       return this.individuos.pop()
    }

    static peek(): Pessoa | undefined {
        
        if(this.isEmpty()){
            throw new PilhaVaziaError
        }
        return this.individuos[this.individuos.length-1]
    }

    static isEmpty(): boolean {
        return this.individuos.length === 0
    }
    
    static size(): number {
        return this.individuos.length
    }

}

let pilha = new Stack

try {
    Stack.push({ nome: "Ana", idade: 20 });

    console.log(Stack.peek());
    console.log(Stack.size());
    console.log(Stack.pop());
    console.log(Stack.pop());

} catch (erro) {
    if (erro instanceof PilhaVaziaError) {
        console.log(erro.message);
    } else {
        throw erro;
    }
}