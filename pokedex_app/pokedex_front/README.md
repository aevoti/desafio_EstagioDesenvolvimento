# Pokédex React

Uma aplicação moderna de Pokédex construída com React, TypeScript e Vite. Esta aplicação possui uma visualização de lista de Pokémon e um simulador de batalhas.

## Funcionalidades

- Navegue pelos Pokémon com uma lista dinâmica
- Simulador de batalhas interativo
- Cores de fundo dinâmicas baseadas nos tipos de Pokémon
- Design responsivo para todos os dispositivos
- Navegação baseada em rotas

## Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- React Router DOM
- Context API para gerenciamento de estado
- Color-Thief para recuperar as cores dominantes das imagens
- AOS animation para animações suaves

## Estrutura do Projeto

```
pokedex/
├── src/
│   ├── App.tsx          # Componente principal da aplicação
│   ├── App.css          # Estilos globais
│   ├── Context.ts       # Contexto e estado da aplicação
│   └── features/
│       └── pokemon/
│           └── pages/
│               ├── PokemonList.tsx   # Página de listagem de Pokémon
│               └── PokeBattle.tsx    # Página do simulador de batalhas
```

1. Install dependencies:

```bash
cd pokedex
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Rotas Disponíveis

- `/` - Redireciona para a primeira página de Pokémon
- `/:name` - Página individual de um Pokémon
- `/poke-battle` - Simulador de batalhas

## Desenvolvimento

Este projeto utiliza o Vite como ferramenta de build e servidor de desenvolvimento. Os seguintes scripts estão disponíveis:

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Gerar build para produção
npm run preview  # Visualizar build de produção
```
