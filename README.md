# A simple landing page created in Next.js

<p>Landing Page Next.JS.</p>

<p>
  <img src="https://img.shields.io/badge/made%20by-Vitor%20Santana-E83752?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vitorSantanaDev/client-codesec-clone?color=E83752&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/vitorSantanaDev/client-landing-page-react?color=E83752&style=flat-square">
</p>

<img align="right" src="./public/images/logo-2-codesec.svg" height="120">

## Tópicos

[Sobre a aplicação](#sobre-a-landing-page)

[Tecnologias e Ferramentas](#tecnologias-e-ferramentas)

[Instalação e uso](#instalação-e-uso)

<br>

## Landing Page Next.js

<br>
 :memo: O projeto consiste em uma simples landing page, construída em Next.JS utilizando o conceito de SSG(Static Site Generation). Todo o template é cosntruído no momento de build da aplicação, fazendo com que não seja necessário bater na API novamente, pra gerar o conteúdo, já que todo ele é gerado no momento de build da aplicação.
<br>
<br>
:card_file_box: Todo o conteúdo é disponibilizado através de uma simples API feita com o CMS Strapi(Gerenciador de conteúdo), fazendo com que eu tenha a liberdade pra mudar o conteúdo da página futuramente.
<br>
<br>
:zap: Decidi utilizar o GraphQL, pra trazer os dados da API, essa decisão se deu pelo fato de que o GraphQL nos permite fazer o request apenas das informações que precisamos, resultando assim em uma melhor performance das requisições, além de que como eu tô utilizando typescript nesse projeto, o GraphQL me permitiu montar meus dados da response com as mesmas chaves utilizadas nas interfaces dos componentes. Sei que o GraphQL vai muito além do que utilizei aqui, mas sem dúvida essa ferramenta é fenômenal.
<br>
<br>
:white_check_mark: Os testes dos componentes foram feitos com Jest e React Testing Library, foram testes simples, mas que garantiu um pouco mais de qualidade aos componentes dessa landing page.
<br>
<br>
:rocket: O Deploy da aplicação foi feito na Netlify, onde é possível hospedar estáticos de maneira rápida e fácil.
Segue o link da landing page.

[CodeSec-clone](https://codesec-clone.netlify.app)

## Tecnologias e Ferramentas

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [JavaScript](https://devdocs.io/javascript/)
- [Typescript](https://www.typescriptlang.org/)
- [Next Js](https://nextjs.org/)
- [styled-components](https://styled-components.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook](https://storybook.js.org/)
- [Strapi](https://strapi.io/)
- [GraphQL](https://graphql.org/)

<br>

## Instalação e Uso

Para rodar a aplicação, você precisa instalar o [Node](https://nodejs.org/en/)

Siga os passos abaixo:

```bash
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/vitorSantanaDev/client-codesec-clone.git
# ou use a opção de download.

# Entre na pasta com
$ cd client-codesec-clone

# Instale as dependências
$ yarn install

# Rode a aplicação
$ yarn start
```

<br>

---

Feito com :red_heart: by [Vitor_Santana](https://github.com/vitorSantanaDev)

[![Linkedin Badge](https://img.shields.io/badge/-Vitor%20Santana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitor-santana-bbb607217/)](https://www.linkedin.com/in/vitor-santana-bbb607217/)
[![Gmail Badge](https://img.shields.io/badge/-vitorsantana.developer@gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vitorsantana.developer@gmail)](mailto:vitorsantana.developer@gmail)
