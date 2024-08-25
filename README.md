# Consultar Fipe

Este é um projeto desenvolvido em Angular 17 (17.2.0) que consulta uma API pública para buscar informações sobre veículos com base na Tabela FIPE. O projeto utiliza o Bootstrap para estilização e responsividade.

## Funcionalidades

- Consulta FIPE: Permite buscar informações detalhadas sobre veículos usando a API pública da FIPE.
- Interface Responsiva: A interface é projetada para funcionar em diferentes dispositivos.
- Pesquisa por Marca, Modelo e Ano/Combustível: Você pode procurar veículos filtrando por marca, modelo e ano de fabricação.

## Tecnologias Utilizadas

- Angular: Framework front-end para desenvolvimento de aplicativos web.
- Bootstrap: Framework de CSS para estilização e design responsivo.
- API Pública da FIPE: Fonte de dados para informações sobre veículos (https://deividfortuna.github.io/fipe/).

## Como rodar o projeto?

Para rodar este projeto localmente, siga estes passos:

1. Clone o repositório: `git clone https://github.com/heloisacst/tabela-fipe.git`
2. Instale as dependências: `npm install` e `npm install bootstrap`
3. Adicione o Bootstrap ao projeto: No arquivo angular.json, adicione o seguinte ao array "styles":

`
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
`

4. Inicie o servidor de desenvolvimento: `ng serve`
5. Acesse o aplicativo no navegador: `http://localhost:4200`

## Uso

1. Busque por um veículo: Utilize os campos de pesquisa para inserir o tipo de veículo, marca, modelo e ano/combustível desejados.
2. Veja os resultados: A consulta será feita à API da FIPE e os resultados serão exibidos em uma tabela.

### Contato

Para qualquer dúvida ou sugestão, entre em contato com heloisa.cstp@gmail.com
