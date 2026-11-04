API de Gerenciamento de Pedidos

API REST desenvolvida em Node.js e Express para gerenciamento de pedidos de uma pequena loja.

O projeto foi desenvolvido como atividade prática, com o objetivo de aplicar conceitos de arquitetura em camadas, operações CRUD, validação de dados, tratamento de erros e testes de API.

1. Tecnologias utilizadas
Node.js
Express
JavaScript
Jest (testes automatizados)
Postman (testes manuais)
Git e GitHub (versionamento)
2. Instalação e execução
Pré-requisitos
Node.js instalado.
NPM instalado.
Instalação

Clone o repositório:

bash
git clone URL_DO_SEU_REPOSITORIO


Entre na pasta do projeto:

bash
cd nome-do-projeto


Instale as dependências:

bash
npm install

Executar a aplicação
bash
npm start


A API estará disponível em:

text
http://localhost:3000

3. Arquitetura do projeto

O projeto utiliza uma arquitetura em camadas, separando as responsabilidades para facilitar a organização, manutenção e compreensão do código.

Routes

Responsável por definir os endpoints da API e direcionar as requisições para os respectivos Controllers.

Controllers

Responsável por receber as requisições HTTP, chamar as funções do Service e retornar as respostas com os códigos de status apropriados.

Services

Responsável pelas regras de negócio, validações dos dados, criação, consulta, listagem e atualização dos pedidos.

Repository

Os pedidos são armazenados em memória por meio de um array JavaScript, sem utilização de banco de dados.

4. Endpoints disponíveis
Método	Rota	Descrição
POST	/pedidos	Cadastrar pedido
GET	/pedidos	Listar pedidos
GET	/pedidos/:id	Consultar pedido por ID
PATCH	/pedidos/:id/status	Atualizar status do pedido
5. Exemplos de utilização
5.1 Cadastrar pedido

Método: POST

URL: /pedidos

Corpo da requisição:

json
{
  "cliente": "Carlos Silva",
  "tipo": "entrega",
  "valor": 350,
  "prioridade": "normal"
}


Resposta esperada: HTTP 201 Created.

json
{
  "id": 1,
  "cliente": "Carlos Silva",
  "tipo": "entrega",
  "prioridade": "normal",
  "status": "recebido",
  "valor": 350
}

5.2 Listar pedidos

Método: GET

URL: /pedidos

Retorna todos os pedidos cadastrados.

Resposta esperada: HTTP 200 OK.

5.3 Consultar pedido por ID

Método: GET

URL: /pedidos/1

Retorna os dados do pedido correspondente ao identificador informado.

Respostas:

HTTP 200: pedido encontrado.
HTTP 404: pedido não encontrado.
5.4 Atualizar status do pedido

Método: PATCH

URL: /pedidos/1/status

Corpo da requisição:

json
{
  "status": "em_preparacao"
}


Resposta esperada: HTTP 200 OK.

O pedido será atualizado com o novo status, respeitando as regras de transição implementadas.

6. Validações e tratamento de erros

A API possui validações para garantir a integridade dos dados recebidos.

Validações de cadastro
Cliente obrigatório e deve ser um texto não vazio.
Espaços nas extremidades do nome do cliente são removidos.
Valor deve ser numérico e maior que zero.
Tipo deve corresponder a um valor permitido.
Prioridade deve corresponder a um valor permitido.
Valores permitidos

Tipos:

entrega
retirada

Prioridades:

baixa
normal
alta

Status:

recebido
em_preparacao
enviado
entregue
cancelado

As transições de status devem seguir as regras de negócio implementadas no Service.

Códigos HTTP utilizados
Código	Descrição
200	Requisição realizada com sucesso
201	Pedido cadastrado com sucesso
400	Dados inválidos
404	Pedido não encontrado
500	Erro interno inesperado

As respostas de erro são retornadas em formato JSON, com uma mensagem explicativa.

7. Testes

Os testes manuais são realizados utilizando o Postman.

Cenários testados:

Cadastro de pedido válido.
Tentativa de cadastro com dados inválidos.
Listagem dos pedidos.
Consulta de pedido existente.
Consulta de identificador inexistente.
Atualização de status.
Tentativa de atualização com status inválido.
Testes automatizados

O projeto utiliza Jest para testes automatizados.

Para executar os testes:

bash
npm test


Os testes verificam o comportamento das funcionalidades e as respostas esperadas da aplicação.

8. Evidências

As capturas de tela dos testes realizados no Postman estão disponíveis na pasta evidencias/.

Arquivos previstos:

text
evidencias/
├── 01-criacao.png
├── 02-validacao.png
├── 03-listagem.png
├── 04-consulta-inexistente.png
└── 05-atualizacao.png


As imagens apresentam as requisições realizadas, os corpos enviados quando aplicável, as respostas e os códigos HTTP retornados.

9. Versionamento

O projeto utiliza Git para controle de versão e GitHub para hospedagem do código-fonte.

O histórico de desenvolvimento registra as principais etapas de implementação e correções do projeto.

10. Uso de IA

Foi utilizada inteligência artificial como ferramenta de apoio durante o desenvolvimento do projeto.

A ferramenta auxiliou na compreensão da arquitetura em camadas, na implementação das validações, no tratamento de erros HTTP e na identificação de problemas no código.

Uma sugestão aceita foi separar as responsabilidades entre Controller e Service, mantendo as regras de negócio e validações no Service e o tratamento das respostas HTTP no Controller.

Essa abordagem foi adotada para melhorar a organização, manutenção e compreensão do código.

11. Armazenamento dos dados

Os pedidos são armazenados temporariamente em um array JavaScript.

Como não existe integração com banco de dados, os registros são perdidos quando o servidor é reiniciado.

Essa abordagem foi utilizada porque o armazenamento em memória é permitido pelos requisitos da atividade.

Projeto acadêmico — API REST de Gerenciamento de Pedidos.
