# -*- coding: utf-8 -*-
class Biblioteca():
    def __init__(self, titulo, ano, autores):
        self.titulo = titulo    
        self.ano = ano  
        self.autores = autores

    def __str__(self):
        return self.lastName

    @property
    def titulo(self):
        return self.titulo
        
    @titulo.setter
    def titulo(self,val):
        if not val:
            raise ValueError("Erro: não é possível salário negativo")
        self._titulo = val

    def teste(self):
        print('ratatuli')