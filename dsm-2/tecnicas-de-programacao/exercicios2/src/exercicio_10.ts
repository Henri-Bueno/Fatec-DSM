function criarEstado<T>(valorInicial: T): [() => T, (novoValor: T) => void] {
    let valor = valorInicial;

    function obterValor(): T {
        return valor;
    }

    function atualizar(novoValor: T): void {
        valor = novoValor;
    }

    return [obterValor, atualizar];
}

const [nome, setNome] = criarEstado("Ana");

const [idade, setIdade] = criarEstado(20);

console.log(`Antes: ${nome()}, ${idade()}`);

setNome("Ana Silva");
setIdade(21);

console.log(`Após: ${nome()}, ${idade()}`);

// 1. O parâmetro genérico T serve para controlar o tipo utilizado
// pelo estado.
//
// O tipo de T é definido a partir do valor inicial passado para
// criarEstado. Se o valor inicial for uma string, T será string.
// Se for um number, T será number.
//
// Dessa forma, o mesmo tipo é mantido no valor armazenado,
// na função que obtém o valor e na função que atualiza o valor.

// 2. O retorno foi definido como uma tupla porque ela possui duas
// posições com tipos específicos.
//
// Posição 0 → uma função que não recebe parâmetros e retorna T.
// Posição 1 → uma função que recebe um valor do tipo T e não retorna
// nenhum valor.
//
// Assim, as duas funções podem ser separadas em variáveis por
// destruturação:
//
// const [nome, setNome] = criarEstado("Ana");
//
// nome recebe a função obterValor.
// setNome recebe a função atualizar.

// 3. Como "Ana" é uma string, T é inferido como string.
//
// nome → () => string
// setNome → (novoValor: string) => void
//
// nome não é uma string diretamente. Ele é uma função que retorna
// uma string.

// 4. Como 20 é um number, T é inferido como number.
//
// idade → () => number
// setIdade → (novoValor: number) => void
//
// idade não é um number diretamente. Ela é uma função que retorna
// um number.

// 5. As chamadas nome() e idade() são necessárias porque as
// variáveis nome e idade armazenam funções, e não os valores
// diretamente.
//
// nome → função obterValor
// nome() → executa a função e retorna o valor armazenado.
//
// idade → função obterValor
// idade() → executa a função e retorna o valor armazenado.
//
// Portanto, nome() e idade() permitem obter os valores atuais
// armazenados no estado.

