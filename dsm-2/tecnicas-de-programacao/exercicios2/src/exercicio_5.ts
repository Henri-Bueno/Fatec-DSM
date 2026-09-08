interface Par<K, V> {
    chave: K;
    valor: V;
}

const um: Par<number, string> = {
    chave: 1,
    valor: "João",
};

const dois: Par<string, boolean> = {
    chave: "admin",
    valor: true,
};

// 1. K e V são parâmetros de tipo genérico independentes.
// K define o tipo da propriedade "chave".
// V define o tipo da propriedade "valor".

// 2. Na variável "um":
// chave: number
// valor: string

// 3. Na variável "dois":
// chave: string
// valor: boolean

// 4. Incorreto.
// Par<number, string> exige que "chave" seja um number,
// mas "ABC" é uma string.
// O "valor" está correto, pois é uma string.

/* 
const p3: Par<number, string> = {
    chave: "ABC", // Erro: deveria ser number
    valor: "Maria",
}; 
*/

