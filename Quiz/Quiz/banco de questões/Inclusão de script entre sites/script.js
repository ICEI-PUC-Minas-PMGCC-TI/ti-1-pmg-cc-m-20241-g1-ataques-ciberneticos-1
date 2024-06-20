const questions = [
    {
        question: "O que é inclusão de script entre sites (Cross-Site Scripting, XSS)?",
        options: ["Uma técnica para melhorar o desempenho de sites", "Um tipo de vulnerabilidade que permite a injeção de scripts maliciosos em páginas web", "Um método para criptografar dados entre diferentes sites"],
        answer: 1
    },
    {
        question: "Qual é um dos principais riscos associados à inclusão de script entre sites (XSS)?",
        options: ["Roubo de cookies e informações sensíveis do usuário", "Aumento na velocidade de carregamento de páginas web", "Melhoria na experiência do usuário"],
        answer: 0
    },
    {
        question: "Como prevenir ataques de inclusão de script entre sites (XSS)?",
        options: ["Validando e escapando adequadamente as entradas do usuário", "Desativando o JavaScript no navegador", "Compartilhando credenciais de login entre diferentes usuários"],
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
    window.location.href = "InclusãoQuiz.html"; //MODIFICAR ISSO PARA A PARTE DO GABRIEL
}

function goToQuiz() {
    window.location.href = "InclusãoQuiz.html";
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