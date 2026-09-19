# Nascimento

Projeto web em HTML, CSS e JavaScript para calcular informações relacionadas à data de nascimento de uma pessoa, como:

- idade;
- dia da semana de nascimento;
- mês por extenso;
- se o ano é bissexto;
- signo do zodíaco;
- mensagem de aniversário quando a data coincidir com o dia atual.

## Visão geral

Este projeto foi desenvolvido como uma página simples e interativa para receber dia, mês e ano de nascimento e exibir os dados em tempo real. A aplicação valida os campos e apresenta os resultados em um formulário visualmente organizado.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
Nascimento/
├── assets/
│   └── style.css
├── img/
│   ├── aquario.jpg
│   ├── aries.jpg
│   ├── cancer.jpg
│   ├── capricornio.jpg
│   ├── escorpiao.jpg
│   ├── gemeos.jpg
│   ├── leao.jpg
│   ├── libra.jpg
│   ├── peixes.jpg
│   ├── sagitario.jpg
│   ├── touro.jpg
│   └── virgem.jpg
├── js/
│   └── script.js
├── index.html
└── README.md
```

## Como executar

### Opção 1: abrir diretamente no navegador

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.

### Opção 2: executar em um servidor local

Se preferir, você pode utilizar um servidor local simples, por exemplo:

```bash
python -m http.server 8000
```

Em seguida, acesse:

```text
http://localhost:8000
```

## Como usar

1. Informe o dia de nascimento.
2. Informe o mês de nascimento.
3. Informe o ano de nascimento.
4. Clique em `Exibir`.
5. O sistema mostrará:
   - a idade;
   - o mês correspondente;
   - o dia da semana;
   - se o ano é bissexto;
   - o signo zodiacal;
   - a imagem referente ao signo.

## Lógica principal

A lógica de cálculo está no arquivo `js/script.js`. Ele realiza:

- validação dos dados informados;
- cálculo da idade com base na data atual;
- identificação do dia da semana a partir da data; 
- verificação de anos bissextos;
- associação do signo conforme a data de nascimento;
- exibição de uma mensagem de parabéns no aniversário.

## Observações

- O projeto é estático, portanto não há backend ou banco de dados.
- A interface foi desenvolvida de forma simples e responsiva para uso direto em navegador.
- As imagens dos signos estão armazenadas na pasta `img/` e são exibidas dinamicamente pelo JavaScript.

## Licença

Este projeto não especifica uma licença formal. Caso queira reutilizar ou publicar, é recomendável verificar com o autor antes de distribuir.

## Autor

Projeto mantido por `joao-dev-ds`.
