# Teste Trainees - Documentação de escopo

## Pontos individuais de desenvolvimento de backend pendentes:

- Necessária uma API para pegar infos da promoção ativada como valor do desconto
- Necessária uma API para aplicação a promoção
- Necessária uma API para obter detalhes sobre a promoção como idade mínima
- Necessária uma API para cadastro de informações do usuário como data de nascimento
- Necessária uma API para adicionar o produto ao carrinho no servidor
- Necessária uma API para remover o produto do carrinho no servidor
- Necessária uma API para atualizar o produto do carrinho no servidor
- Necessária uma API para consultar banners cadastrados
- Necessária uma API para consultar catálogo
- Necessária uma API para consultar catálogo que já tenha como base as promoções aplicadas em seu retorno (campo discount)

## Requisição de APIs gerais

### API de promoções

É necessária uma API de promoções na qual deve ser possível fazer listagem de promoções, consulta por ID de promoção para pegar informações de cada promoção individualmente e aplicação de promoções

*Retorno necessário*
- ID de promoção
- Nome de promoção
- Condição de promoção
- Desconto de promoção

### API de cadastro e atualização de usuário

É necessária uma API para cadastro de informações de usuário para que, quando logado, ele não precise preencher novamente dados como data de nascimento

### API de catálogo

É necessária uma API de catálogo que leve em consideração promoções aplicadas no carrinho em questão.

*Retorno necessário*
- ID de produto
- Nome de produto
- Price e ListPrice de produto
- Desconto de produto
- Tipo de undiade (peso ou unidade)
- Peso por unidade

### API de carrinho

É necessária uma API de carrinho para possibilitar adição de produtos para finalização de pedido, bem como remoção e atualização de quantidade.a

*Retorno necessário*
- Mesmos dados de catálogo
- Quantidade

### API de cadastro de banners

É necessária uma API para consultar banners cadastrados.

*Retorno necessário*
- URL do banner