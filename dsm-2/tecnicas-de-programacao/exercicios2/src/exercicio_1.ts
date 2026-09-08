function identidade(valor: any): any {
    return valor;
}

const a = identidade(10);
const b = identidade("Olá");
const c = identidade(true);


// 1 - O any faz o TypeScript perder a informação de tipo,
// deixando de verificar se as operações e atribuições
// são compatíveis com o tipo real do valor.


// 2 - Função genérica utilizando T.

const identidadeG = <T>(valor: T): T => valor

const d = identidadeG(10);      // number
const e = identidadeG("Olá");   // string
const f = identidadeG(true);   // boolean


// 3 - Os tipos são inferidos automaticamente:
// d → number
// e → string
// f → boolean


// 4 - O genérico mantém a relação entre o tipo que entra
// e o tipo que sai, garantindo segurança de tipos e
// permitindo que o TypeScript faça a inferência de T.