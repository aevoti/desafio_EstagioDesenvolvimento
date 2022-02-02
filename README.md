# Desafio Pokedéx | AEVO

Essa é minha tentativa de construir uma Pokedéx utilizando conceitos de desenvolvimento web

## Processo
Nessa implementação, foi utilizado apenas HTML, CSS, JS e Bootstrap, onde apenas uma página HTML é feita para renderizar as informações dos 150 pokemons originais, e para cada um destes é criado um card clicável que exibe todas as informações do pokemon. Uma barra de pesquisa também foi implementada.
O projeto também está responsivo.

## Considerações
Analisando o projeto, tenho em mente que:
- A barra de pesquisa deveria ter sido implementada para funcionar com o Enter, porém quando colocado a tag de <form> e pressionado enter, a página inteira acaba recarregando, e a minha função de consulta a API e muda o HTML acaba se perdendo.
- Apesar da página inicial ser renderizada de forma ordenada pelos Id's dos pokemons, ela se apresenta de forma ligeiramente diferente a cada refresh na página. Isso pode estar relacionado a forma que foi chamada a API, visto que cada card precisa receber a imagem e id do pokemon. Como cada imagem tem tamanhos diferentes, pode ser que uma imagem carregue mais rápido que outra, fazendo os cards ficarem na frente.
- As funções deveriam ter papéis mais definidos, como uma função apenas para consulta da API, e outra apenas para criação de todos os cards, que chamaria a função de consulta da API. Porém não consegui implementar uma função de consulta que retornasse o JSON contendo os dados do pokemon para outras funções.

Ao todo acho que foi um bom projeto para testar os pilares do desenvolvimento web(HTML, CSS, e JS), além de chamadas de API's públicas.
