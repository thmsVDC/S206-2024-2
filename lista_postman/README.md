# Testes da API ReqRes com PostMan

Este projeto contém uma série de testes manuais desenvolvidos para a API ReqRes utilizando PostMan.

## Exercício 2: Respostas e Justificativas

1. **Os testes desenvolvidos são manuais ou automatizados?**
   - **Resposta:**  
     Os testes são automatizados, pois incluem scripts configurados no PostMan para validação automática dos resultados (ex.: verificação do código de status, conteúdo da resposta, etc.). Além disso, os testes podem ser executados em lote utilizando o **Newman**.

2. **Alguns dos testes desenvolvidos são testes Fim-a-Fim (End-To-End)?**
   - **Resposta:**  
     Sim, os testes positivos **GET** podem ser considerados End-To-End, pois verificam o ciclo completo de solicitação de dados e resposta da API, simulando a interação do usuário com o sistema.

3. **O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?**
   - **Resposta:**  
     Para executar os testes em modo de regressão, eles devem ser integrados em uma pipeline de CI/CD. Isso pode ser feito utilizando o **Newman** para executar as coleções automaticamente a cada alteração no código. É essencial manter a versão do ambiente e da coleção sincronizadas, e garantir que os dados usados nos testes (mockados ou reais) estejam consistentes.



## Ferramentas Utilizadas
- PostMan
- API pública Open Notify (https://open-notify.org)

---

## Cenários Testados
- 6 testes positivos.
- 2 testes negativos.

---

## Gerar Relatório com Newman

Para gerar o relatório dos testes utilizando o **Newman**, siga as etapas abaixo:

1. **Instale o Newman:**  
   Se ainda não tiver o **Newman** instalado, execute o seguinte comando no terminal:
   ```bash
   npm install -g newman-reporter-html
   ```

2. Gerar relatório em formato HTML:
Para gerar um relatório legível em HTML, utilize a seguinte opção:
   ```bash
   newman run lista_postman.postman_collection.json -r html
   ```
