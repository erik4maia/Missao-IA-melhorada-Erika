const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual a abertura mais usada no xadez atualmente?",
        alternativas: [
            {
                texto: " Abertura Ruy Lopez (Espanhola)",
                afirmacao: [
                    "Oferece um equilíbrio entre ataque e defesa, dando oportunidades para jogo posicional. ",
                    "É uma abertura clássica que permite à brancas controlar o centro e desenvolver suas peças de maneira sólida.",
                    "Frequente em partidas de alto nível, pode levar a estruturas complexas e profundas que exigem muita preparação teórica.",
                ]
            {
                texto: " Abertura Siciliana ",
                afirmacao: " Tem como objetivo desequilibrar o jogo, evitando as linhas simétricas e levando a um jogo assimétrico ",
                "É uma das respostas mais agressivas para 1.e4, oferecendo várias opções de desenvolvimento para as pretas.",
                "Embora complexa, a Siciliana oferece grande potencial de contra-ataque, especialmente nas variantes como a Najdorf ou a Dragon.",
            }
        ]
    },
    {
        enunciado: " Qual a jogada que proporciona um mate mais rápido?",
        alternativas: [
            {
                texto: " Mate do Louco (Fool’s Mate) ",
                afirmacao: "Serve para mostrar a importância de proteger o rei e não abrir as diagonais perigosamente. ",
            },
            {
                texto: " Mate do Pastor (Scholar’s Mate) ",
                afirmacao: "  Ensina a importância de defender os pontos fracos e o valor do desenvolvimento rápido.",
            }
        ]
    },
    {
        enunciado: "  Qual o maior torneio de xadrez atualmente?",
        alternativas: [
            {
                texto: " Tata Steel Chess Tournament ",
                afirmacao: " Reúne os melhores jogadores do mundo para competir em um formato de todos contra todos.",
            },
            {
                texto: " Grand Chess Tour ",
                afirmacao: " Reúne os melhores jogadores do mundo em partidas rápidas, clássicas e blitz. ",
            }
        ]
    },
    {
        enunciado: " Qual a peça mais usadas durante as partidas?",
        alternativas: [
            {
                texto: " Dama ",
                afirmacao: " A peça mais poderosa, que pode se mover em qualquer direção e quantas casas quiser, sendo fundamental para ataques e defesa. ",
            },
            {
                texto: " Peão ",
                afirmacao: " Essencial para controlar o centro do tabuleiro, abrir caminhos para outras peças e criar estruturas estratégicas.",
            }
        ]
    },
    {
        enunciado: " No xadrez, controlar o centro do tabuleiro (as casas d4, d5, e4 e e5) é tão importante para uma boa estratégia?",
        alternativas: [
            {
                texto: " Sim.",
                afirmacao: "Controlar o centro do tabuleiro no xadrez é crucial porque permite uma maior mobilidade das peças, maior controle do jogo e maior capacidade de atacar. ",
            },
            {
                texto: " Não ",
                afirmacao: " Controlar o centro no xadrez não é importante, já que você pode atacar diretamente pelas bordas do tabuleiro e criar uma estratégia com peças mais distantes. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Após avaliar suas respostas, o seu perfil profissional é:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();