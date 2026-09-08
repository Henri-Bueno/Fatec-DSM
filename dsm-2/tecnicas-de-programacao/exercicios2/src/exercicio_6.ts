interface RespostaApi<T> {
    sucesso: boolean;
    dados: T;
}

interface Usuario {
    id: number;
    nome: string;
}

interface Produto {
    codigo: number;
    descricao: string;
}

const um: RespostaApi<Usuario> = {
    sucesso: true,
    dados: {
        id: 1,
        nome: "João",
    },
};

const dois: RespostaApi<Produto> = {
    sucesso: true,
    dados: {
        codigo: 100,
        descricao: "Notebook",
    },
};

// 1. O parâmetro genérico T define o tipo da propriedade "dados".
// Dessa forma, o tipo esperado para "dados" é determinado
// de acordo com o tipo passado para RespostaApi<T>.

// 2. Na variável "um", a propriedade "dados" é do tipo Usuario.
// Portanto, possui as propriedades id (number) e nome (string).

// 3. Na variável "dois", a propriedade "dados" é do tipo Produto.
// Portanto, possui as propriedades codigo (number) e descricao (string).

// 4. Incorreto.
// RespostaApi<Usuario> exige que "dados" seja do tipo Usuario,
// mas foi fornecido um objeto com a estrutura de Produto.
// Por isso, ocorre um erro de incompatibilidade de tipos.

/*
const quatro: RespostaApi<Usuario> = {
    sucesso: true,
    dados: {
        codigo: 10,
        descricao: "Mouse",
    },
};
*/

// 5. RespostaApi<{ ra: number }> exige que "dados"
// seja um objeto com a propriedade ra do tipo number.

const cinco: RespostaApi<{ ra: number }> = {
    sucesso: true,
    dados: {
        ra: 29,
    },
};

// 6. O operador | significa OU.
// O objeto pode seguir uma das estruturas definidas.
// Ele também pode possuir as duas propriedades.

const seis: RespostaApi<{ status: "ok" | "nok" } | { valid: boolean }> = {
    sucesso: true,
    dados: {
        status: "nok",
        valid: true,
    },
};

// 7. O operador & significa E.
// O objeto precisa seguir as duas estruturas ao mesmo tempo.
// Portanto, precisa possuir status e valid.

const sete: RespostaApi<{ status: "ok" | "nok" } & { valid: boolean }> = {
    sucesso: true,
    dados: {
        status: "nok",
        valid: true,
    },
};

