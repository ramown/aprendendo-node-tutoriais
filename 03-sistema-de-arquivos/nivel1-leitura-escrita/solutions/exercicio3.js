const { readFile } = require('fs/promises');
const path = require('path');

async function contarPalavras() {
  try {
    const conteudo = await readFile(path.resolve(__dirname, 'meu-arquivo.txt'), 'utf-8');

    const palavras = conteudo.trim().split(/\s+/);
    const quantidade = palavras.length;

    console.log(`📊 O arquivo tem ${quantidade} palavra(s)`);
    return quantidade;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('❌ Erro: Arquivo não encontrado!');
      console.log('💡 Dica: Verifique se o arquivo "meu-arquivo.txt" existe na pasta atual');
    } else {
      console.error('❌ Erro ao ler arquivo:', erro.message);
    }
    return 0;
  }
}

contarPalavras();
