const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const barraProgresso =
    document.querySelector(".progresso");

const porcentagem =
    document.querySelector(".porcentagem");


// =========================================
// PERGUNTAS
// =========================================

const perguntas = [

    {
        enunciado:
            "Por que a saúde pública é importante para a sociedade?",

        alternativas: [

            {
                texto:
                    "Porque busca garantir que todas as pessoas tenham acesso aos cuidados de saúde.",

                afirmacao:
                    "Você reconhece que a saúde pública tem um papel fundamental na busca por acesso à saúde para toda a população."
            },

            {
                texto:
                    "Porque ajuda a prevenir doenças e melhorar a qualidade de vida da população.",

                afirmacao:
                    "Você percebe que saúde pública não significa apenas tratar doenças, mas também prevenir problemas e promover qualidade de vida."
            }

        ]
    },


    {
        enunciado:
            "Qual é uma das principais funções do Sistema Único de Saúde (SUS)?",

        alternativas: [

            {
                texto:
                    "Oferecer serviços de saúde à população, incluindo prevenção, atendimento e tratamento.",

                afirmacao:
                    "Você reconhece a importância do SUS como parte fundamental da saúde pública brasileira."
            },

            {
                texto:
                    "Atuar somente quando uma pessoa já está doente.",

                afirmacao:
                    "Você reconhece a importância do tratamento, mas o SUS também atua na prevenção, vacinação, acompanhamento e promoção da saúde."
            }

        ]
    },


    {
        enunciado:
            "Por que a vacinação é importante para a saúde pública?",

        alternativas: [

            {
                texto:
                    "Porque ajuda a proteger as pessoas e a reduzir a circulação de algumas doenças.",

                afirmacao:
                    "Você entende que a vacinação é uma das principais estratégias de prevenção e proteção coletiva."
            },

            {
                texto:
                    "Porque protege somente a pessoa que recebe a vacina.",

                afirmacao:
                    "A proteção individual é importante, mas a vacinação também pode contribuir para reduzir a transmissão de doenças na comunidade."
            }

        ]
    },


    {
        enunciado:
            "Como o saneamento básico está relacionado à saúde?",

        alternativas: [

            {
                texto:
                    "Água tratada, coleta de esgoto e manejo adequado de resíduos ajudam a prevenir doenças.",

                afirmacao:
                    "Você entende que as condições de saneamento têm relação direta com a prevenção de doenças e com a qualidade de vida."
            },

            {
                texto:
                    "O saneamento serve principalmente para deixar as cidades mais organizadas.",

                afirmacao:
                    "Você reconhece a importância da organização das cidades, mas o saneamento também é essencial para proteger a saúde da população."
            }

        ]
    },


    {
        enunciado:
            "Qual atitude pode contribuir para a prevenção de doenças?",

        alternativas: [

            {
                texto:
                    "Manter hábitos de higiene, vacinação atualizada e procurar orientação de saúde quando necessário.",

                afirmacao:
                    "Você reconhece que atitudes simples podem contribuir para prevenir doenças e proteger a comunidade."
            },

            {
                texto:
                    "Procurar atendimento somente quando os sintomas estiverem muito graves.",

                afirmacao:
                    "Você valoriza o atendimento médico, mas a prevenção e a busca adequada por orientação também podem evitar complicações."
            }

        ]
    },


    {
        enunciado:
            "Por que a atenção primária à saúde é importante?",

        alternativas: [

            {
                texto:
                    "Porque é uma importante porta de entrada para o sistema de saúde e trabalha com prevenção e acompanhamento.",

                afirmacao:
                    "Você entende que o cuidado com a saúde começa também pela prevenção e pelo acompanhamento próximo da população."
            },

            {
                texto:
                    "Porque serve principalmente para encaminhar todas as pessoas para hospitais.",

                afirmacao:
                    "Os encaminhamentos são importantes quando necessários, mas a atenção primária também realiza prevenção, acompanhamento e diversos cuidados."
            }

        ]
    },


    {
        enunciado:
            "Qual é a relação entre alimentação saudável e saúde pública?",

        alternativas: [

            {
                texto:
                    "Uma alimentação adequada pode ajudar na prevenção de doenças e melhorar a qualidade de vida.",

                afirmacao:
                    "Você reconhece que a alimentação é um dos fatores que podem contribuir para a promoção da saúde e prevenção de doenças."
            },

            {
                texto:
                    "A alimentação não possui nenhuma relação com a saúde coletiva.",

                afirmacao:
                    "As escolhas alimentares são individuais, mas fatores sociais, econômicos e ambientais também influenciam a alimentação e a saúde da população."
            }

        ]
    },


    {
        enunciado:
            "O que cada pessoa pode fazer para contribuir com a saúde pública?",

        alternativas: [

            {
                texto:
                    "Cuidar da própria saúde, prevenir doenças e utilizar os serviços de saúde de forma consciente.",

                afirmacao:
                    "Você entende que a saúde pública é uma responsabilidade compartilhada entre governos, profissionais e sociedade."
            },

            {
                texto:
                    "