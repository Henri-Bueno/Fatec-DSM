interface TemNome {
    nome: string;
}

function exibirNome<T extends TemNome>(objeto: T): void {
    console.log(objeto.nome);
}

exibirNome({
    nome: "João",
    idade: 20,
});

exibirNome({
    nome: "Maria",
    cidade: "São Paulo",
});


// 1. Qual é o objetivo da restrição T extends TemNome?
//
// T extends TemNome restringe o tipo genérico para que o objeto
// tenha pelo menos a propriedade nome, que deve ser uma string.


// 2. Por que as duas chamadas da função estão corretas?
//
// As duas possuem a propriedade nome com um valor do tipo string.
// As propriedades idade e cidade também podem existir,
// pois T pode possuir outras propriedades além das exigidas por TemNome.


// 3. A chamada a seguir está correta ou incorreta? Justifique.
//
// Incorreta. O objeto possui apenas a propriedade idade,
// mas a função exige que o objeto tenha pelo menos a propriedade
// nome com um valor do tipo string.

// exibirNome({
//     idade: 30,
// });

