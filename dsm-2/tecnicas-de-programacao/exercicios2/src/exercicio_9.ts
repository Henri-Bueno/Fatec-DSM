function criarPar<T>(valor1: T, valor2: T): T[] {
    return [valor1, valor2];
}

const um = criarPar(10, 20);

const dois = criarPar("João", "Maria");

const tres = criarPar(true, false);

// 1. O tipo inferido para "um" é number[].
// Os dois valores passados para a função são numbers,
// então o TypeScript infere T como number.

// 2. O tipo inferido para "dois" é string[].
// Os dois valores passados para a função são strings,
// então o TypeScript infere T como string.

// 3. O tipo inferido para "tres" é boolean[].
// Os dois valores passados para a função são booleans,
// então o TypeScript infere T como boolean.

// 4. O TypeScript consegue inferir automaticamente o tipo de T
// analisando os argumentos fornecidos na chamada da função.
//
// Como valor1 e valor2 utilizam o mesmo parâmetro genérico T,
// os tipos dos dois argumentos participam da inferência.
//
// Exemplo:
// criarPar(10, 20)
//
// valor1 -> number
// valor2 -> number
// T -> number
// retorno -> number[]
//
// O TypeScript faz essa análise antes da execução do programa,
// durante a verificação do código TypeScript.
//
// Depois que o código é transformado em JavaScript, o parâmetro
// genérico T não existe mais. A inferência de tipos é uma função
// do TypeScript para verificar a segurança dos tipos durante
// o desenvolvimento.