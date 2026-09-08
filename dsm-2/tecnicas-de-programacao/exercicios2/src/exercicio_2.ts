function primeiro<T>(lista: T[]): T {
    return lista[0]!;
}

const x = primeiro([10, 20, 30]);

const y = primeiro(["João", "Maria", "Pedro"]);

const z = primeiro([true, false, true]);


// 1. Qual é o papel do tipo genérico T na função primeiro?
//
// O T representa um tipo genérico. Quando a função é chamada,
// o TypeScript identifica qual é o tipo dos elementos da lista.
// Assim, a lista será formada por valores desse tipo e a função
// retornará um valor do mesmo tipo.


// 2. Qual será o tipo inferido para x, y e z?
//
// x -> number
// y -> string
// z -> boolean


// 3. Reescreva a chamada da função utilizando a especificação
// explícita do tipo genérico para obter o primeiro elemento
// da lista de números.

const explicito = primeiro<number>([10, 20, 30]);