const caixaPrincipal =
    document.querySelector(".caixa-principal");

const caixaPerguntas =
    document.querySelector(".caixa-perguntas");

const caixaAlternativas =
    document.querySelector(".caixa-alternativas");

const caixaResultado =
    document.querySelector(".caixa-resultado");

const textoResultado =
    document.querySelector(".texto-resultado");


// ==========================================
// PERGUNTAS SOBRE SAÚDE PÚBLICA
// ==========================================

const perguntas = [

    {
        enunciado:
            "Por que a saúde pública é importante para a sociedade?",

        alternativas: [

            {
                texto:
                    "Porque busca garantir acesso à saúde e melhorar a qualidade de vida da população.",

                afirmacao:
                    "Você entende que a saúde pública tem um papel fundamental na promoção do bem-estar e na garantia de cuidados de saúde para a população."
            },

            {
                texto:
                    "Porque atua somente no tratamento de pessoas que já estão doentes.",

                afirmacao:
                    "Você reconhece a importância do tratamento, mas a saúde pública também trabalha com prevenção, vacinação, educação em saúde e promoção da qualidade de vida."
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
                    "Você reconhece a importância do SUS e entende que o sistema atua em diferentes áreas da saúde, desde a prevenção até o tratamento."
            },

            {
                texto:
                    "Atender somente pessoas que não possuem condições de pagar por um serviço particular.",

                afirmacao:
                    "Você percebe a importância do atendimento gratuito, mas o SUS é um sistema público de saúde que atende a população de forma ampla."
            }

        ]
    },


    {
        enunciado:
            "Por que a vacinação é importante para a saúde pública?",

        alternativas: [

            {
                texto:
                    "Porque ajuda a prevenir doenças e reduz a circulação de alguns agentes infecciosos na população.",

                afirmacao:
                    "Você entende que a vacinação protege indivíduos e também contribui para a proteção coletiva."
            },

            {
                texto:
                    "Porque serve apenas para proteger a pessoa que recebe a vacina.",

                afirmacao:
                    "Você reconhece a proteção individual proporcionada pelas vacinas, mas elas também possuem grande importância para a saúde coletiva."
            }

        ]
    },


    {
        enunciado:
            "Como o saneamento básico contribui para a saúde pública?",

        alternativas: [

            {
                texto:
                    "Por meio do acesso à água tratada, coleta de esgoto, manejo de resíduos e outras condições adequadas.",

                afirmacao:
                    "Você reconhece que infraestrutura e saneamento são fundamentais para prevenir doenças e melhorar as condições de vida."
            },

            {
                texto:
                    "Principalmente deixando as cidades mais bonitas e organizadas.",

                afirmacao:
                    "Você percebe a importância da organização urbana, mas o saneamento possui também uma função essencial na prevenção de doenças."
            }

        ]
    },


    {
        enunciado:
            "Qual atitude ajuda a prevenir doenças na comunidade?",

        alternativas: [

            {
                texto:
                    "Manter hábitos de higiene, vacinação adequada e procurar atendimento quando necessário.",

                afirmacao:
                    "Você entende que atitudes individuais podem contribuir para a prevenção de doenças e para a proteção de toda a comunidade."
            },

            {
                texto:
                    "Procurar um serviço de saúde somente quando os sintomas estiverem muito graves.",

                afirmacao:
                    "Você reconhece a importância do atendimento, mas a prevenção e a procura adequada por orientação podem ajudar a evitar complicações."
            }

        ]
    },


    {
        enunciado:
            "Por que a atenção primária à saúde é importante?",

        alternativas: [

            {
                texto:
                    "Porque ajuda na prevenção, no acompanhamento da população e no cuidado próximo da comunidade.",

                afirmacao:
                    "Você compreende que a atenção primária é essencial para prevenir problemas, acompanhar pacientes e promover saúde."
            },

            {
                texto:
                    "Porque sua principal função é encaminhar todas as pessoas para hospitais.",

                afirmacao:
                    "Você reconhece a importância dos encaminhamentos, mas a atenção primária também resolve diversos problemas de saúde e trabalha com prevenção."
            }

        ]
    },


    {
        enunciado:
            "Qual é a importância da educação em saúde?",

        alternativas: [

            {
                texto:
                    "Ajudar as pessoas a conhecer formas de prevenção e tomar decisões mais conscientes sobre sua saúde.",

                afirmacao:
                    "Você reconhece que informação e educação podem ajudar a população a prevenir doenças e cuidar melhor da própria saúde."
            },

            {
                texto:
                    "Informar as pessoas somente quando ocorre uma emergência de saúde.",

                afirmacao:
                    "Você reconhece a importância da informação em situações de emergência, mas a educação em saúde deve acontecer continuamente."
            }

        ]
    },


    {
        enunciado:
            "O que a população pode fazer para contribuir com a saúde pública?",

        alternativas: [

            {
                texto:
                    "Adotar atitudes preventivas, cuidar do ambiente, manter a vacinação adequada e utilizar os serviços de saúde de forma consciente.",

                afirmacao:
                    "Você entende que a saúde pública depende não apenas do governo e dos profissionais, mas também da participação da população."
            },

            {
                texto:
                    "Deixar todas as questões relacionadas à saúde somente para os governos e profissionais.",

                afirmacao:
                    "Você reconhece o papel dos governos e profissionais, mas a participação da população também é fundamental para construir comunidades mais saudáveis."
            }

        ]
    }

];


