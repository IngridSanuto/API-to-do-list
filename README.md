# 📝 API To-Do List

Uma API RESTful desenvolvida em **Node.js** com **Express** e **Sequelize (SQLite)**, criada para gerenciar tarefas com categorização de forma organizada e eficiente.  
O projeto segue boas práticas de arquitetura e validação, ideal para estudo e portfólio.

---

## 🚀 Tecnologias Utilizadas
- **Node.js**  
- **Express.js**  
- **Sequelize ORM**  
- **SQLite**  
- **Nodemon** (para o ambiente de desenvolvimento)
- **Postman** (para testar as rotas)

---

## ⚙️ Funcionalidades Principais
### 🧩 Tarefas
- Criar novas tarefas com **validação de campos obrigatórios** (ex: título e status).  
- Definir o **status** da tarefa entre: `a fazer`, `em andamento` ou `concluido`.  
- Atualizar o status individualmente via **PATCH**.  
- Listar todas as tarefas ou **filtrar por status** (`/tarefas?status=concluido`).  
- Excluir tarefas específicas.  
- Vincular cada tarefa a uma **categoria existente** (relação 1:N).  

### 🗂️ Categorias
- Criar novas categorias.  
- Atualizar e excluir categorias existentes.  
- Cada categoria pode ter várias tarefas associadas.

---

## 🧩 Endpoints principais

### 📌 Tarefas

#### ➕ Criar uma nova tarefa  
`POST /tarefas`  
**Body:**
```json
{
  "titulo": "Estudar JavaScript",
  "descricao": "Fazer exercícios do curso",
  "status": "a fazer",
  "data_limite": "2025-11-20",
  "horario": "10:00:00",
  "categoria_id": 1
}
```

#### 📋 Listar todas as tarefas  
`GET /tarefas`  
Retorna todas as tarefas com suas respectivas categorias associadas.

#### 🔍 Filtrar tarefas por status  
`GET /tarefas/status/:status`  
Exemplo:  
`GET /tarefas/status/a fazer`  
Retorna apenas as tarefas com o status indicado.

#### ✏️ Atualizar o status de uma tarefa  
`PATCH /tarefas/:id`  
**Body:**
```json
{ "status": "concluída" }
```

#### 🔄 Atualizar todos os dados de uma tarefa  
`PUT /tarefas/:id`  
**Body:**
```json
{
  "titulo": "Fazer compras no mercado",
  "descricao": "Comprar frutas, pão e leite",
  "status": "em andamento",
  "data_limite": "2025-11-12",
  "horario": "09:00:00",
  "categoria_id": 2
}
```

#### ❌ Deletar uma tarefa  
`DELETE /tarefas/:id`

---

### 🗂️ Categorias

#### ➕ Criar uma nova categoria  
`POST /categorias`  
**Body:**
```json
{
  "nome": "Trabalho",
  "descricao": "Tarefas relacionadas ao ambiente profissional"
}
```

#### 📋 Listar todas as categorias  
`GET /categorias`  
Retorna todas as categorias com as tarefas associadas.

#### 🔄 Atualizar uma categoria  
`PUT /categorias/:id`  
**Body:**
```json
{
  "nome": "Pessoal",
  "descricao": "Tarefas domésticas e pessoais"
}
```

#### ❌ Deletar uma categoria  
`DELETE /categorias/:id`

---

## 💡 Diferenciais do projeto

Este projeto foi desenvolvido aplicando **boas práticas de arquitetura e organização de código**, com foco em clareza, escalabilidade e manutenção.  
Entre os principais diferenciais estão:

- Organização no padrão **MVC (Model-View-Controller)**  
- Uso de **Sequelize ORM** com **associações entre tabelas (hasMany / belongsTo)**  
- **Validação de campos obrigatórios** e tratamento de erros personalizados  
- Filtros dinâmicos de tarefas por **status**  
- Rotas RESTful padronizadas e bem estruturadas  
- **Boas práticas de versionamento** e estrutura limpa de pastas  
- Código comentado para facilitar entendimento e colaboração  
- Retorno de dados no formato **JSON** com informações de categoria integradas às tarefas  

---

## 💡 Como executar o projeto
```bash
# Instalar dependências
npm install

# Executar as migrações do banco
npx sequelize-cli db:migrate

# Iniciar o servidor
npm start
Servidor padrão: http://localhost:3000

---

## 👩‍💻 Autora
**Ingrid Sanuto** 
**Linkedln: www.linkedin.com/in/ingrid-sanuto-776744382** 