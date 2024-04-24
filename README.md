# Documentação do Código

## Descrição Geral
Este código é um aplicativo web que consome a API dos Pokémons para criar uma lista dinâmica de Pokémons capturados. Ele oferece uma barra de pesquisa para facilitar a localização de Pokémons específicos e, ao clicar em um card de Pokémon, os usuários são direcionados para uma página com informações mais detalhadas sobre o Pokémon selecionado. Além disso, apresenta uma forma de comparar dois Pokémons e fazer a medição de suas forças com base em seus status totais.

## Funcionalidades Principais
- Consulta à API dos Pokémons para obter dados sobre os Pokémons.
- Criação dinâmica de uma lista de Pokémons capturados.
- Implementação de uma barra de pesquisa para filtrar os Pokémons na lista.
- Exibição de informações detalhadas de cada Pokémon em uma página separada.

## Funções e Eventos

1. **Função `buscaInfo(id)`**
   - Realiza uma busca por informações de um Pokémon na API, utilizando o ID fornecido.
   - Se o Pokémon já estiver armazenado no armazenamento local (localStorage), ele é retornado diretamente.
   - Caso contrário, é feita uma requisição à API para obter as informações do Pokémon, que são então armazenadas no localStorage antes de serem retornadas.

2. **Função `carregaNomes()`**
   - Carrega os nomes dos Pokémons da API.
   - Se os nomes já estiverem armazenados no armazenamento local (localStorage), eles são retornados diretamente.
   - Caso contrário, é feita uma requisição à API para obter os nomes, que são então armazenados no localStorage antes de serem retornados.

3. **Função `compararPokemon(pokemon1, pokemon2)`**
   - Recebe dois objetos Pokémon e compara suas estatísticas.
   - Dependendo das estatísticas, uma mensagem é exibida utilizando a biblioteca `Swal` (SweetAlert) para indicar qual Pokémon é mais forte.

4. **Função `ComparaRecebe1()`**
   - Permite ao usuário comparar um Pokémon selecionado com outro Pokémon escolhido em um menu suspenso.
   - Carrega a lista de nomes de Pokémons e os normaliza.
   - Obtém o ID do Pokémon atualmente selecionado na página.
   - Abre um modal solicitando ao usuário que selecione um Pokémon para comparar com o Pokémon atual.
   - Quando o usuário seleciona um Pokémon, busca as informações do Pokémon selecionado para comparação e chama a função `compararPokemon()` para exibir o resultado da comparação.

5. **Função `comparaRecebe2()`**
   - Permite ao usuário selecionar dois Pokémons para comparar suas estatísticas.
   - Carrega a lista de nomes de Pokémons e os normaliza.
   - Abre um modal solicitando ao usuário que selecione o primeiro Pokémon.
   - Após a seleção do primeiro Pokémon, abre outro modal solicitando ao usuário que selecione o segundo Pokémon.
   - Quando ambos os Pokémons são selecionados, busca as informações de ambos os Pokémons e chama a função `compararPokemon()` para exibir o resultado da comparação.

6. **Função `carregaTabela(inicio, final)`**
   - Carrega uma tabela de Pokémons na página.
   - Chama a função `buscaInfo` para obter informações sobre os Pokémons dentro de um intervalo especificado.
   - Utiliza um IntersectionObserver para carregar mais Pokémons quando o último Pokémon na tabela estiver visível na viewport.

7. **Função `geraCard(pokemon)`**
   - Gera um card para um Pokémon e o adiciona à tabela na página.
   - O card contém o nome, o número (ID) e a imagem do Pokémon.
   - Estilizado com o tipo de Pokémon como fundo, utilizando as cores definidas no objeto `colors`.