# Criando um front-end totalmente componentizado na prática com ReactJS.

# Sumário

- [Descrição](#descricao)
- [Tecnologias utilizadas](#tecnologias)
- [Instruções para rodar o projeto](#instrucoes)
- [Organização e estruturação do projeto](#organizacao)
- [Desenvolvimento](#desenvolvimento)
- [Resultado](#resultado)

# Descrição do Projeto <a name="descricao"></a>

Desafio para o Curso do Bootcamp Impulso Javascript Evolution.

# Tecnologias Utilizadas <a name="tecnologias"></a>

- [**React**](https://pt-br.reactjs.org/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**React Hooks**](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [**React Router Dom**](https://www.npmjs.com/package/react-router-dom)
- [**Tailwindcss**](https://tailwindcss.com/)
- [**Phosphor Icons**](https://phosphoricons.com/)
- [**Axios**](https://axios-http.com/docs/intro)
- [**Date-fns**](https://date-fns.org/)

# Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
React
Node v6.0.0^
```

- Clone o repositório com o comando **git clone**:

```
git clone ------
```

- Entre no diretório que acabou de ser criado:

```
cd git
```

- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm run dev**:

```
npm run dev
```

# Organização e estruturação do projeto <a name="organizacao"></a>

O projeto está organizado e estruturado da seguinte forma:

```
      ├── README.md
      ├── index.html
      ├── src
      |     ├── assets
      |     |       ├── logo.svg
      |     |       ├── git.webp
      |     ├── components
      |     |       ├── Container.tsx
      |     |       ├── Footer.tsx
      |     |       ├── Header.tsx
      |     |       ├── ItemList.tsx
      |     |       ├── ItemLink.tsx
      |     ├── interfaces
      |     |       ├── User.ts
      |     ├── pages
      |     |       ├── Home.tsx
      |     |       ├── Profile.tsx
      |     ├── service
      |     |       ├── api.ts
      |     ├── utils
      |     |       ├── index.ts
      |     ├── App.tsx
      |     ├── index.tsx
```

# Desenvolvimento <a name="desenvolvimento" ></a>

## Fetch

Para realizar o fetch no banco de dados da API, foi utilizado o client HTTP [**Axios**](https://axios-http.com/docs/intro).

## Estilização

Para realizar a estilização, foi utilizado o framework [**Tailwindcss**](https://tailwindcss.com/).

## Icones

Os ícones utilizados foram os da biblioteca [**Phosphor Icons**](https://phosphoricons.com/)

# Resultado <a name="resultado"></a>

## Página Home

![Home](https://user-images.githubusercontent.com/77207253/182687848-06b4e47d-81b5-4510-95fc-dcbc9abc6b26.png)

## Página Profile

![Página Profile](https://user-images.githubusercontent.com/77207253/182688253-1c647e1f-66b7-4e4e-b674-ff134e47b678.png)

## 🦄 Autor<br>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Flaviane-Brum">
        <img src="https://avatars.githubusercontent.com/u/77207253?v=4" width="100px;" alt="Foto de Flaviane Brum no GitHub"/><br>
        <sub>
          <b>Flaviane Brum</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
