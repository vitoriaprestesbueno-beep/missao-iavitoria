const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

{
    enunciado: "Qual atividade você prefere?",
    alternativas: [
        {
            texto: "Resolver problemas e desafios.",
            afirmacao: "Você gosta de pensar de forma lógica e estratégica."
        },
        {
            texto: "Criar desenhos, vídeos ou projetos.",
            afirmacao: "Sua criatividade é seu maior talento."
        }
    ]
},

{
    enunciado: "Como você trabalha melhor?",
    alternativas: [
        {
            texto: "Em equipe.",
            afirmacao: "Você sabe colaborar e compartilhar ideias."
        },
        {
            texto: "Sozinho.",
            afirmacao: "Você possui bastante autonomia."
        }
    ]
},

{
    enunciado: "Qual matéria você mais gosta?",
    alternativas: [
        {
            texto: "Matemática.",
            afirmacao: "Você tem facilidade com cálculos e raciocínio."
        },
        {
            texto: "Artes.",
            afirmacao: "Você gosta de criar coisas novas."
        }
    ]
},

{
    enunciado: "O que faria em um projeto?",
    alternativas: [
        {
            texto: "Organizaria tudo.",
            afirmacao: "Você possui perfil de liderança."
        },
        {
            texto: "Criaria o design.",
            afirmacao: "Você gosta de inovar visualmente."
        }
    ]
},

{
    enunciado: "Qual profissão chama mais sua atenção?",
    alternativas: [
        {
            texto: "Engenheiro(a).",
            afirmacao: "Você tem perfil voltado para tecnologia e inovação."
        },
        {
            texto: "Designer.",
            afirmacao: "Você gosta de criar experiências e projetos criativos."
        }
    ]
}

];

let atual = 0;
let historiaFinal = "";

function mostraPergunta(){

    if(atual >= perguntas.length){
        mostrarResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach(alternativa => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.onclick = () => {

            historiaFinal += alternativa.afirmacao + " ";
            atual++;
            mostraPergunta();

        }

        caixaAlternativas.appendChild(botao);

    });

}

function mostrarResultado(){

    caixaPerguntas.textContent = "Resultado Final";

    textoResultado.textContent =
    historiaFinal +
    " Continue desenvolvendo suas habilidades, pois elas podem ajudá-lo a escolher uma carreira que combine com seu perfil.";

    caixaAlternativas.textContent = "";

}

mostraPergunta();