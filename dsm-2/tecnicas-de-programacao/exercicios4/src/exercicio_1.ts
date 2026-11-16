type Operacao = (a: number, b: number) => number;
function somar(a: number, b: number): number {
return a + b;
}
function multiplicar(a: number, b: number): number {
return a * b;
}
function operar(valores: any[], operacao: Operacao): number {
    let total:any = valores[0];
for (let i = 1; i < valores.length; i++) {
total = operacao(total, valores[i]);
}
return total;
}
const numeros = [4, 8, 5, 2];
console.log(`Somatório: ${operar(numeros, somar)}`);
console.log(`Produto: ${operar(numeros, multiplicar)}`);
console.log(`Maior valor: ${operar(numeros, (a:number,b:number)=>a > b?a:b )}`);