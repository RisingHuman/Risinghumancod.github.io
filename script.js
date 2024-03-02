const quizData = [
    {
        question: "What is 2 + 2?",
        answers: {
            a: "4",
            b: "3",
            c: "5"
        },
        correctAnswer: "a"
    },
    // Add more questions similarly
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function buildQuiz() {
    const output = [];

    quizData.forEach((question, index) => {
        const answers = [];

        for (const letter in question.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${letter}">
                    ${letter} : ${question.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${question.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResult() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === question.correctAnswer) {
            numCorrect++;
        }
    });

    resultContainer.innerHTML = `${numCorrect} out of ${quizData.length} correct`;
}

buildQuiz();

submitButton.addEventListener('click', showResult);
