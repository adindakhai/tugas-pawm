// Pool of 20 questions for the Mathematics quiz
const mathQuestions = [
    { question: "What is the derivative of f(x) = 3x²?", options: ["6x", "3x", "6", "x"], answer: "6x" },
    { question: "What is the integral of f(x) = x?", options: ["x²/2", "x", "1", "x²"], answer: "x²/2" },
    { question: "Solve for x: 2x + 5 = 11", options: ["x = 3", "x = 6", "x = -3", "x = 4"], answer: "x = 3" },
    { question: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?", options: ["1", "2", "0", "Does not exist"], answer: "2" },
    { question: "What is sin(90°)?", options: ["0", "1", "-1", "0.5"], answer: "1" },
    { question: "What is cos(0°)?", options: ["1", "0", "-1", "0.5"], answer: "1" },
    { question: "Solve: x² - 4 = 0", options: ["x = 2", "x = -2", "x = ±2", "x = 0"], answer: "x = ±2" },
    { question: "What is the value of π?", options: ["3.141", "3.14", "22/7", "All of the above"], answer: "All of the above" },
    { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-sin(x)", "tan(x)", "sec(x)"], answer: "cos(x)" },
    { question: "What is the integral of 1/x?", options: ["ln|x|", "1/x²", "x", "log(x)"], answer: "ln|x|" },
    { question: "Solve: log₂(8) = ?", options: ["2", "3", "4", "1"], answer: "3" },
    { question: "What is tan(45°)?", options: ["1", "0", "√2", "-1"], answer: "1" },
    { question: "Solve: 3x - 4 = 5", options: ["x = 3", "x = 4", "x = 5", "x = 6"], answer: "x = 3" },
    { question: "What is the value of e (Euler's number)?", options: ["2.71", "3.14", "1.62", "1.41"], answer: "2.71" },
    { question: "What is the square root of 16?", options: ["4", "8", "2", "6"], answer: "4" },
    { question: "Solve: x² + 4x + 4 = 0", options: ["x = -2", "x = 2", "x = ±2", "x = 0"], answer: "x = -2" },
    { question: "What is sin(30°)?", options: ["0.5", "1", "-0.5", "0"], answer: "0.5" },
    { question: "What is cos(180°)?", options: ["-1", "0", "1", "-0.5"], answer: "-1" },
    { question: "Solve: 5x - 2 = 3x + 8", options: ["x = 5", "x = 4", "x = 6", "x = 2"], answer: "x = 5" },
    { question: "What is the derivative of x³?", options: ["3x²", "x²", "2x", "3x"], answer: "3x²" }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Function to load quiz based on selected subject
function loadQuiz(subject) {
    if (subject === 'matematika') {
        document.getElementById('quizContent').classList.remove('hidden'); // Show the quiz section
        startMathQuiz();  // Call the function to start the math quiz
    } else if (subject === 'fisika') {
        loadPhysicsQuiz();
    } else if (subject === 'kimia') {
        loadChemistryQuiz();
    }
}

// Function to start the Math Quiz
function startMathQuiz() {
    const shuffledQuestions = mathQuestions.sort(() => 0.5 - Math.random()); // Shuffle questions
    selectedQuestions = shuffledQuestions.slice(0, 5); // Pick 5 random questions
    currentQuestionIndex = 0;
    score = 0;
    displayMathQuestion(); // Call the function to display the first question
}

// Function to display a Math question
function displayMathQuestion() {
    const quizContainer = document.getElementById('quizContent');
    const question = selectedQuestions[currentQuestionIndex];
    
    quizContainer.innerHTML = `
        <h3>Mathematics Quiz</h3>
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}"> ${option}
            </label><br>
        `).join('')}
        <button onclick="submitMathAnswer()">Submit</button>
    `;
}

// Function to handle Math answer submission
function submitMathAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert("Please select an answer before proceeding.");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        displayMathQuestion(); // Show the next question
    } else {
        showMathQuizResults(); // Show results after 5 questions
    }
}

// Function to show the Math quiz results
function showMathQuizResults() {
    const quizContainer = document.getElementById('quizContent');
    quizContainer.innerHTML = `
        <h3>Quiz Completed</h3>
        <p>You answered ${score} out of 5 questions correctly.</p>
        <button onclick="startMathQuiz()">Restart Quiz</button>
    `;
}

// Physics quiz logic (can be expanded similarly to math)
function loadPhysicsQuiz() {
    document.getElementById('quizContent').innerHTML = `
        <h3>Physics Quiz</h3>
        <p>1. What is Newton's first law?</p>
        <input type="radio" name="q1" value="A"> Inertia<br>
        <input type="radio" name="q1" value="B"> Action-Reaction<br>
        <input type="radio" name="q1" value="C"> Gravity<br>
        <input type="radio" name="q1" value="D"> Mass<br><br>
        <button onclick="submitPhysicsAnswer()">Submit</button>
    `;
    document.getElementById('quizContent').classList.remove('hidden');
}

// Chemistry quiz logic (can be expanded similarly to math)
function loadChemistryQuiz() {
    document.getElementById('quizContent').innerHTML = `
        <h3>Chemistry Quiz</h3>
        <p>1. What is the chemical symbol for water?</p>
        <input type="radio" name="q1" value="A"> H₂O<br>
        <input type="radio" name="q1" value="B"> CO₂<br>
        <input type="radio" name="q1" value="C"> O₂<br>
        <input type="radio" name="q1" value="D"> N₂<br><br>
        <button onclick="submitChemistryAnswer()">Submit</button>
    `;
    document.getElementById('quizContent').classList.remove('hidden');
}
