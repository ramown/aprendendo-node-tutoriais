# Nível 1 - Leitura e Escrita com fs/promises

## 🎯 Objetivos

- Entender o módulo `fs/promises` do Node.js
- Aprender a ler arquivos do sistema
- Aprender a escrever e sobrescrever arquivos
- Adicionar conteúdo em arquivos existentes
- Trabalhar com encoding (`utf-8`)
- Tratar erros com `try/catch`

---

## 📌 Pré-requisitos

- Conceitos básicos de JavaScript
- Funções e arrays
- Uso de `async/await`

---

## 📚 Tópicos

### 1. Introdução ao sistema de arquivos no Node.js
- O que é o `fs`
- Diferença entre:
  - `fs` (callback)
  - `fs/promises`
  - `fs sync`

---

### 2. Lendo arquivos
- `readFile`
- encoding (`utf-8`)
- leitura de texto vs buffer

---

### 3. Escrevendo arquivos
- `writeFile`
- sobrescrita de arquivos
- criação automática de arquivos

---

### 4. Adicionando conteúdo
- `appendFile`
- quando usar append vs write

---

### 5. Tratamento de erros
- `try/catch`
- erros comuns:
  - arquivo não encontrado
  - permissão
  - caminho inválido

---

### 6. Trabalhando com caminhos
- `process.cwd()`
- `__dirname`
- `path.join()`

---

## 🧠 O que você deve dominar ao final

- Ler qualquer arquivo local
- Criar arquivos dinamicamente
- Atualizar conteúdo de arquivos
- Entender fluxo assíncrono com arquivos

---

## 🧪 Exercícios

Ver arquivo [exercicios.md](./exercicios.md)

---

## 🚀 Projeto

Ver arquivo [projeto.md](./projeto.md)
