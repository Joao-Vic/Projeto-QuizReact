const data = [
  {
    question: "Qual é uma boa prática ao lidar com variáveis em JavaScript",
    options: [
      "Declarar variáveis sem a palavra-chave 'var'.",
      "Usar 'var' para todas as variáveis.",
      "Utilizar 'let' e 'const' para declarar variáveis.",
      "Nunca declarar variáveis antes de usá-las",
    ],
    answer: "Utilizar 'let' e 'const' para declarar variáveis.",
  },
  {
    question: "Como é recomendado lidar com loops em JavaScript?",
    options: [
      "Sempre usar loops 'for' em vez de 'while' ou 'do-while'", 
      "Evitar o uso de loops para melhor desempenho", 
      "Utilizar apenas loops 'do-while' para garantir eficiência", 
      "Usar 'for...of' para iterar sobre elementos iteráveis."
    ],
    answer: "Usar 'for...of' para iterar sobre elementos iteráveis.",
  },
  {
    question: "Como é a abordagem recomendada para evitar vazamentos de memória em JavaScript?",
    options: [
      "Não se preocupar com vazamentos de memória, pois o JavaScript lida automaticamente com isso.", 
      "Sempre usar referências circulares para garantir uma melhor gestão de memória.", 
      "Utilizar closures e garantir a liberação de recursos não utilizados.", 
      "Não se preocupar em liberar recursos após o uso."
    ],
    answer: "Utilizar closures e garantir a liberação de recursos não utilizados.",
  },
  {
    question: "O que é uma prática recomendada para lidar com erros em JavaScript?",
    options: [
      "Ignorar silenciosamente os erros para não interromper a execução do código.", 
      "Utilizar sempre o bloco 'try...catch' para capturar exceções.", 
      "Não se preocupar com tratamento de erros, pois o JavaScript lida automaticamente com eles.", 
      "Não documentar ou fornecer mensagens de erro claras."
    ],
    answer: "Utilizar sempre o bloco 'try...catch' para capturar exceções.",
  },
  {
    question:
      "Qual é uma boa prática ao manipular o DOM em JavaScript?",
    options: [
      "Ignorar a criação de estrutura semântica no HTML.", 
      "Manipular o DOM diretamente sem criar funções específicas.", 
      "Usar métodos como 'innerHTML' para modificar grandes partes do DOM.", 
      "Utilizar funções separadas para manipulação do DOM."
    ],
    answer: "Utilizar funções separadas para manipulação do DOM.",
  },
  {
    question:
      "Qual é a melhor maneira de manipular arrays de forma imutável?",
    options: [
      "Utilização do método splice()",
      "Utilização do método push()",
      "Utilização do método concat()",
      "Utilização do métodopop()"
    ],
    answer: "Utilização do método concat()",
  },
  {
    question:
      "O que é o conceito de 'hoisting' em JavaScript?",
    options: [
      "Mover uma função para o início do código",
      "Mover uma variável para o escopo global",
      "Elevação de declarações para o topo do escopo",
      "Ignorar declarações de variáveis"
    ],
    answer: "Elevação de declarações para o topo do escopo",
  },
  {
    question:
      "Como você lidaria com assincronia em JavaScript?",
    options: [
      "Utilizando apenas callbacks",
      "Utilizando apenas promises",
      "Utilizando apenas async/await",
      "Uma combinação de callbacks, promises e async/await"
    ],
    answer: "Uma combinação de callbacks, promises e async/await",
  },
  {
    question:
      "Por que é uma boa prática evitar o uso de funções globais em JavaScript?",
    options: [
      "Funções globais consomem mais memória",
      "Dificultam a manutenção do código",
      "Podem causar conflitos de nomes",
      "Todas as opções anteriores"
    ],
    answer: "Todas as opções anteriores",
  },
  {
    question:
      "Qual é a vantagem de usar o operador ternário em comparação com uma estrutura if-else?",
    options: [
      "O operador ternário é mais legível",
      "O operador ternário ocupa menos espaço no código",
      "O operador ternário é mais eficiente em termos de desempenho",
      "Todas as opções anteriores"
    ],
    answer: "Todas as opções anteriores",
  },
];

export default data;
