const storyData = {
    soldier: [
        {
            text: "Você é um soldado na Operação Overlord, Normandia, 6 de junho de 1944. Seu LCVP se aproxima de Omaha Beach sob intenso fogo alemão. O que faz?",
            choices: ["Liderar a primeira onda de assalto", "Esperar cobertura de artilharia naval"],
            image: "images/soldier.jpg",
            points: [5, 3],
            context: "A Operação Overlord foi o maior desembarque anfíbio da história, com mais de 156.000 tropas aliadas."
        },
        {
            text: "Durante a Operação Market Garden (Setembro 1944), seu pelotão está isolado perto de Arnhem. Os suprimentos estão acabando. O que faz?",
            choices: ["Organizar missão noturna de resgate", "Racionar suprimentos e manter posição"],
            image: "images/soldier.jpg",
            points: [2, 4],
            context: "A Operação Market Garden foi uma tentativa ambiciosa de encerrar a guerra em 1944, mas falhou devido a forte resistência alemã."
        },
        {
            text: "Na Batalha das Ardenas (Dezembro 1944), você está cercado com temperatura de -20°C. O que faz?",
            choices: ["Manter posição defensiva em Bastogne", "Recuar para linha de suprimentos"],
            image: "images/soldier.jpg",
            points: [5, 3],
            context: "A Batalha das Ardenas foi a última grande ofensiva alemã no Oeste, em condições climáticas extremas."
        },
        {
            text: "Durante a liberação do campo de concentração de Dachau (Abril 1945), encontra guardas SS rendidos. O que faz?",
            choices: ["Seguir Convenção de Genebra", "Permitir retaliação"],
            image: "images/soldier.jpg",
            points: [5, 2],
            context: "A descoberta dos campos de concentração revelou a extensão dos crimes nazistas."
        },
        {
            text: "Final: Berlim, Maio 1945. A cidade está cercada pelo Exército Vermelho. O que faz?",
            choices: ["Coordenar rendição organizada", "Resistir até último homem"],
            image: "images/soldier.jpg",
            points: [5, 1],
            isFinal: true,
            context: "A Batalha de Berlim marcou o fim da guerra na Europa, com suicídio de Hitler em 30 de abril."
        }
    ],
    civilian: [
        {
            text: "Londres, 1940-41: Durante o Blitz, sirenes alertam sobre bombardeio. Você tem uma família com crianças pequenas. O que faz?",
            choices: ["Liderar grupo ao abrigo Anderson", "Permanecer em casa com proteções"],
            image: "images/civilian.jpg",
            points: [4, 5],
            context: "O Blitz foi uma campanha de bombardeios que durou 8 meses, matando mais de 40.000 civis britânicos."
        },
        {
            text: "1942: Com racionamento severo, você descobre mercado negro de alimentos. Sua família está com fome. O que faz?",
            choices: ["Organizar cooperativa comunitária", "Comprar do mercado negro"],
            image: "images/civilian.jpg",
            points: [5, 2],
            context: "O racionamento no Reino Unido continuou até 1954, afetando profundamente a vida civil."
        },
        {
            text: "1943: Você encontra família judia escondida. A Gestapo está fazendo buscas na vizinhança. O que faz?",
            choices: ["Oferecer esconderijo arriscado", "Fingir que não viu nada"],
            image: "images/civilian.jpg",
            points: [5, 1],
            context: "Milhares de civis arriscaram suas vidas para salvar judeus do Holocausto."
        },
        {
            text: "1944: Sua cidade foi liberada, mas colaboradores são identificados. O que faz?",
            choices: ["Defender julgamento justo", "Apoiar justiça popular"],
            image: "images/civilian.jpg",
            points: [5, 2],
            context: "O período pós-libertação foi marcado por acertos de contas com colaboradores."
        },
        {
            text: "Final: 1945: A guerra acabou, mas sua cidade está em ruínas. O que faz?",
            choices: ["Liderar esforços de reconstrução", "Emigrar para América"],
            image: "images/civilian.jpg",
            points: [5, 3],
            isFinal: true,
            context: "A reconstrução da Europa levou décadas e foi auxiliada pelo Plano Marshall."
        }
    ],
    leader: [
        {
            text: "Julho 1940: Como Winston Churchill, a RAF está em desvantagem na Batalha da Grã-Bretanha. O que faz?",
            choices: ["Priorizar defesa de aeródromos", "Aceitar proposta de paz de Hitler"],
            image: "images/leader.jpg",
            points: [5, 2],
            context: "A vitória na Batalha da Grã-Bretanha impediu a invasão nazista da ilha."
        },
        {
            text: "Dezembro 1941: Pearl Harbor foi atacada. Como responder ao pedido de aliança dos EUA?",
            choices: ["Aliança total com América", "Focar apenas na Europa"],
            image: "images/leader.jpg",
            points: [5, 3],
            context: "A entrada dos EUA na guerra foi decisiva para a vitória aliada."
        },
        {
            text: "1943: Stalin exige abertura de segunda frente na Europa. O que faz?",
            choices: ["Planejar invasão da Sicília", "Adiar para fortalecer forças"],
            image: "images/leader.jpg",
            points: [5, 2],
            context: "A pressão soviética por uma segunda frente causou tensões entre aliados."
        },
        {
            text: "Fevereiro 1945: Conferência de Yalta discute pós-guerra. O que priorizar?",
            choices: ["Eleições livres no Leste Europeu", "Divisão de zonas de influência"],
            image: "images/leader.jpg",
            points: [4, 1],
            context: "Yalta estabeleceu as bases da Guerra Fria."
        },
        {
            text: "Final: Agosto 1945: Japão resiste após bombas atômicas. O que fazer?",
            choices: ["Buscar rendição negociada", "Apoiar mais ataques atômicos"],
            image: "images/leader.jpg",
            points: [5, 2],
            isFinal: true,
            context: "O uso de armas atômicas permanece controverso até hoje."
        }
    ]
};

