const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
 const perguntas = [
    {
        enunciado: "A inteligência artificial está cada vez mais presente na escola, no trabalho e no nosso dia a dia. Na sua opinião, como devemos usar a IA?",
        alternativas: [
            {
                texto: "Usar a IA como uma ferramenta para aprender, pesquisar e desenvolver novas ideias.",
                afirmacao: "Você tem um perfil inovador e acredita que a tecnologia pode ser uma grande aliada para ampliar o conhecimento."
            },
            {
                texto: "Usar a IA com limites e sempre verificar as informações antes de confiar nelas.",
                afirmacao: "Você é cuidadoso e responsável, valorizando a tecnologia, mas sem deixar de lado o pensamento crítico."
            }
        ]
    },

    {
        enunciado: "A inteligência artificial pode realizar tarefas que antes eram feitas exclusivamente por pessoas. Como você acredita que devemos lidar com essa mudança no mercado de trabalho?",
        alternativas: [
            {
                texto: "Investir na educação e preparar as pessoas para trabalhar junto com as novas tecnologias.",
                afirmacao: "Você pensa no futuro e acredita que conhecimento e adaptação são fundamentais para enfrentar as mudanças tecnológicas."
            },
            {
                texto: "Criar regras para garantir que a tecnologia não substitua pessoas de forma injusta.",
                afirmacao: "Você valoriza a responsabilidade social e acredita que o avanço tecnológico deve respeitar os direitos e oportunidades das pessoas."
            }
        ]
    },

    {
        enunciado: "A IA consegue analisar grandes quantidades de informações e ajudar em decisões importantes. Você confiaria em uma inteligência artificial para tomar decisões que afetam a vida das pessoas?",
        alternativas: [
            {
                texto: "Sim, desde que exista supervisão humana e regras claras para controlar suas decisões.",
                afirmacao: "Você acredita no potencial da tecnologia, mas entende que a participação humana continua sendo essencial."
            },
            {
                texto: "Não totalmente, pois decisões importantes devem continuar sendo responsabilidade dos seres humanos.",
                afirmacao: "Você é prudente e acredita que a tecnologia deve servir às pessoas, sem substituir completamente o julgamento humano."
            }
        ]
    },

    {
        enunciado: "Imagine que uma IA possa criar imagens, músicas, textos e vídeos em poucos segundos. Como você vê essa capacidade?",
        alternativas: [
            {
                texto: "Como uma oportunidade para estimular a criatividade e ajudar artistas e criadores.",
                afirmacao: "Você possui uma visão criativa e vê a inteligência artificial como uma ferramenta capaz de abrir novas possibilidades."
            },
            {
                texto: "Como algo que precisa de regras para proteger os direitos e o trabalho dos criadores.",
                afirmacao: "Você valoriza a criatividade humana e acredita que a inovação deve acontecer respeitando autoria e propriedade intelectual."
            }
        ]
    },

    {
        enunciado: "A inteligência artificial também pode ser usada para combater problemas ambientais, como o desperdício de energia e as mudanças climáticas. Qual seria a melhor maneira de utilizá-la?",
        alternativas: [
            {
                texto: "Usar a IA para encontrar soluções sustentáveis e tornar o consumo de recursos mais eficiente.",
                afirmacao: "Você tem uma visão sustentável e acredita que a tecnologia pode ajudar a construir um futuro melhor para o planeta."
            },
            {
                texto: "Priorizar tecnologias que causem menos impactos ambientais durante sua criação e funcionamento.",
                afirmacao: "Você pensa de forma consciente e entende que o desenvolvimento tecnológico também precisa considerar seus impactos no meio ambiente."
            }
        ]
    },

    {
        enunciado: "Com o avanço da IA, dados pessoais podem ser utilizados para criar experiências cada vez mais personalizadas. O que deve ser prioridade nesse cenário?",
        alternativas: [
            {
                texto: "Proteger a privacidade das pessoas e permitir que elas escolham como seus dados serão utilizados.",
                afirmacao: "Você valoriza a privacidade e acredita que as pessoas devem ter controle sobre suas próprias informações."
            },
            {
                texto: "Utilizar os dados para melhorar os serviços, mas seguindo leis e regras de segurança.",
                afirmacao: "Você busca equilíbrio entre inovação e segurança, acreditando que a tecnologia pode avançar com responsabilidade."
            }
        ]
    }
];
