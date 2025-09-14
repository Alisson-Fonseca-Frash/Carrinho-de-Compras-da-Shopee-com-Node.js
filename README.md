# Carrinho de Compras da Shopee com Node.js

Criar um carrinho de compras baseado no carrinho de compras da Shopee, aonde o carrinho armazene itens e faça o cálculo de sub-itens automaticamente.

## Dominio da aplicação: Carrinho de compras

## As entidades representadas

### *Cart.js = Carrinho*

* Acidionar item no carrinho
* Deletar item do carrinho
* Remover um item
* Calcular o total

### Item.js = Itens

* Criar item com subtotal certo


# 🛒 Carrinho de Compras Interativo



Este é um projeto simples em \*\*Node.js\*\* que simula um carrinho de compras interativo, inspirado no fluxo de compra da Shopee. Ele utiliza uma interface de linha de comando (CLI) para permitir ao usuário adicionar, remover e gerenciar itens.



\## 🚀 Como Executar



Para rodar a aplicação, siga os passos abaixo:



1\.  Clone este repositório ou baixe os arquivos para o seu computador.

2\.  Navegue até o diretório principal do projeto (onde está a pasta `src`).

3\.  Acesse a pasta de código-fonte:

&nbsp;   ```bash

&nbsp;   cd src

&nbsp;   ```

4\.  Execute a aplicação usando o Node.js:

&nbsp;   ```bash

&nbsp;   node main.js

&nbsp;   ```



## 📋 Funcionalidades



O projeto oferece as seguintes funcionalidades principais:



\* \*\*Adicionar Item\*\*: Permite adicionar produtos pré-definidos ao carrinho.

\* \*\*Remover Item\*\*: Permite remover um item do carrinho pelo seu ID.

\* \*\*Visualizar Carrinho\*\*: Exibe todos os itens, quantidades e o valor total da compra.

\* \*\*Esvaziar Carrinho\*\*: Limpa todos os itens do carrinho.



## 📁 Estrutura do Projeto



O código está organizado em módulos para facilitar a manutenção e a escalabilidade:



*   `main.js` : O arquivo principal que inicializa a aplicação e gerencia a interface com o usuário.

*   `carrinho.js` : Contém a classe `CarrinhoDeCompras` e toda a lógica de gerenciamento dos itens.

*   `produto.js` : Contém a classe `Produto` que define a estrutura de cada item.



---

