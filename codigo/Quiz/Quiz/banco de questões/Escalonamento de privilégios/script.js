const questions = [
    {
        question: "O que é escalonamento de privilégios?",
        options: ["A técnica de aumentar a prioridade de processos de baixo nível", "A ação de um usuário mal-intencionado ganhar acesso a níveis mais altos de permissão", "O processo de reduzir os privilégios de um usuário para aumentar a segurança"],
        answer: 1
    },
    {
        question: "Como um vírus pode explorar a escalonamento de privilégios?",
        options: ["Ao solicitar permissões de administrador para um aplicativo legítimo", "Ao executar código malicioso com privilégios elevados", "Ao desativar atualizações automáticas do sistema"],
        answer: 2
    },
    {
        question: "Qual medida pode ajudar a prevenir a escalonamento de privilégios?",
        options: ["Executar todos os programas como administrador", "Usar senhas fortes e autenticação de dois fatores", "Desativar o software antivírus para evitar falsos positivos"],
        answer: 1
    }
];


let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    optionsElement.innerHTML = '';

    current.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('quiz-option');
        optionElement.setAttribute('data-index', index);
        optionElement.onclick = () => checkAnswer(index);
        optionsElement.appendChild(optionElement);
    });

    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.question-container').style.display = 'block';
}

function checkAnswer(index) {
    const selectedOption = document.querySelector(`.quiz-option[data-index="${index}"]`);
    const correctAnswerIndex = questions[currentQuestion].answer;

    if (index === correctAnswerIndex) {
        selectedOption.classList.add('correct');
        score++;
    } else {
        selectedOption.classList.add('incorrect');
    }

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector('.question-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;

    if (score === questions.length) {
        document.getElementById('congratsMessage').style.display = 'block';
    } else {
        document.getElementById('retryButton').style.display = 'block';
        document.getElementById('homeButton').style.display = 'block';
    }
}

function goToMainPage() {
    window.location.href = "EscalonamentoQuiz.html"; //MODIFICAR ISSO PARA A PARTE DO GABRIEL
}

function goToQuiz() {
    window.location.href = "EscalonamentoQuiz.html";
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    hideCongratsMessage();
    showQuestion();
}

function hideCongratsMessage() {
    document.getElementById('congratsMessage').style.display = 'none';
}


function hideResult() {
    document.getElementById('result').style.display = 'none';
}