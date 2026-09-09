const caixaPerguntas =
    document.querySelector(".caixa-perguntas");

const caixaAlternativas =
    document.querySelector(".caixa-alternativas");

const caixaResultado =
    document.querySelector(".caixa-resultado");

const textoResultado =
    document.querySelector(".texto-resultado");

const numeroPergunta =
    document.querySelector(".numero-pergunta");

const barraProgresso =
    document.querySelector(".barra-progresso");

const botaoReiniciar =
    document.querySelector(".botao-reiniciar");


let atual = 0;

let perguntaAtual;

let historiaFinal = "";


/* MOSTRA A PERGUNTA */

function mostraPergunta() {

    if (atual >= perguntas.length) {

        mostraResultado();

        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent =
        perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    numeroPergunta.textContent =
        `Momento ${atual + 1} de ${perguntas.length}`;

    const progresso =
        (atual / perguntas.length) * 100;

    barraProgresso.style.width =
        `${progresso}%`;

    mostraAlternativas();
}


/* CRIA OS BOTÕES */

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativa =
            document.createElement("button");

        botaoAlternativa.textContent =
            alternativa.texto;

        botaoAlternativa.addEventListener(
            "click",
            () => respostaSelecionada(alternativa)
        );

        caixaAlternativas.appendChild(
            botaoAlternativa
        );
    }
}


/* REGISTRA A ESCOLHA */

function respostaSelecionada(
    opcaoSelecionada
) {

    const consequencia =
        opcaoSelecionada.consequencia;

    historiaFinal +=
        consequencia + "\n\n";

    atual++;

    mostraPergunta();
}


/* MOSTRA O RESULTADO */

function mostraResultado() {

    barraProgresso.style.width = "100%";

    numeroPergunta.textContent =
        "Sua jornada";

    caixaPerguntas.textContent =
        "Ao olhar para todas as suas escolhas, você percebe que cada decisão teve uma consequência.";

    caixaAlternativas.textContent = "";

    textoResultado.textContent =
        historiaFinal +
        "No final, você descobriu que cuidar da saúde e do bem-estar é uma jornada feita de pequenas escolhas todos os dias.";

    caixaResultado.style.display =
        "block";
}


/* REINICIA O QUIZ */

function reiniciarQuiz() {

    atual = 0;

    historiaFinal = "";

    caixaResultado.style.display =
        "none";

    mostraPergunta();
}


botaoReiniciar.addEventListener(
    "click",
    reiniciarQuiz
);


/* INICIA A HISTÓRIA */

mostraPergunta();
