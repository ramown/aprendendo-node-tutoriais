const { appendFile, writeFile } = require('fs/promises');
const path = require('path');

async function criarArquivoTxt() {
  await writeFile(path.resolve(__dirname, 'saida.txt'), 'Primeira linha: Oá mundo!\n');
  console.log('Arquivo criado com primeira linha');

  await appendFile(path.resolve(__dirname, 'saida.txt'), 'Segunda linha: Adicionando mais conteudo!\n');
  console.log('✅ Nova linha adicionada');

  await appendFile(path.resolve(__dirname, 'saida.txt'), 'Terceira linha: ùltima mensagem do dia!\n')
  console.log('✅ Mais uma linha adicionada');
}

criarArquivoTxt();
