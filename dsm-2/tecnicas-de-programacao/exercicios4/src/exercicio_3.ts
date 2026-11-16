type Notificacao = () => void;
function validarAluno(nota:number, frequencia:number, ok:Notificacao, nok:Notificacao, ex: Notificacao){
if( frequencia < 0.75 || (frequencia >= 0.75 && nota < 4)){
nok();
} else {
    if(frequencia >= 0.75 && nota >= 4 && nota < 6){
        ex()
    }else{
ok();
}
}
}

function exame(){console.log("ta de exame")}
function aprovar(){
console.log("Você está aprovado!");
}
function reprovar(){
console.log("Você está reprovado!");
}
validarAluno(5,0.8,aprovar,reprovar, exame); // Você está reprovado!
validarAluno(6,0.7,aprovar,reprovar, exame); // Você está reprovado!
validarAluno(6,0.8,aprovar,reprovar, exame); // Você está aprovado!
validarAluno(5,0.7,aprovar,reprovar, exame); // Você está reprovado!
validarAluno(5,0.8,aprovar,reprovar, exame); // Você está reprovado!