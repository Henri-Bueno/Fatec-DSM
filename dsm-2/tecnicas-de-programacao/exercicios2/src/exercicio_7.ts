class Caixa<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    public obterValor(): T {
        return this.valor;
    }
}

interface Pessoa {
    nome: string;
    idade: number;
}

interface Produto {
    codigo: number;
    descricao: string;
}

const um = new Caixa<Pessoa>({
    nome: "Ana",
    idade: 21
});

const dois = new Caixa<Produto>({
    codigo: 12,
    descricao: "PC"
});

// 1. O parâmetro genérico T define o tipo que será utilizado
// pela classe Caixa. Ele determina o tipo do atributo "valor"
// e também o tipo aceito pelo construtor e retornado por obterValor().

// 2. Na variável "um", T é definido como Pessoa.
// Portanto, o atributo "valor" segue a estrutura da interface Pessoa:
// nome é string e idade é number.

// 3. Na variável "dois", T é definido como Produto.
// Portanto, o atributo "valor" segue a estrutura da interface Produto:
// codigo é number e descricao é string.

// 4. Correto.
// Caixa<number> define T como number.
// Dessa forma, o atributo "valor" deve ser um number,
// e o valor 100 atende a essa definição.

const quatro = new Caixa<number>(100);

// 8. T precisa satisfazer as duas estruturas ao mesmo tempo,
// pois o operador & representa uma interseção.
// Portanto, "dados" precisa possuir status e valid.

const cinco = new Caixa<{ status: "ok" | "nok" } & { valid: boolean }>({
    status: "nok",
    valid: true
});
