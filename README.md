<p align="center"> <img src="https://imgur.com/u1Nh770.png" alt="React: desenvolvendo em React Router com JavaScript"> </p>
<p>Projeto desenvolvido durante o curso "React: gerenciamento de estados globais com ContextAPI" da Alura.</p>

<hr>

## Índice

- [Descrição](#descrição)
- [Funcionalidades e Recursos](#toolbox-funcionalidades-e-recursos)
   - [Páginas Principais](#páginas-principais)
      - [Login](#login)
      - [Feira](#feira)
      - [Carrinho](#carrinho)
   - [Gerenciamento de Estado](#gerenciamento-de-estado)
   - [Roteamento](#roteamento)
   - [Boas Práticas e Responsividade](#boas-práticas-e-responsividade)
- [Ferramentas utilizadas](#computer-ferramentas-utilizadas)
- [Acesso ao projeto](#open_file_folder-acesso-ao-projeto)
- [Instruções](#clipboard-instruções)
- [Demonstração Visual](#demonstração-visual)

<h1 align="center" id="descrição">Feira Virtual</h1>
<p align="center">A Feira Virtual é uma aplicação de e-commerce, esta aplicação permite aos usuários criar uma conta, navegar pela feira, adicionar produtos ao carrinho de compras e efetuar pagamentos com diferentes formas de pagamento.</p>

## :toolbox: Funcionalidades e Recursos

### Páginas Principais

- #### Login:
   - `Inserção de dados`: Os usuários tem a possibilidade de introduzir o seu nome e o valor do seu saldo nos campos de entrada.
   
   - `Botão de Navegação`: Abaixo dos campos, um botão denominado "Avançar" direciona o usuário para a página de feira, porém ele permanece desabilitado até que o campo de nome contenha, no mínimo, quatro caracteres.

- #### Feira: 
   - `Lista de produtos`: Os usuários têm a capacidade de visualizar uma lista de produtos disponíveis para compra. Esta lista contém informações sobre os nomes dos produtos bem como os respetivos preços por quilograma.
   
   - `Controle de unidades`: Para cada produto listado, os usuários têm a disposição botões de adição e subtração, que permite adicionar ou remover unidades dos produtos selecionados no seu carrinho de compras.

   - `Informações do usuário`: No topo da página, uma seção apresenta o nome do utilizador juntamente com o seu saldo atual.

   - `Carrinho de compras`: Além disso, na barra de navegação um ícone de carrinho de compras é exibido com um contador que indica o número de produtos presentes no carrinho. Importante notar que o ícone de carrinho de compras é desativado quando o carrinho se encontra vazio.
   
   - `Produtos disponíveis`: Os produtos atualmente disponíveis para compra incluem: Tomate, Brócolis, Batata, Pepino e Abóbora.

- #### Carrinho:
   - `Visualização de produtos`: Os usuários têm a possibilidade de visualizar os produtos que foram adicionados à sua lista de compras na página anterior, especificamente na página da feira.

   - `Opções de pagamento`: No menu de opções são disponibilizadas quatro alternativas de pagamento: Boleto, Cartão de Crédito, PIX e Crediário. É importante destacar que o contexto de pagamento realiza automaticamente a aplicação de juros, com base na forma de pagamento selecionada pelo usuário.

   - `Informações relevantes`: São exibidas informações essenciais, incluindo o valor total dos produtos contidos no carrinho de compras, o saldo disponível do usuário e o saldo remanescente após a conclusão da compra.

   - `Validação do botão`: Importante notar que o botão denominado "Comprar" permanecerá desativado caso o valor total da compra exceda o saldo disponível do usuário ou se o carrinho de compras se encontrar vazio.

   - `Conclusão da compra`: Ao efetuar a compra com sucesso, o carrinho é esvaziado e o valor total da compra é devidamente subtraído do saldo do usuário. Este processo é acompanhado de uma notificação visual confirmando a conclusão da transação é exibida.

### Gerenciamento de Estado

- `ContextAPI`: O gerenciamento de estados globais é feito utilizando a `ContextAPI`, onde três principais contextos são definidos: `Usuário`, `Carrinho`, e `Pagamento`. Cada contexto possui funcionalidades específicas relacionadas a sua área de responsabilidade.

- `Hooks Customizados`: São usados `hooks customizados` para centralizar a lógica de negócios e manutenção dos contextos fora dos componentes, tornando os componentes mais desacoplados e reutilizáveis.

- `useEffect`: O hook `useEffect` é usado para escutar mudanças no contexto e atualizar dinamicamente os cálculos e estados relacionados.

### Roteamento

- `BrowserRouter, Routes e Route`: Usa os componentes fornecidos pelo `react-router-dom` para criar e renderizar rotas. O sistema de navegação contém três páginas principais: `Login`, `Feira` e `Carrinho`.

- `useNavigate`: O hook `useNavigate` é usado para realizar a navegação entre diferentes páginas da aplicação. Como o botão `Avançar` na página de Login, que redireciona o usuário para a página de Feira, também no `ícone de carrinho`, que encaminha o usuário para a página de Carrinho.

### Boas Práticas e Responsividade

- `Boas Práticas`: A aplicação foi construída seguindo boas práticas de desenvolvimento e arquitetura, com base no princípio da responsabilidade única.

- `Media queries`: Implementa `Media Queries` com o intuito de aplicar responsividade à aplicação, adaptando-se a diferentes tamanhos de tela. Ele mantém uma experiência de usuário agradável em dispositivos móveis, tablets e desktops.

## :computer: Ferramentas utilizadas

| React | Context API | React Router | Styled Components | 
| ----- | ---------- | ------------ | ----------------- |
<img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> | <img height="50px" src="https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/63e05b70-6218-455f-b37d-f5d888cd3748"> | <img height="50px" src="https://github.com/GabrielVeroneze/react-blog/assets/95183901/e4274260-9415-408e-9757-5f2277c42a29"> | <img height="50px" src="https://github.com/GabrielVeroneze/feira-virtual/assets/95183901/17447cac-f50e-4b9a-91bf-52617c28a16f">

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/feira-virtual/archive/refs/heads/master.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/feira-virtual.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd meu-projeto
   ```
3. Antes de iniciar a aplicação, instale as dependências necessárias executando o seguinte comando:
   ```
   npm install
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Isso irá instalar todas as dependências listadas no arquivo package.json.

4. Após a instalação das dependências, inicie o servidor de desenvolvimento executando o seguinte comando:
   ```
   npm start
   ```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Isso abrirá automaticamente a aplicação no navegador. Se não abrir, acesse o endereço http://localhost:3000.
<br>

## Demonstração Visual
`Páginas de Início e Sobre mim`
![Feira Virtual](https://imgur.com/NQQhA5Y.gif)

`Posts`
![Feira Virtual](https://imgur.com/8X0FlpW.gif)

`Posts recomendados`
![Feira Virtual](https://imgur.com/cOwL7RV.gif)

`Página não encontrada`
![React Blog](https://github.com/GabrielVeroneze/react-blog/assets/95183901/673b4456-aae4-44e0-a92a-19af63f176dd)
