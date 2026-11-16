type Notificacao = (mensagem: string) => void;
function prepararPedido(nome: string, notificar: Notificacao): void {
notificar(`${nome} pedido recebido.`);
notificar(`${nome} pedido processado.`);
notificar(`${nome} pedido enviado.`);
}
function celular(mensagem: string): void {
console.log(`SMS: ${mensagem}`);
}
function mail(mensagem: string): void {
console.log(`E-mail: ${mensagem}`);
}
prepararPedido("Ana Maria", celular);
prepararPedido("Pedro Silva", mail);
prepararPedido("Carla Souza", (mensagem: string) => {console.log(`Chamada: ${mensagem}`)});