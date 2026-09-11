# Exemplo de definição de um número par de modo recursivo
#
# Autor: Fabrício Galende marques de carvalho


class NumeroImparPositivo:
    def n_esimo_impar(self, n):
        if n == 1:
            return 1
        else:
            return 2 + self.n_esimo_impar(n - 1)


