# Exemplo de definição por gênero e diferença
#
# Autor: Fabrício Galende Marques de Carvalho

from datetime import date

class Animal:
    def __init__(self, dtNascimento: date):
        self.dtNascimento = dtNascimento

class Cachorro(Animal):
    def __init__(self, dtNascimento: date, raca):
        super().__init__(dtNascimento)
        self.raca = raca

    def latir(self):
        print("Au au au au")

