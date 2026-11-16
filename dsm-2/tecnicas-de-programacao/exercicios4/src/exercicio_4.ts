type Operacao = (valor: number) => number;

function calcularValorFinal(
  valorInicial: number,
  operacoes: Operacao[],
): number {
  if (operacoes.length === 0) {
    return valorInicial;
  }
  let valor = valorInicial;
  for (let i = 0; i < operacoes.length; i++) {
    const operacaoAtual = operacoes[i];

    if (operacaoAtual !== undefined) {
      valor = operacaoAtual(valor);
    }
  }

  return valor;
}

let aplicarDesconto = (valor: number) => valor - (valor * 10) / 100;
let adicionarFrete = (valor: number) => valor + 20;
let aplicarImposto = (valor: number) => valor + (valor * 5) / 100;

let operacoes1: Operacao[] = [aplicarDesconto, adicionarFrete, aplicarImposto, (valor:number) => valor - 15]
let preco1: number = calcularValorFinal(200, operacoes1)
console.log(preco1)

let operacoes2: Operacao[] = [ adicionarFrete, aplicarDesconto, aplicarImposto]
let preco2: number = calcularValorFinal(200, operacoes2 )
console.log(preco2)