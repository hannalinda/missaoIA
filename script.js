const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// ===============================
// PERGUNTAS
// ===============================

const perguntas = [
    {
        enunciado:
            "Quando você percebe que está passando por um período de muito estresse, o que costuma fazer?",

        alternativas: [
            {
                texto:
                    "Tento continuar normalmente e deixo para pensar nisso depois.",

                afirmacao:
                    "Você pode estar acostumado(a) a seguir em frente mesmo quando está sobrecarregado(a). Perceber seus limites e dar espaço para o descanso pode ser um passo importante."
            },

            {
                texto:
                    "Procuro entender o que estou sentindo e faço algo que me ajude a relaxar.",

                afirmacao:
                    "Você demonstra uma boa percepção das próprias emoções e entende que reconhecer o estresse é importante para cuidar de si."
            }
        ]
    },

    {
        enunciado:
            "Quando algo está incomodando você emocionalmente, como costuma lidar com seus sentimentos?",

        alternativas: [
            {
                texto:
                    "Prefiro guardar para mim e tentar resolver tudo sozinho(a).",

                afirmacao:
                    "Você parece valorizar sua independência, mas também pode se beneficiar de compartilhar o que sente com alguém de confiança quando estiver difícil."
            },

            {
                texto:
                    "Converso com alguém de confiança ou procuro uma maneira saudável de expressar o que sinto.",

                afirmacao:
                    "Você reconhece que expressar sentimentos pode aliviar o peso emocional e fortalecer os relacionamentos."
            }
        ]
    },

    {
        enunciado:
            "Como você costuma cuidar de si depois de um dia cansativo?",

        alternativas: [
            {
                texto:
                    "Continuo minhas atividades sem reservar muito tempo para descansar.",

                afirmacao:
                    "Sua rotina pode estar bastante ocupada. Lembre-se de que descanso não é perda de tempo: ele também faz parte do cuidado com a saúde mental."
            },

            {
                texto:
                    "Procuro descansar, ouvir música, conversar, praticar um hobby ou fazer algo que me faça bem.",

                afirmacao:
                    "Você entende a importância de reservar momentos para si e encontra maneiras positivas de recarregar as energias."
            }
        ]
    },

    {
        enunciado:
            "Quando você comete um erro, como costuma falar consigo mesmo(a)?",

        alternativas: [
            {
                texto:
                    "Sou bastante crítico(a) comigo e fico pensando no erro por muito tempo.",

                afirmacao:
                    "Você pode estar cobrando muito de si. Aprender com os erros é importante, mas se tratar com compreensão também faz parte do autocuidado."
            },

            {
                texto:
                    "Tento entender o que aconteceu, aprender com o erro e seguir em frente.",

                afirmacao:
                    "Você demonstra autocompaixão e entende que cometer erros faz parte do processo de aprendizado."
            }
        ]
    },

    {
        enunciado:
            "Qual destas atitudes mais combina com a forma como você estabelece seus limites?",

        alternativas: [
            {
                texto:
                    "Tenho dificuldade para dizer não porque não quero decepcionar outras pessoas.",

                afirmacao:
                    "Você demonstra consideração pelas pessoas, mas aprender a estabelecer limites pode ajudar a preservar sua energia e seu bem-estar."
            },

            {
                texto:
                    "Procuro dizer não quando algo ultrapassa meus limites, mesmo que seja difícil.",

                afirmacao:
                    "Você reconhece que estabelecer limites é uma forma importante de respeitar suas próprias necessidades."
            }
        ]
    },

    {
        enunciado:
            "Como está sua relação com o sono e o descanso?",

        alternativas: [
            {
                texto:
                    "Frequentemente durmo pouco ou deixo o descanso de lado por causa de outras atividades.",

                afirmacao:
                    "Sua rotina pode estar deixando pouco espaço para o descanso. Ter momentos adequados de sono e recuperação é importante para o bem-estar físico e emocional."
            },

            {
                texto:
                    "Procuro manter uma rotina que permita dormir e descansar adequadamente.",

                afirmacao:
                    "Você reconhece que descanso e sono fazem parte de uma rotina de autocuidado e podem contribuir para o equilíbrio emocional."
            }
        ]
    },

    {
        enunciado:
            "Se uma pessoa próxima estivesse passando por um momento emocional difícil, o que você faria?",

        alternativas: [
            {
                texto:
                    "Tentaria resolver o problema por ela e dar uma solução imediatamente.",

                afirmacao:
                    "Você demonstra preocupação com as pessoas, mas às vezes ouvir sem julgar pode ser mais importante do que encontrar uma solução imediata."
            },

            {
                texto:
                    "Escutaria com atenção, demonstraria apoio e incentivaria a pessoa a buscar ajuda se necessário.",

                afirmacao:
                    "Você demonstra empatia e entende que oferecer escuta e apoio pode fazer uma grande diferença para alguém que está passando por dificuldades."
            }
        ]
    },

    {
        enunciado:
            "Quando percebe que não está conseguindo lidar sozinho(a) com uma situação emocional, o que você faria?",

        alternativas: [
            {
                texto:
                    "Continuaria tentando resolver tudo sozinho(a), mesmo estando muito sobrecarregado(a).",

                afirmacao:
                    "Você pode ter o hábito de enfrentar tudo por conta própria. Lembre-se de que pedir ajuda não é sinal de fraqueza, mas uma atitude de cuidado consigo mesmo(a)."
            },

            {
                texto:
                    "Procuraria alguém de confiança ou um profissional que pudesse me ajudar.",

                afirmacao:
                    "Você entende que buscar apoio é uma atitude de responsabilidade e cuidado com a própria saúde mental."
            }
        ]
    }
];

