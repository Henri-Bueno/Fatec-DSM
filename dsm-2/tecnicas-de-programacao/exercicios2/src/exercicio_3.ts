interface Caixa<T> {
    valor: T;
}

const um: Caixa<number> = {
    valor: 100
};

const dois: Caixa<string> = {
    valor: "TypeScript"
};

const tres: Caixa<boolean> = {
    valor: true
};


// 1. O que representa o tipo genérico T na interface Caixa?
//
// T representa o tipo genérico que será definido em cada utilização
// da interface. Assim, podemos escolher qual será o tipo da propriedade
// valor em cada Caixa.


// 2. Qual é o tipo da propriedade valor em cada variável?
//
// um.valor -> number
// dois.valor -> string
// tres.valor -> boolean


// 3. Explique por que a mesma interface pode ser utilizada para
// armazenar números, textos e valores booleanos.
//
// A interface funciona como um contrato que define a estrutura do objeto.
// Como o tipo de valor é genérico (T), podemos definir diferentes tipos
// ao utilizar a interface, como number, string ou boolean.


// 4. A declaração abaixo está correta ou incorreta? Justifique.
//
// Incorreta. Foi definido Caixa<number>, então a propriedade valor
// deve ser do tipo number. Porém, "cem" é uma string.

// const quatro: Caixa<number> = {
//     valor: "cem"
// };
