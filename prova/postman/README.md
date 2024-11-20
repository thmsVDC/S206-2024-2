# Testes de API com Postman

Este projeto executa testes de API usando o **Newman**, uma ferramenta de linha de comando para rodar coleções do **Postman**. O objetivo é gerar relatórios de execução dos testes em formato **HTML**.

## Pré-requisitos

Antes de rodar os testes, você precisará ter as seguintes ferramentas instaladas no seu sistema:

- **Node.js**: O Node.js é necessário para rodar o Newman e o npm (gerenciador de pacotes). Para instalar, [faça o download do Node.js aqui](https://nodejs.org/).
  
  Para verificar se você já tem o Node.js instalado, execute o comando:
  ```bash
  node -v
  ```

  •	Postman: O Newman funciona com coleções do Postman, então você precisará criar e exportar uma coleção do Postman. Baixe o Postman aqui.
  •	Newman: O Newman é utilizado para rodar a coleção do Postman e gerar o relatório. Ele pode ser instalado via npm.

## Passo 1: Instalar o Newman e o Reporter HTML
    ### 1.	Instalar o Newman:
Para instalar o Newman globalmente no seu sistema, execute o seguinte comando:
```bash
npm install -g newman
````

    ### 2.  Instalar o Reporter HTML:
O Newman não inclui o reporter HTML por padrão, então você precisa instalá-lo separadamente com o comando:
```bash
npm install -g newman-reporter-html
```

Caso encontre erros de permissão, você pode precisar usar sudo (em sistemas Unix):
```bash
sudo npm install -g newman-reporter-html
```


## Passo 2: Executar os Testes e Gerar o Relatório

Após instalar o Newman e o reporter HTML, você pode rodar os testes da sua coleção do Postman e gerar o relatório HTML com o seguinte comando:
```bash
newman run collection.json -r html
```

## Passo 3: Acessar o Relatório

Após a execução dos testes, um relatório HTML será gerado no diretório onde você rodou o comando, dentro da pasta newman/. O arquivo será nomeado newman-run-report.html.

Abra o arquivo newman-run-report.html em um navegador para visualizar o relatório de testes.
