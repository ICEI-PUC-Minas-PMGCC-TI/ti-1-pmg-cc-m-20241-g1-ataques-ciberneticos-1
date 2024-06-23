const questions = [
    {
        question: "O que é um ataque de negação de serviço (DoS)?",
        options: ["Um método para melhorar a velocidade da rede", "Uma tentativa de tornar um serviço indisponível ao sobrecarregar o sistema", "Uma técnica de compressão de dados para aumentar a eficiência"],
        answer: 1
    },
    {
        question: "Qual das opções a seguir é um sintoma comum de um ataque de DoS?",
        options: ["Aumento na velocidade de navegação", "Diminuição no tempo de resposta do servidor", "Acesso mais fácil a recursos de rede"],
        answer: 1
    },
    {
        question: "Como as empresas podem se proteger contra ataques de negação de serviço?",
        options: ["Implementando firewalls e sistemas de detecção de intrusões", "Desativando o antivírus para reduzir a carga do sistema", "Compartilhando as senhas de administrador"],
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
    window.location.href = "licoes.html"; //MODIFICAR ISSO PARA A PARTE DO GABRIEL
}

function goToQuiz() {
    window.location.href = "AtaquesQuiz.html";
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