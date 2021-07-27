<a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

## 🛠 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/2)

## :closed_book: Instalação

### 🎲 Rodando o Back End

```bash
# Clone este repositório
$ git clone https://github.com/FeSilva-dev/Ideafix-notes.git

# Vá para o backend
$ cd notes-backend

# Instale as dependências
$ yarn install

# Execute a API
$ yarn run dev

# O servidor inciará na porta 3333 - url <http://localhost:3333>
```

### API's

#### NotesApi
- Criar uma nota
  - Método `POST`
  - URL `/notes/create`
  - Body
  ```
  {
    "title": "Titulo da nota",
    "body": "Corpo da nota"
  }
  ```
  
- Listar todas as notas
    - Método `GET`
    - URL `/notes/show`

- Deletar uma nota pelo ID
    - Método `DELETE`
    - URL `/notes/delete/:id`