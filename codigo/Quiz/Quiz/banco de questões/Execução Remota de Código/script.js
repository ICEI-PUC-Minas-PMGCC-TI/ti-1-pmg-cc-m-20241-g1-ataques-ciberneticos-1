const questions = [
    {
        question: "O que é execução remota de código (RCE)?",
        options: ["A execução de código malicioso em um sistema remoto sem autorização", "A técnica de atualizar software de forma remota", "Um método para proteger dados através de criptografia"],
        answer: 0
    },
    {
        question: "Qual é um dos principais riscos associados à execução remota de código?",
        options: ["Aumento na velocidade de processamento do sistema", "Controle completo do sistema afetado por um atacante", "Melhoria na segurança do sistema"],
        answer: 1
    },
    {
        question: "Como prevenir ataques de execução remota de código?",
        options: ["Mantendo o software atualizado e aplicando patches de segurança", "Desativando o antivírus", "Compartilhando senhas entre os funcionários"],
        answer: 0
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
    window.location.href = "ExecuçãoRemotaQuiz.html"; //MODIFICAR ISSO PARA A PARTE DO GABRIEL
}

function goToQuiz() {
    window.location.href = "ExecuçãoRemotaQuiz.html";
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