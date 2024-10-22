# Playwright Testing with TypeScript

Este repositório contém testes automatizados usando **Playwright** com **TypeScript**. O Playwright é uma biblioteca poderosa para automação de navegadores, permitindo que você escreva testes para aplicações web de forma rápida e eficiente.

## Estrutura do Projeto

Os testes estão localizados em `tests/specs`. A estrutura do projeto segue a abordagem de **Page Object Model (POM)** e utiliza **Fixtures** para gerenciar o estado do teste.

### O que são Fixtures?

**Fixtures** são uma maneira de fornecer um contexto consistente para os testes. Elas permitem que você configure e limpe o ambiente de teste antes e depois da execução dos testes. Por exemplo, você pode usar uma fixture para abrir um navegador, acessar uma URL inicial ou limpar dados de um banco de dados.

### O que são Page Objects?

**Page Objects** são classes que representam as páginas da sua aplicação. Elas encapsulam a lógica de interação com a interface do usuário, facilitando a manutenção e a reutilização do código. Com os Page Objects, você pode abstrair os seletores e ações em métodos que podem ser facilmente chamados em seus testes.

## Instalação do Playwright com TypeScript

Para instalar o Playwright em seu projeto TypeScript, siga os passos abaixo:

```bash
npm install playwright @playwright/test typescript
```
# Instale as dependências
```bash
npm install playwright @playwright/test typescript
```
# Configure o TypeScript (se ainda não tiver um arquivo tsconfig.json)
```bash
npx tsc --init
```

## Rodando os Testes

Para rodar os testes, você pode usar o comando:

```bash
npx playwright test
```

Se você quiser rodar os testes em uma interface de usuário interativa, utilize o seguinte comando:

```bash
npx playwright test --ui
```

## Gerando Relatórios

Para gerar relatórios de todos os testes, você pode usar os seguintes comando:

```bash
npx playwright test --reporter=html
npx playwright show-report
```
