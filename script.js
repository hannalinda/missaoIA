/* =========================================
   PERGUNTAS DO QUIZ
========================================= */

const perguntas = [

    {
        pergunta:
            "Quais hábitos ajudam a manter uma boa saúde?",

        alternativas: [
            "Praticar atividade física",
            "Fumar regularmente",
            "Ter uma alimentação equilibrada",
            "Dormir apenas 2 horas por noite"
        ],

        corretas: [0, 2],

        explicacao:
            "A prática de atividade física e uma alimentação equilibrada são hábitos importantes para a manutenção da saúde."
    },


    {
        pergunta:
            "Quais atitudes ajudam na prevenção de doenças?",

        alternativas: [
            "Lavar as mãos corretamente",
            "Manter as vacinas em dia",
            "Evitar beber água",
            "Nunca procurar atendimento médico"
        ],

        corretas: [0, 1],

        explicacao:
            "A higiene das mãos ajuda a reduzir a transmissão de microrganismos, enquanto a vacinação ajuda a prevenir diversas doenças."
    },


    {
        pergunta:
            "Quais alimentos podem fazer parte de uma alimentação saudável?",

        alternativas: [
            "Frutas",
            "Verduras e legumes",
            "Refrigerantes em excesso",
            "Doces em todas as refeições"
        ],

        corretas: [0, 1],

        explicacao:
            "Frutas, verduras e legumes fornecem diferentes nutrientes importantes para o organismo e podem fazer parte de uma alimentação equilibrada."
    },


    {
        pergunta:
            "Quais atitudes podem ajudar na qualidade do sono?",

        alternativas: [
            "Manter horários regulares para dormir",
            "Criar um ambiente tranquilo para dormir",
            "Tomar muito café antes de dormir",
            "Usar telas durante toda a madrugada"
        ],

        corretas: [0, 1],

        explicacao:
            "Ter horários regulares e um ambiente adequado pode favorecer o sono. O excesso de cafeína e o uso prolongado de telas podem atrapalhar o descanso."
    },


    {
        pergunta:
            "Por que a água é importante para o organismo?",

        alternativas: [
            "Ajuda na hidratação",
            "Participa de várias funções do organismo",
            "Substitui completamente todos os alimentos",
            "Impede qualquer doença"
        ],

        corretas: [0, 1],

        explicacao:
            "A água é fundamental para a hidratação e participa de diversas funções do organismo. Porém, não substitui os alimentos e não impede todas as doenças."
    },


    {
        pergunta:
            "Quais atividades podem contribuir para uma vida mais ativa?",

        alternativas: [
            "Caminhar",
            "Andar de bicicleta",
            "Passar o dia inteiro sentado",
            "Evitar qualquer movimento"
        ],

        corretas: [0, 1],

        explicacao:
            "Caminhar e andar de bicicleta são exemplos de atividades físicas que podem contribuir para uma rotina mais ativa."
    },


    {
        pergunta:
            "Quais profissionais participam dos cuidados com a saúde?",

        alternativas: [
            "Médico",
            "Dentista",
            "Somente pessoas sem formação",
            "Nenhum profissional"
        ],

        corretas: [0, 1],

        explicacao:
            "Médicos e dentistas são profissionais de saúde, com diferentes áreas de atuação e funções no cuidado das pessoas."
    },


    {
        pergunta:
            "Quais atitudes ajudam a cuidar da saúde bucal?",

        alternativas: [
            "Escovar os dentes regularmente",
            "Usar fio dental",
            "Nunca escovar os dentes",
            "Consumir açúcar sem nenhum cuidado"
        ],

        corretas: [0, 1],

        explicacao:
            "A escovação e o uso do fio dental são importantes para a higiene bucal. Consultas com o dentista também fazem parte dos cuidados."
    },


    {
        pergunta:
            "Quais nutrientes são importantes para o funcionamento do organismo?",

        alternativas: [
            "Vitaminas",
            "Proteínas",
            "Somente açúcar",
            "Somente refrigerante"
        ],

        corretas: [0, 1],

        explicacao:
            "Vitaminas e proteínas desempenham funções importantes no organismo. Uma alimentação variada ajuda a fornecer diferentes nutrientes."
    },


    {
        pergunta:
            "Quais atitudes podem contribuir para uma vida saudável?",

        alternativas: [
            "Ter uma alimentação equilibrada",
            "Praticar atividades físicas",
            "Fumar diariamente",
            "Dormir sempre muito pouco"
        ],

        corretas: [0, 1],

        explicacao:
            "Uma alimentação equilibrada e a prática regular de atividades físicas podem contribuir para a saúde. O tabagismo e a privação frequente de sono podem prejudicar a saúde."
    }

];


/* =========================================
   ELEMENTOS DA PÁGINA
========================================= */

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const currentQuestionElement =
    document.getElementById("current-question");

const totalQuestionsElement =
    document.getElementById("total-questions");

const progressBar =
    document.getElementById("progress-bar");

const explanation =
    document.getElementById("explanation");

const explanationIcon =
    document.getElementById("explanation-icon");

const explanationTitle =
    document.getElementById("explanation-title");

const explanationText =
    document.getElementById("explanation-text");

const nextButton =
    document.getElementById("next-button");

const result =
    document.getElementById("result");

const finalScore =
    document.getElementById("final-score");

const percentage =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");


/* =========================================
   ESTADO DO QUIZ
========================================= */

let perguntaAtual = 0;

let pontuacao = 0;

let respondeu = false;


/* =========================================
   TOTAL DE PERGUNTAS
========================================= */

