# AluraGeek

O **AluraGeek** é um site desenvolvido para a exibição e gerenciamento de produtos de uma loja geek. O projeto utiliza **JSON Server** para simular uma API e **JavaScript** para manipular os dados dos produtos de forma dinâmica.

## Funcionalidades

- **Exibição de Produtos**: Os produtos são carregados dinamicamente a partir de uma API local (JSON Server).
- **Adição de Produtos**: É possível adicionar novos produtos através de um formulário.
- **Remoção de Produtos**: Os produtos podem ser removidos ao clicar no ícone da lixeira.
  
## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização da página.
- **JavaScript**: Manipulação do DOM e integração com a API.
- **JSON Server**: API simulada para gerenciamento de dados.
  
## Como Rodar Localmente

### Pré-requisitos

1. [Instalar Node.js](https://nodejs.org/) (requerido para rodar o servidor local e as dependências).
2. Instalar o **JSON Server** globalmente:

    ```bash
    npm install -g json-server
    ```

### Passos

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/AdrianaGomesPimenta/alura-geek
    ```

2. **Instalar as dependências (caso tenha um arquivo `package.json`):**

    ```bash
    npm install
    ```

3. **Rodar o JSON Server:**

    No diretório do projeto, rode o comando abaixo para iniciar a API local:

    ```bash
    json-server --watch db.json
    ```

4. **Abrir o projeto no navegador:**

    Agora, você pode abrir o arquivo `index.html` no seu navegador para ver o site funcionando localmente. A API estará disponível em `http://localhost:3000/`.

### Estrutura do Projeto

- `index.html`: Página principal do site.
- `style.css`: Arquivo de estilo da página.
- `js/script.js`: Script para interação com a API e manipulação do DOM.
- `db.json`: Arquivo que armazena os dados dos produtos na API.

## Contribuições

Se você deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua modificação:
   
    ```bash
    git checkout -b minha-feature
    ```

3. Faça as modificações e commit:
   
    ```bash
    git commit -m 'Adiciona nova funcionalidade'
    ```

4. Envie as alterações para o seu fork:
   
    ```bash
    git push origin minha-feature
    ```

5. Abra um pull request no repositório original.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Autor

Feito com ❤️ por **Adriana**.

