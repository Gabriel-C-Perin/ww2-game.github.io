const storyData = {
    soldier: [
        {
            text: "Você é um soldado na Normandia, 6 de junho de 1944. O que faz?",
            choices: ["Avançar com risco", "Esperar reforços"],
            image: "images/soldier.jpg",
            points: [5, 3]
        },
        {
            text: "Seu pelotão precisa de suprimentos. O que faz?",
            choices: ["Procurar nos vilarejos", "Racionar alimentos"],
            image: "images/soldier.jpg",
            points: [2, 4]
        },
        {
            text: "Está na Batalha das Ardenas, com frio intenso. O que faz?",
            choices: ["Defender posição", "Recuar estrategicamente"],
            image: "images/soldier.jpg",
            points: [5, 3]
        }
    ],
    civilian: [
        {
            text: "Você é um civil em Londres durante os ataques aéreos. O que faz?",
            choices: ["Abrigar-se no metrô", "Ficar em casa com família"],
            image: "images/civilian.jpg",
            points: [4, 5]
        },
        {
            text: "Falta comida no bairro. O que faz?",
            choices: ["Compartilhar com vizinhos", "Guardar para sua família"],
            image: "images/civilian.jpg",
            points: [5, 2]
        },
        {
            text: "Racionamento extremo chega à sua cidade. O que faz?",
            choices: ["Cumprir as regras", "Burla o sistema"],
            image: "images/civilian.jpg",
            points: [5, 1]
        }
    ],
    leader: [
        {
            text: "Você é Winston Churchill durante a Batalha da Grã-Bretanha. O que faz?",
            choices: ["Fortalecer defesas", "Propor acordo de paz"],
            image: "images/leader.jpg",
            points: [5, 2]
        },
        {
            text: "A população está cansada da guerra. O que faz?",
            choices: ["Discurso inspirador", "Prometer rendição se necessário"],
            image: "images/leader.jpg",
            points: [5, 3]
        },
        {
            text: "Você precisa decidir: aliar-se à URSS contra Hitler ou não. O que faz?",
            choices: ["Aliança temporária", "Manter distância"],
            image: "images/leader.jpg",
            points: [5, 2]
        }
    ]
};

let currentCharacter = '';
let currentStep = 0;
let score = 0;

function startGame() {
    currentStep = 0;
    score = 0;
    document.getElementById('restart-container').style.display = 'none';
    document.getElementById('score').textContent = 'Pontuação: 0';
    document.getElementById('restart-btn').style.display = 'none';
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
    if (score >= 15) {
        endingText = "🌟 Você demonstrou liderança, coragem e empatia. Parabéns!";
    } else if (score >= 10) {
        endingText = "✅ Suas decisões foram equilibradas, mas nem sempre eficazes.";
    } else {
        endingText = "⚠️ A guerra foi difícil. Reflita sobre os impactos das suas escolhas.";
    }

    document.getElementById('story-text').innerHTML = `
        <p>Fim da jornada!<br><br><strong>Pontuação final:</strong> ${score}</p>
        <p>${endingText}</p>
    `;
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';
    document.getElementById('restart-container').style.display = 'block';
}
    
