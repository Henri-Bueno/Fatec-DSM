import {  menor_r } from "./maior_recursivo_model";

let a: number[] = [1, 4, 10, 20, -1];
console.log("Array original:");
console.log(a);
let menor = menor_r(a);
console.log("O menor número do array é: ", menor);

