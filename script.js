const storyData = {
    soldier: [
        {
            text: "Você é um soldado na Operação Overlord, Normandia, 6 de junho de 1944. Seu LCVP se aproxima de Omaha Beach sob intenso fogo alemão. O que faz?",
            choices: ["Esperar cobertura de artilharia naval", "Liderar a primeira onda de assalto"],
            image: "images/soldier.jpg",
            points: [3, 5],
            context: "A Operação Overlord foi o maior desembarque anfíbio da história, com mais de 156.000 tropas aliadas."
        },
        {
            text: "Durante a Operação Market Garden (Setembro 1944), seu pelotão está isolado perto de Arnhem. Os suprimentos estão acabando. O que faz?",
            choices: ["Racionar suprimentos e manter posição", "Organizar missão noturna de resgate"],
            image: "images/soldier.jpg",
            points: [4, 2],
            context: "A Operação Market Garden foi uma tentativa ambiciosa de encerrar a guerra em 1944, mas falhou devido a forte resistência alemã."
        },
        {
            text: "Na Batalha das Ardenas (Dezembro 1944), você está cercado com temperatura de -20°C. O que faz?",
            choices: ["Recuar para linha de suprimentos", "Manter posição defensiva em Bastogne"],
            image: "images/soldier.jpg",
            points: [3, 5],
            context: "A Batalha das Ardenas foi a última grande ofensiva alemã no Oeste, em condições climáticas extremas."
        },
        {
            text: "Durante a liberação do campo de concentração de Dachau (Abril 1945), encontra guardas SS rendidos. O que faz?",
            choices: ["Permitir retaliação", "Seguir Convenção de Genebra"],
            image: "images/soldier.jpg",
            points: [2, 5],
            context: "A descoberta dos campos de concentração revelou a extensão dos crimes nazistas."
        },
        {
            text: "Na batalha de Stalingrado, você encontra um soldado inimigo ferido. O que faz?",
            choices: ["Oferecer ajuda médica", "Ignorar e continuar avançando"],
            image: "images/soldier.jpg",
            points: [5, 2],
            context: "Mesmo em batalhas brutais, atos de humanidade ocorreram de ambos os lados."
        },
        {
            text: "Final: Berlim, Maio 1945. A cidade está cercada pelo Exército Vermelho. O que faz?",
            choices: ["Resistir até último homem", "Coordenar rendição organizada"],
            image: "images/soldier.jpg",
            points: [1, 5],
            isFinal: true,
            context: "A Batalha de Berlim marcou o fim da guerra na Europa, com suicídio de Hitler em 30 de abril."
        }
    ],
    civilian: [
        {
            text: "Londres, 1940-41: Durante o Blitz, sirenes alertam sobre bombardeio. Você tem uma família com crianças pequenas. O que faz?",
            choices: ["Permanecer em casa com proteções", "Liderar grupo ao abrigo Anderson"],
            image: "images/civilian.jpg",
            points: [3, 5],
            context: "O Blitz foi uma campanha de bombardeios que durou 8 meses, matando mais de 40.000 civis britânicos."
        },
        {
            text: "1942: Com racionamento severo, você descobre mercado negro de alimentos. Sua família está com fome. O que faz?",
            choices: ["Comprar do mercado negro", "Organizar cooperativa comunitária"],
            image: "images/civilian.jpg",
            points: [2, 5],
            context: "O racionamento no Reino Unido continuou até 1954, afetando profundamente a vida civil."
        },
        {
            text: "Você encontra propaganda nazista em sua vizinhança. O que faz?",
            choices: ["Remover discretamente", "Denunciar às autoridades"],
            image: "images/civilian.jpg",
            points: [3, 5],
            context: "A propaganda era uma ferramenta crucial na guerra."
        },
        {
            text: "1943: Você encontra família judia escondida. A Gestapo está fazendo buscas na vizinhança. O que faz?",
            choices: ["Fingir que não viu nada", "Oferecer esconderijo arriscado"],
            image: "images/civilian.jpg",
            points: [1, 5],
            context: "Milhares de civis arriscaram suas vidas para salvar judeus do Holocausto."
        },
        {
            text: "1944: Sua cidade foi liberada, mas colaboradores são identificados. O que faz?",
            choices: ["Apoiar justiça popular", "Defender julgamento justo"],
            image: "images/civilian.jpg",
            points: [2, 5],
            context: "O período pós-libertação foi marcado por acertos de contas com colaboradores."
        },
        {
            text: "Final: 1945: A guerra acabou, mas sua cidade está em ruínas. O que faz?",
            choices: ["Emigrar para América", "Liderar esforços de reconstrução"],
            image: "images/civilian.jpg",
            points: [3, 5],
            isFinal: true,
            context: "A reconstrução da Europa levou décadas e foi auxiliada pelo Plano Marshall."
        }
    ],
    leader: [
        {
            text: "Julho 1940: Como Winston Churchill, a RAF está em desvantagem na Batalha da Grã-Bretanha. O que faz?",
            choices: ["Aceitar proposta de paz de Hitler", "Priorizar defesa de aeródromos"],
            image: "images/leader.jpg",
            points: [2, 5],
            context: "A vitória na Batalha da Grã-Bretanha impediu a invasão nazista da ilha."
        },
        {
            text: "Dezembro 1941: Pearl Harbor foi atacada. Como responder ao pedido de aliança dos EUA?",
            choices: ["Focar apenas na Europa", "Aliança total com América"],
            image: "images/leader.jpg",
            points: [3, 5],
            context: "A entrada dos EUA na guerra foi decisiva para a vitória aliada."
        },
        {
            text: "1942: Cientistas propõem projeto de arma nuclear. O que fazer?",
            choices: ["Investir em armas convencionais", "Autorizar projeto Manhattan"],
            image: "images/leader.jpg",
            points: [2, 5],
            context: "A corrida nuclear mudou para sempre o cenário militar global."
        },
        {
            text: "1943: Stalin exige abertura de segunda frente na Europa. O que faz?",
            choices: ["Adiar para fortalecer forças", "Planejar invasão da Sicília"],
            image: "images/leader.jpg",
            points: [2, 5],
            context: "A pressão soviética por uma segunda frente causou tensões entre aliados."
        },
        {
            text: "1944: Resistência francesa pede apoio. Como ajudar?",
            choices: ["Enviar suprimentos limitados", "Organizar apoio massivo"],
            image: "images/leader.jpg",
            points: [3, 5],
            context: "A resistência francesa foi crucial para o sucesso do Dia D."
        },
        {
            text: "Final: Agosto 1945: Japão resiste após bombas atômicas. O que fazer?",
            choices: ["Apoiar mais ataques atômicos", "Buscar rendição negociada"],
            image: "images/leader.jpg",
            points: [2, 5],
            isFinal: true,
            context: "O uso de armas atômicas permanece controverso até hoje."
        }
    ]
};

