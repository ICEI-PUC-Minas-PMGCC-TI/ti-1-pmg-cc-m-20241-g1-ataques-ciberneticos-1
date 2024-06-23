const questions = [
    {
        question: "O que é malvertising?",
        options: ["Publicidade que promove produtos legítimos", "Uso de anúncios online para distribuir malware", "Uma técnica de marketing para aumentar a visibilidade de um site"],
        answer: 1
    },
    {
        question: "Qual é um dos principais riscos do malvertising?",
        options: ["Aumento do tráfego de um site", "Exposição de usuários a malware sem a interação deles", "Redução dos custos de publicidade online"],
        answer: 1
    },
    {
        question: "Como os usuários podem se proteger contra malvertising?",
        options: ["Utilizando bloqueadores de anúncios e mantendo software atualizado", "Clicando em todos os anúncios para verificar sua autenticidade", "Desativando os navegadores de internet"],
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
    window.location.href = "MalvertisingQuiz.html"; //MODIFICAR ISSO PARA A PARTE DO GABRIEL
}

function goToQuiz() {
    window.location.href = "MalvertisingQuiz.html"; //MODIFICAR
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