// ==========================================
// VARIÁVEIS
// ==========================================

let atual = 0;

let historiaFinal = "";


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function mostraPergunta() {

    if (atual >= perguntas.length) {

        mostraResultado();

        return;
    }

    const perguntaAtual =
        perguntas[atual];


    // Pergunta
    caixaPerguntas.textContent =
        perguntaAtual.enunciado;


    // Limpa alternativas anteriores
    caixaAlternativas.innerHTML = "";


    // Atualiza contador
    atualizarContador();


    // Mostra alternativas
    mostraAlternativas();
}


// ==========================================
// CONTADOR
// ==========================================

function atualizarContador() {

    let contador =
        document.querySelector(
            ".contador-pergunta"
        );


    if (!contador) {

        contador =
            document.createElement("div");


        contador.classList.add(
            "contador-pergunta"
        );


        caixaPerguntas.parentNode.insertBefore(
            contador,
            caixaPerguntas
        );
    }


    contador.textContent =
        `PERGUNTA ${atual + 1} DE ${perguntas.length}`;
}


// ==========================================
// MOSTRAR ALTERNATIVAS
// ==========================================

function mostraAlternativas() {

    const perguntaAtual =
        perguntas[atual];


    for (
        const alternativa
        of perguntaAtual.alternativas
    ) {

        const botao =
            document.createElement("button");


        botao.textContent =
            alternativa.texto;


        botao.type = "button";


        botao.addEventListener(
            "click",
            function () {

                respostaSelecionada(
                    alternativa
                );

            }
        );


        caixaAlternativas.appendChild(
            botao
        );
    }
}


// ==========================================
// RESPOSTA
// ==========================================

function respostaSelecionada(
    opcaoSelecionada
) {

    historiaFinal +=
        opcaoSelecionada.afirmacao + " ";


    atual++;


    mostraPergunta();
}


// ==========================================
// MOSTRAR RESULTADO
// ==========================================

function mostraResultado() {

    const contador =
        document.querySelector(
            ".contador-pergunta"
        );


    if (contador) {

        contador.style.display =
            "none";
    }


    caixaPerguntas.textContent =
        "🏥 Seu resultado sobre Saúde Pública";


    textoResultado.innerHTML = `

        <p>
            ${historiaFinal}
        </p>

        <p style="margin-top: 20px;">
            <strong>
                🌎 Saúde pública é responsabilidade de todos!
            </strong>
        </p>

        <p style="margin-top: 15px;">
            A prevenção de doenças, a vacinação, o saneamento
            básico, a educação em saúde e o acesso aos serviços
            de saúde são fundamentais para melhorar a qualidade
            de vida da população.
        </p>

        <p style="margin-top: 15px; font-size: 14px;">
            Este quiz possui finalidade educativa e não substitui
            orientações de profissionais de saúde.
        </p>

    `;


    caixaResultado.style.display =
        "block";


    caixaAlternativas.innerHTML = "";


    criarBotaoReiniciar();
}


// ==========================================
// BOTÃO REINICIAR
// ==========================================

function criarBotaoReiniciar() {

    if (
        document.querySelector(
            ".botao-reiniciar"
        )
    ) {

        return;
    }


    const botao =
        document.createElement("button");


    botao.textContent =
        "🔄 Fazer o quiz novamente";


    botao.classList.add(
        "botao-reiniciar"
    );


    botao.type = "button";


    botao.addEventListener(
        "click",
        reiniciarQuiz
    );


    caixaAlternativas.appendChild(
        botao
    );
}


// ==========================================
// REINICIAR
// ==========================================

function reiniciarQuiz() {

    atual = 0;

    historiaFinal = "";


    caixaResultado.style.display =
        "none";


    textoResultado.textContent =
        "";


    caixaAlternativas.innerHTML =
        "";


    mostraPergunta();
}


// ==========================================
// INICIAR QUIZ
// ==========================================

mostraPergunta();