let currentCharacter = '';
let currentStep = 0;
let score = 0;

function startGame() {
    currentCharacter = '';
    currentStep = 0;
    score = 0;
    
    document.getElementById('restart-container').style.display = 'none';
    document.getElementById('score').textContent = 'Pontuação: 0';
    document.getElementById('game-image').src = 'images/soldier.jpg';
    document.getElementById('game-image').style.display = 'none';
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';
    
    showCharacterSelection();
}

function showCharacterSelection() {
    const storyText = document.getElementById('story-text');
    storyText.innerHTML = `
        <p>Escolha seu personagem:</p>
        <button onclick="startStory('soldier')">⚔ Soldado</button>
        <button onclick="startStory('civilian')">🏠 Civil</button>
        <button onclick="startStory('leader')">🎩 Líder</button>
    `;
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';
    document.getElementById('game-image').style.display = 'none';
}

function startStory(character) {
    currentCharacter = character;
    currentStep = 0;
    score = 0;
    document.getElementById('game-image').style.display = 'block';
    nextScene();
}

function nextScene() {
    const story = storyData[currentCharacter];
    if (currentStep >= story.length) {
        showEnding();
        return;
    }

    const currentScene = story[currentStep];
    document.getElementById('story-text').textContent = currentScene.text;
    document.getElementById('choice1').textContent = currentScene.choices[0];
    document.getElementById('choice2').textContent = currentScene.choices[1];
    document.getElementById('game-image').src = currentScene.image;

    document.getElementById('choice1').style.display = 'inline-block';
    document.getElementById('choice2').style.display = 'inline-block';

    document.getElementById('choice1').onclick = () => {
        score += currentScene.points[0];
        updateScore();
        currentStep++;
        nextScene();
    };

    document.getElementById('choice2').onclick = () => {
        score += currentScene.points[1];
        updateScore();
        currentStep++;
        nextScene();
    };
}

function updateScore() {
    document.getElementById('score').textContent = `Pontuação: ${score}`;
}

function showEnding() {
    let endingText = '';
    let finalMessage = '';
    
    if (currentCharacter === 'soldier') {
        if (score >= 24) {
            finalMessage = "Você se tornou um herói de guerra, respeitado por sua bravura e humanidade.";
        } else if (score >= 18) {
            finalMessage = "Você sobreviveu à guerra com honra e voltou para casa.";
        } else {
            finalMessage = "A guerra deixou cicatrizes profundas em sua alma.";
        }
    } else if (currentCharacter === 'civilian') {
        if (score >= 24) {
            finalMessage = "Sua resiliência e compaixão ajudaram muitas pessoas a sobreviver.";
        } else if (score >= 18) {
            finalMessage = "Você conseguiu manter sua humanidade em tempos difíceis.";
        } else {
            finalMessage = "A guerra mudou sua perspectiva sobre a vida para sempre.";
        }
    } else if (currentCharacter === 'leader') {
        if (score >= 24) {
            finalMessage = "Suas decisões sábias ajudaram a moldar um mundo mais pacífico.";
        } else if (score >= 18) {
            finalMessage = "Você manteve seu país unido durante a crise.";
        } else {
            finalMessage = "Suas decisões terão consequências duradouras na história.";
        }
    }
    if (score >= 24) {
        endingText = "🌟 VITÓRIA EXTRAORDINÁRIA!";
    } else if (score >= 19) {
        endingText = "✅ VITÓRIA HONROSA";
    } else {
        endingText = "⚠️ SOBREVIVENTE";
    }
    document.getElementById('story-text').innerHTML = `
        <p>Fim da jornada!<br><br>
        <strong>${endingText}</strong><br>
        <strong>Pontuação final:</strong> ${score}<br><br>
        <em>${finalMessage}</em></p>
    `;
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';
    document.getElementById('restart-container').style.display = 'block';
}