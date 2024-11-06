# Projeto Loja de Produtos de Tecnologia

Autores: **Rafael Aguilar e Daniel Costa**

Este repositório contém o projeto **Loja de Produtos de Tecnologia**, desenvolvido para demonstrar o gerenciamento completo de um catálogo de produtos usando uma API RESTful. O projeto possui uma aplicação para web e uma para mobile, com funcionalidades para listagem, adição, edição (completa e parcial) e exclusão de produtos.

## Tecnologias Utilizadas
- **Backend (API RESTful)**: Implementado em PHP para manipulação dos dados dos produtos.
- **Frontend Web**: Desenvolvido com HTML, CSS e JavaScript.
- **Frontend Mobile**: Desenvolvido com React Native.
- **Interceptador**: Um interceptador foi implementado para detectar automaticamente se o acesso é feito via web ou mobile, direcionando o usuário à aplicação adequada.

## Estrutura do Projeto
- **Backend**: `projetoLoja/loja` - Contém os arquivos da API para gerenciamento dos produtos.
- **Frontend Web**: `lojaDKTP` - Contém os arquivos HTML, CSS e JavaScript para a interface web.
- **Frontend Mobile**: `lojaReactNative` - Contém o código React Native para a interface mobile, incluindo componentes de navegação e renderização de lista de produtos.

## Funcionalidades da API

A API implementa os métodos HTTP principais para gerenciamento de produtos:

- **GET**: Para listagem de todos os produtos.
- **POST**: Para adicionar um novo produto ao catálogo.
- **PUT**: Para edição completa de um produto.
- **PATCH**: Para edição parcial de um produto.
- **DELETE**: Para remover um produto do catálogo.

Cada um desses métodos é implementado tanto na aplicação web quanto na aplicação mobile.

---