let currentCharacter = '';
let currentStep = 0;
let score = 0;

function startGame() {
    // Reset all game states
    currentCharacter = '';
    currentStep = 0;
    score = 0;
    
    // Reset UI elements
    document.getElementById('restart-container').style.display = 'none';
    document.getElementById('score').textContent = 'Pontuação: 0';
    document.getElementById('game-image').src = 'images/soldier.jpg';
    document.getElementById('game-image').style.display = 'none';
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';
    
    // Show character selection
    showCharacterSelection();
}

function showCharacterSelection() {
    const storyText = document.getElementById('story-text');
    storyText.innerHTML = `
        <p>Escolha seu personagem:</p>
        <button onclick="startStory('soldier')">🪖 Soldado</button>
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

    // Atribui os eventos
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
    
    // Character-specific endings
    if (currentCharacter === 'soldier') {
        if (score >= 20) {
            finalMessage = "Você se tornou um herói de guerra, respeitado por sua bravura e humanidade.";
        } else if (score >= 15) {
            finalMessage = "Você sobreviveu à guerra com honra e voltou para casa.";
        } else {
            finalMessage = "A guerra deixou cicatrizes profundas em sua alma.";
        }
    } else if (currentCharacter === 'civilian') {
        if (score >= 20) {
            finalMessage = "Sua resiliência e compaixão ajudaram muitas pessoas a sobreviver.";
        } else if (score >= 15) {
            finalMessage = "Você conseguiu manter sua humanidade em tempos difíceis.";
        } else {
            finalMessage = "A guerra mudou sua perspectiva sobre a vida para sempre.";
        }
    } else if (currentCharacter === 'leader') {
        if (score >= 20) {
            finalMessage = "Suas decisões sábias ajudaram a moldar um mundo mais pacífico.";
        } else if (score >= 15) {
            finalMessage = "Você manteve seu país unido durante a crise.";
        } else {
            finalMessage = "Suas decisões terão consequências duradouras na história.";
        }
    }
    if (score >= 20) {
        endingText = "🌟 VITÓRIA EXTRAORDINÁRIA!";
    } else if (score >= 15) {
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