const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            {text: "4", correct: true},
            {text: "22", correct: false},
            {text: "44", correct: false},
            {text: "8", correct: false}
        ]
    },
    {
        question: "Who is the president of Nigeria?",
        answers: [
            {text: "Buhari", correct: false},
            {text: "Obasanjo", correct: false},
            {text: "Jonathan", correct: false},
            {text: "Tinubu", correct: true}
        ]
    },
    {
        question: "What is the capital of Nigeria?",
        answers: [
            {text: "Lagos", correct: false},
            {text: "Abuja", correct: true},
            {text: "Kano", correct: false},
            {text: "Ibadan", correct: false}
        ]
    },
    {
        question: "What is the biggest planet in the world?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Mars", correct: false},
            {text: "Mercury", correct: false}
        ]
    },

{
    question: "Which animal is considered as the king of the jungle?",
    answers: [
        {text: "Lion", correct: true},
        {text: "Tiger", correct: false},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false}
    ]
},
{
    question: "How many cat speeches are there?",
    answers: [
        {text: "1", correct: false},
        {text: "2", correct: false},
        {text: "3", correct: true},
        {text: "4", correct: false}
    ]
},
{
    question: "What is the smallest country in the world?",
    answers: [
        {text: "Nigeria", correct: false},
        {text: "USA", correct: false},
        {text: "China", correct: false},
        {text: "Vatican City", correct: true}
    ]
},
{
    question: "Who is a software developer?",
    answers: [
        {text: "Bill Gates", correct: false},
        {text: "Mark Zuckerberg", correct: false},
        {text: "Elon Musk", correct: false},
        {text: "All of the above", correct: true}
    ]
},
{
    question: "What is the capital of Lagos?",
    answers: [
        {text: "Ikorodu", correct: false},
        {text: "Epe", correct: false},
        {text: "Ikeja", correct: true},
        {text: "Lekki", correct: false}
    ]
},
{
    question: "Who is the president of US?",
    answers: [
        {text: "Trump", correct: false},
        {text: "Obama", correct: false},
        {text: "Biden", correct: true},
        {text: "Bush", correct: false}
    ]
},
{
    question: "What is the capital of US?",
    answers: [
        {text: "New York", correct: false},
        {text: "Washington DC", correct: true},
        {text: "California", correct: false},
        {text: "Texas", correct: false}
    ]
},
{
    question: "What is the capital of China?",
    answers: [
        {text: "Beijing", correct: true},
        {text: "Shanghai", correct: false},
        {text: "Hong Kong", correct: false},
        {text: "Wuhan", correct: false}
    ]
},
{
    question: "What is the ruling party in Nigeria?",
    answers: [
        {text: "PDP", correct: false},
        {text: "APGA", correct: false},
        {text: "APC", correct: true},
        {text: "ADC", correct: false}
    ]
},
{
    question: "Who is the minister of education in Nigeria?",
    answers: [
        {text: "Osinbajo", correct: false},
        {text: "Adamu Adamu", correct: true},
        {text: "Fashola", correct: false},
        {text: "Amaechi", correct: false}
    ]
},
{
    question: "Who is the minister of finance in Nigeria?",
    answers: [
        {text: "Osinbajo", correct: false},
        {text: "Adamu Adamu", correct: false},
        {text: "Fashola", correct: false},
        {text: "Zainab Ahmed", correct: true}
    ]
}
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-button");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const itsCorrect = selectedBtn.dataset.correct === "true";
    if (itsCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("wrongAnswer");
    }
    Array.from(answerElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showTotal();
    }
}

function showTotal() {
    resetState();
    questionElement.innerHTML = "Your score is " + score + " out of " + questions.length;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";
}

startQuiz();