// ===============================
// VARIÁVEIS DO QUIZ
// ===============================

let atual = 0;
let historiaFinal = "";


// ===============================
// MOSTRAR PERGUNTA
// ===============================

function mostraPergunta() {

    // Verifica se o quiz terminou
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    // Atualiza a pergunta
    caixaPerguntas.textContent =
        perguntaAtual.enunciado;

    // Limpa alternativas anteriores
    caixaAlternativas.innerHTML = "";

    // Atualiza contador
    atualizarContador();

    // Cria os botões
    mostraAlternativas();
}


// ===============================
// CONTADOR
// ===============================

function atualizarContador() {

    let contador =
        document.querySelector(".contador-pergunta");

    // Cria o contador apenas uma vez
    if (!contador) {

        contador =
            document.createElement("div");

        contador.classList.add(
            "contador-pergunta"
        );

        contador.style.marginBottom = "15px";
        contador.style.color = "#2BDEFD";
        contador.style.fontSize = "0.85rem";
        contador.style.fontWeight = "700";
        contador.style.letterSpacing = "1px";

        caixaPerguntas.parentNode.insertBefore(
            contador,
            caixaPerguntas
        );
    }

    contador.textContent =
        `PERGUNTA ${atual + 1} DE ${perguntas.length}`;
}


// ===============================
// MOSTRAR ALTERNATIVAS
// ===============================

function mostraAlternativas() {

    const perguntaAtual =
        perguntas[atual];

    for (
        const alternativa
        of perguntaAtual.alternativas
    ) {

        const botaoAlternativas =
            document.createElement("button");

        botaoAlternativas.textContent =
            alternativa.texto;

        botaoAlternativas.addEventListener(
            "click",
            () => respostaSelecionada(alternativa)
        );

        caixaAlternativas.appendChild(
            botaoAlternativas
        );
    }
}


// ===============================
// RESPOSTA SELECIONADA
// ===============================

function respostaSelecionada(
    opcaoSelecionada
) {

    // Adiciona a reflexão ao resultado final
    historiaFinal +=
        opcaoSelecionada.afirmacao + " ";

    // Vai para a próxima pergunta
    atual++;

    // Mostra a próxima pergunta
    mostraPergunta();
}


// ===============================
// MOSTRAR RESULTADO
// ===============================

function mostraResultado() {

    // Esconde o contador
    const contador =
        document.querySelector(
            ".contador-pergunta"
        );

    if (contador) {
        contador.style.display = "none";
    }

    // Muda o título
    caixaPerguntas.textContent =
        "🌱 Olha só o que suas respostas mostram sobre você!";

    // Mostra o resultado
    textoResultado.innerHTML = `
        <p>${historiaFinal}</p>

        <p style="margin-top: 20px;">
            💙 <strong>
            Lembre-se: cuidar da saúde mental é um processo.
            </strong>
        </p>

        <p style="margin-top: 10px;">
            Este quiz é apenas uma reflexão sobre seus hábitos
            e sentimentos. Ele não substitui uma avaliação de
            um profissional de saúde mental.
        </p>
    `;

    // Exibe a caixa de resultado
    caixaResultado.style.display =
        "block";

    // Remove os botões anteriores
    caixaAlternativas.innerHTML = "";

    // Cria botão de reiniciar
    criarBotaoReiniciar();
}


// ===============================
// BOTÃO REINICIAR
// ===============================

function criarBotaoReiniciar() {

    // Evita criar dois botões
    if (
        document.querySelector(
            ".botao-reiniciar"
        )
    ) {
        return;
    }

    const botaoReiniciar =
        document.createElement("button");

    botaoReiniciar.textContent =
        "🔄 Fazer o quiz novamente";

    botaoReiniciar.classList.add(
        "botao-reiniciar"
    );

    botaoReiniciar.addEventListener(
        "click",
        reiniciarQuiz
    );

    caixaAlternativas.appendChild(
        botaoReiniciar
    );
}


// ===============================
// REINICIAR QUIZ
// ===============================

function reiniciarQuiz() {

    atual = 0;
    historiaFinal = "";

    // Esconde resultado
    caixaResultado.style.display =
        "none";

    // Limpa resultado
    textoResultado.textContent = "";

    // Mostra novamente o quiz
    mostraPergunta();
}


// ===============================
// INICIAR QUIZ
// ===============================

mostraPergunta();
