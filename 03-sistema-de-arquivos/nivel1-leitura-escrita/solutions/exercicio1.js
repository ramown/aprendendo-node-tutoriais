const fs = require('fs/promises');
const path = require('path');

async function lerArquivoTxt() {
  const conteudo = await fs.readFile(path.resolve(__dirname, 'texto.txt'), 'utf-8');
  console.log(conteudo);
}

lerArquivoTxt();
