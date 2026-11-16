interface Conta {
    depositar(valor: number): void
    sacar(valor: number): void
    consultar(): number
}

class ContaCorrente implements Conta{
    constructor(private saldo: number){}

    depositar(valor: number): void {
        this.ValidarValor(valor)
        this.saldo += valor
    }

    sacar(valor: number): void {
        this.ValidarValor(valor)
        if(valor > this.saldo){
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }

    consultar(): number {
        return this.saldo
    }

    private ValidarValor(valor: number):void {
        if(valor <= 0){
            throw new Error("O valor deve ser maior que zero")
        }
    }
}

let nova = new ContaCorrente(0)

try{
    nova.depositar(100)
    nova.sacar(20)
    console.log(nova.consultar())
    nova.sacar(85)
}catch (erro: any){
    console.log(erro.message)
}