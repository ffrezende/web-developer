# -*- coding: utf-8 -*-
from Autor import Autor
from Biblioteca import Biblioteca
from Livro import Livro

autor = Autor("Fabricio", "Fraga","1994")
print(autor.nome_como_citado())

biblioteca = Biblioteca("Narnia", "2001", {"Narnia","Rei Artur"})
#biblioteca.titulo('Rei Leao')

dicionario = {}
dicionario['fabricio'] = {"Narnia","Rei Artur"}
livros = Livro(dicionario)

livros.livros_por_autor('fabricio')