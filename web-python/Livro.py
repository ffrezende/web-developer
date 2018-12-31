# -*- coding: utf-8 -*-
class Livro():
    def __init__(self, livros):
        self.livros = livros

    def __str__(self):
        return self.livros

    def livros_por_autor(self, autor):
        print(self.livros[autor])
