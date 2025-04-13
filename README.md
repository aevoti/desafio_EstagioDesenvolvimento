# Documentação do Projeto Pokédex Digital

## 1. Visão Geral
Aplicação web para explorar Pokémon utilizando a PokeAPI. Oferece:
- Listagem de Pokémon com paginação
- Sistema de busca por nome
- Detalhes dos Pokémon
- Sistema de comparação entre dois Pokémon
- Funcionalidade de comentários persistidos
- Interface responsiva e interativa

**Diferenciais Implementados:**
- Arquitetura Angular 13
- Backend em C# com SQL Server
- Sistema de comentários
- Comparação de total de status

## 2. Tecnologias Utilizadas
### Frontend:
- Angular 13
- TypeScript
- HTML5/CSS3
- Bootstrap
- Design Responsivo

### Backend:
- .NET Core (C#)
- Entity Framework Core
- SQL Server LocalDB
- REST API

### Ferramentas
- [PokeAPI] (https://pokeapi.co)
- Git
- Visual Studio Code

## 3. Funcionalidades Principais
### 3.1 Interface Principal
**Navbar:**
- Links de navegação
- Redes sociais fictícias

**Home Page:**
- Introdução ao site
- Botão "Explorar Pokémons"

**Listagem de Pokémon:**
- Cards com imagem, ID e nome
- Paginação (200 primeiros Pokémon)
- Sistema de seleção múltipla (até dois Pokémons)
- Barra de pesquisa dinâmica

### 3.2 Sistema de Interação
**Seleção de Pokémon:**
- Seleção única para detalhes
- Seleção dupla para comparação
- Feedback visual de seleção

**Detalhes do Pokémon:**
- Estatísticas dos atributos (HP, Attack, Defense, etc.)
- Soma total de status
- Tipos elementares
- Sistema de comentários persistido

**Comparação:**
- Visualização lado a lado
- Destaque do vencedor
- Comparação por status individuais

### 3.3 Funcionalidades Especiais
**Sistema de Comentários:**
- Validação de campos
- Persistência em banco de dados
- Exibição cronológica
- Formatação automática de data/hora

**UX Features:**
- Botão de scroll-to-top
- Tratamento de erros no console
- Responsividade

## 4. Instalação e Configuração
### Pré-requisitos
- Node.js
- .NET Core SDK 8
- SQL Server 2022
- Angular CLI 13

### Passo a Passo
**Frontend:**
```bash
git clone [https://github.com/Cabidelle/desafio_EstagioDesenvolvimento]
cd frontend
npm install
ng serve
```
**Backend:**
- Restaurar pacotes NuGet
- Configurar connection string no appsettings.json
- Executar migrations do Entity Framework
- Iniciar projeto API

**Banco de Dados:**
- Criar database
- Executar script de criação de tabelas

## 5. Arquitetura do Sistema
**Frontend**
```
src/
├── app/
│   ├── components/
│   ├── services/
│   ├── models/
│   ├── assets/
│   └── environments/
```
**Backend**
```
PokedexCommentsApi/
├── Controllers/
├── Models/
├── Migrations/
└── Data/
```
## 6. Uso da PokeAPI
### Endpoints utilizados:
- Listagem: GET /pokemon?limit=200
- Detalhes: GET /pokemon/{id}

## 7. Sistema de Comentários
### Modelo de Dados
**C#**
```
public class Comment
    {
        public int Id { get; set; }
        
        [Required]
        public string PokemonId { get; set; } = string.Empty;
        
        [Required]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        public string Text { get; set; } = string.Empty;
        
        public DateTime Date { get; set; } = DateTime.UtcNow;
    }
```
**Endpoints**
- GET /api/comments/pokemon/{pokemonId}
- POST /api/comments

## 8. Fluxo de Trabalho
- Acesso à Home Page
- Navegação para lista de Pokémon
- Busca e seleção de Pokémon
- Visualização de detalhes/comparação
- Interação com sistema de comentários

## 9. Contato
📧 [samuelcabidelle@gmail.com]