totalQuestionsElement.textContent =
    perguntas.length;


/* =========================================
   CARREGAR PERGUNTA
========================================= */

function carregarPergunta() {

    respondeu = false;

    const pergunta =
        perguntas[perguntaAtual];


    /* Número */

    currentQuestionElement.textContent =
        perguntaAtual + 1;


    /* Barra de progresso */

    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    progressBar.style.width =
        `${progresso}%`;


    /* Pergunta */

    questionElement.textContent =
        pergunta.pergunta;


    /* Limpar alternativas */

    answersElement.innerHTML = "";


    /* Esconder explicação */

    explanation.style.display =
        "none";


    explanation.className =
        "explanation";


    /* Botão */

    nextButton.style.display =
        "none";


    /*
    Cria as alternativas
    */

    pergunta.alternativas.forEach(
        (alternativa, indice) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.type =
                "button";


            /*
            Letras A, B, C, D
            */

            const letter =
                document.createElement("span");


            letter.className =
                "answer-letter";


            letter.textContent =
                String.fromCharCode(
                    65 + indice
                );


            /*
            Texto da alternativa
            */

            const text =
                document.createElement("span");


            text.textContent =
                alternativa;


            button.appendChild(letter);

            button.appendChild(text);


            /*
            Clique
            */

            button.addEventListener(
                "click",
                () => verificarResposta(
                    indice,
                    button
                )
            );


            answersElement.appendChild(
                button
            );

        }
    );

}


/* =========================================
   VERIFICAR RESPOSTA
========================================= */

function verificarResposta(
    indiceEscolhido,
    botaoEscolhido
) {

    if (respondeu) {
        return;
    }


    respondeu = true;


    const pergunta =
        perguntas[perguntaAtual];


    const acertou =
        pergunta.corretas.includes(
            indiceEscolhido
        );


    /*
    Se acertou, soma um ponto.
    */

    if (acertou) {

        pontuacao++;

    }


    /*
    Desabilita todos os botões.
    */

    const botoes =
        answersElement.querySelectorAll(
            ".answer"
        );


    botoes.forEach(
        (botao, indice) => {

            botao.disabled = true;


            /*
            Mostra as duas respostas corretas.
            */

            if (
                pergunta.corretas.includes(indice)
            ) {

                botao.classList.add(
                    "correct"
                );

            }


            /*
            Mostra a resposta errada
            escolhida pelo usuário.
            */

            if (
                indice === indiceEscolhido &&
                !acertou
            ) {

                botao.classList.add(
                    "wrong"
                );

            }

        }
    );


    /*
    Configura explicação.
    */

    if (acertou) {

        explanation.classList.add(
            "correct"
        );

        explanationIcon.textContent =
            "✓";

        explanationTitle.textContent =
            "Resposta correta!";

    } else {

        explanation.classList.add(
            "wrong"
        );

        explanationIcon.textContent =
            "×";

        explanationTitle.textContent =
            "Resposta incorreta!";

    }


    explanationText.textContent =
        pergunta.explicacao;


    explanation.style.display =
        "flex";


    /*
    Botão de próxima pergunta.
    */

    nextButton.style.display =
        "block";


    if (
        perguntaAtual ===
        perguntas.length - 1
    ) {

        nextButton.innerHTML =
            `Ver resultado <span>🏆</span>`;

    } else {

        nextButton.innerHTML =
            `Próxima pergunta <span>→</span>`;

    }

}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        perguntaAtual++;


        if (
            perguntaAtual <
            perguntas.length
        ) {

            carregarPergunta();

        } else {

            mostrarResultado();

        }

    }
);


/* =========================================
   RESULTADO
========================================= */

function mostrarResultado() {

    document.querySelector(
        ".quiz-top"
    ).style.display = "none";


    document.querySelector(
        ".question-area"
    ).style.display = "none";


    answersElement.style.display =
        "none";


    explanation.style.display =
        "none";


    nextButton.style.display =
        "none";


    result.style.display =
        "block";


    /*
    Pontuação
    */

    finalScore.textContent =
        pontuacao;


    /*
    Porcentagem
    */

    const porcentagem =
        Math.round(
            (pontuacao / perguntas.length) * 100
        );


    percentage.textContent =
        `${porcentagem}%`;


    /*
    Mensagem
    */

    if (porcentagem === 100) {

        resultMessage.textContent =
            "Incrível! Você acertou todas as perguntas e demonstrou excelentes conhecimentos sobre saúde. 🏆";

    } else if (porcentagem >= 70) {

        resultMessage.textContent =
            "Muito bem! Você demonstrou bons conhecimentos sobre saúde. Continue aprendendo! 💚";

    } else if (porcentagem >= 50) {

        resultMessage.textContent =
            "Bom trabalho! Você já conhece vários conceitos importantes sobre saúde. 📚";

    } else {

        resultMessage.textContent =
            "Continue estudando! Aprender sobre saúde é uma ótima forma de cuidar de si. 🌱";

    }

}


/* =========================================
   REINICIAR
========================================= */

restartButton.addEventListener(
    "click",
    () => {

        perguntaAtual = 0;

        pontuacao = 0;

        respondeu = false;


        document.querySelector(
            ".quiz-top"
        ).style.display = "flex";


        document.querySelector(
            ".question-area"
        ).style.display = "block";


        answersElement.style.display =
            "flex";


        result.style.display =
            "none";


        carregarPergunta();

    }
);


/* =========================================
   INICIAR
========================================= */

carregarPergunta();
