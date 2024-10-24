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

const physicsQuestions = [
    {
        question: "What is Newton's first law?",
        options: ["Inertia", "Action-Reaction", "Gravity", "Mass"],
        answer: "Inertia"
    },
    {
        question: "What is the SI unit of force?",
        options: ["Newton", "Pascal", "Joule", "Watt"],
        answer: "Newton"
    },
    {
        question: "What is the acceleration due to gravity on Earth?",
        options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.6 m/s²"],
        answer: "9.8 m/s²"
    },
    {
        question: "What type of energy is stored in a stretched or compressed spring?",
        options: ["Kinetic energy", "Thermal energy", "Elastic potential energy", "Chemical energy"],
        answer: "Elastic potential energy"
    },
    {
        question: "What is the law of conservation of energy?",
        options: ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy is always lost as heat"],
        answer: "Energy cannot be created or destroyed"
    },
    {
        question: "What is the formula for kinetic energy?",
        options: ["KE = 1/2 mv²", "KE = mv", "KE = mg", "KE = 1/2 mgh"],
        answer: "KE = 1/2 mv²"
    },
    {
        question: "Which type of wave is sound?",
        options: ["Transverse", "Longitudinal", "Electromagnetic", "Mechanical"],
        answer: "Longitudinal"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["3 x 10^8 m/s", "3 x 10^7 m/s", "1 x 10^8 m/s", "2 x 10^8 m/s"],
        answer: "3 x 10^8 m/s"
    },
    {
        question: "What is Ohm's law?",
        options: ["V = IR", "P = IV", "F = ma", "E = mc²"],
        answer: "V = IR"
    },
    {
        question: "What is the unit of electric charge?",
        options: ["Volt", "Ampere", "Coulomb", "Ohm"],
        answer: "Coulomb"
    },
    {
        question: "Which law describes the relationship between pressure and volume in gases?",
        options: ["Boyle's Law", "Charles's Law", "Newton's Law", "Ohm's Law"],
        answer: "Boyle's Law"
    },
    {
        question: "What is the name of the force that opposes the motion of objects through the air?",
        options: ["Friction", "Tension", "Air resistance", "Gravitational force"],
        answer: "Air resistance"
    },
    {
        question: "What is the main principle behind Archimedes' principle?",
        options: ["Buoyancy", "Gravity", "Inertia", "Pressure"],
        answer: "Buoyancy"
    },
    {
        question: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Displacement", "Speed"],
        answer: "Speed"
    },
    {
        question: "What is the potential difference measured in?",
        options: ["Ampere", "Volt", "Joule", "Watt"],
        answer: "Volt"
    },
    {
        question: "What kind of lens can converge light rays?",
        options: ["Concave", "Convex", "Plane", "Flat"],
        answer: "Convex"
    },
    {
        question: "What is the unit of power?",
        options: ["Watt", "Joule", "Newton", "Volt"],
        answer: "Watt"
    },
    {
        question: "What does the slope of a velocity-time graph represent?",
        options: ["Displacement", "Acceleration", "Force", "Speed"],
        answer: "Acceleration"
    },
    {
        question: "Which fundamental force is responsible for the structure of the atom?",
        options: ["Electromagnetic force", "Gravitational force", "Strong nuclear force", "Weak nuclear force"],
        answer: "Electromagnetic force"
    },
    {
        question: "What is the formula for work done?",
        options: ["W = Fd", "W = mg", "W = mv", "W = 1/2 mv²"],
        answer: "W = Fd"
    }
];

const chemistryQuestions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H₂O", "CO₂", "O₂", "N₂"],
        answer: "H₂O"
    },
    {
        question: "What is the pH of a neutral solution?",
        options: ["7", "1", "14", "5"],
        answer: "7"
    },
    {
        question: "Which element has the chemical symbol 'Na'?",
        options: ["Sodium", "Nitrogen", "Neon", "Nickel"],
        answer: "Sodium"
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen"
    },
    {
        question: "Which subatomic particle has a negative charge?",
        options: ["Proton", "Electron", "Neutron", "Photon"],
        answer: "Electron"
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["12", "6", "8", "4"],
        answer: "6"
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "H₂O", "CO₂"],
        answer: "NaCl"
    },
    {
        question: "Which type of bond involves the sharing of electron pairs between atoms?",
        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        answer: "Covalent"
    },
    {
        question: "What is the molar mass of water (H₂O)?",
        options: ["18 g/mol", "16 g/mol", "20 g/mol", "24 g/mol"],
        answer: "18 g/mol"
    },
    {
        question: "Which gas is commonly known as laughing gas?",
        options: ["Nitrogen", "Nitrogen Dioxide", "Nitrous Oxide", "Ozone"],
        answer: "Nitrous Oxide"
    },
    {
        question: "What is the main component of natural gas?",
        options: ["Propane", "Butane", "Methane", "Ethane"],
        answer: "Methane"
    },
    {
        question: "What is the valency of hydrogen?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "Which process is used to separate a mixture of liquids based on their boiling points?",
        options: ["Filtration", "Distillation", "Crystallization", "Sublimation"],
        answer: "Distillation"
    },
    {
        question: "What is the chemical formula for glucose?",
        options: ["C₆H₁₂O₆", "CH₄", "C₂H₆", "C₇H₁₄O₇"],
        answer: "C₆H₁₂O₆"
    },
    {
        question: "What is the name of the process by which plants make their food using sunlight?",
        options: ["Respiration", "Glycolysis", "Photosynthesis", "Fermentation"],
        answer: "Photosynthesis"
    },
    {
        question: "Which element is a noble gas?",
        options: ["Hydrogen", "Oxygen", "Helium", "Chlorine"],
        answer: "Helium"
    },
    {
        question: "What is the common name for H₂SO₄?",
        options: ["Sulfuric Acid", "Hydrochloric Acid", "Nitric Acid", "Acetic Acid"],
        answer: "Sulfuric Acid"
    },
    {
        question: "What is the oxidation state of oxygen in water (H₂O)?",
        options: ["-1", "-2", "+1", "0"],
        answer: "-2"
    },
    {
        question: "What is the chemical formula of ethanol?",
        options: ["C₂H₅OH", "CH₄", "C₆H₁₂O₆", "C₄H₁₀"],
        answer: "C₂H₅OH"
    },
    {
        question: "Which of the following is an alkali metal?",
        options: ["Potassium", "Calcium", "Iron", "Zinc"],
        answer: "Potassium"
    }
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
        document.getElementById('quizContent').classList.remove('hidden'); // Show the quiz section
        startPhysicsQuiz();  // Call the function to start the physics quiz
    } else if (subject === 'kimia') {
        document.getElementById('quizContent').classList.remove('hidden'); // Show the quiz section
        startChemistryQuiz();  // Call the function to start the chemistry quiz
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

function startPhysicsQuiz() {
    const shuffledQuestions = physicsQuestions.sort(() => 0.5 - Math.random()); // Shuffle questions
    selectedQuestions = shuffledQuestions.slice(0, 5); // Pick 5 random questions
    currentQuestionIndex = 0;
    score = 0;
    displayPhysicsQuestion(); // Call the function to display the first question
}

function startChemistryQuiz() {
    const shuffledQuestions = chemistryQuestions.sort(() => 0.5 - Math.random()); // Shuffle questions
    selectedQuestions = shuffledQuestions.slice(0, 5); // Pick 5 random questions
    currentQuestionIndex = 0;
    score = 0;
    displayChemistryQuestion(); // Call the function to display the first question
}

function startChemistryQuiz() {
    const shuffledQuestions = chemistryQuestions.sort(() => 0.5 - Math.random()); // Shuffle questions
    selectedQuestions = shuffledQuestions.slice(0, 5); // Pick 5 random questions
    currentQuestionIndex = 0;
    score = 0;
    displayChemistryQuestion(); // Call the function to display the first question
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

function displayPhysicsQuestion() {
    const quizContainer = document.getElementById('quizContent');
    const question = selectedQuestions[currentQuestionIndex];
    
    quizContainer.innerHTML = `
        <h3>Physics Quiz</h3>
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}"> ${option}
            </label><br>
        `).join('')}
        <button onclick="submitPhysicsAnswer()">Submit</button>
    `;
}

function displayChemistryQuestion() {
    const quizContainer = document.getElementById('quizContent');
    const question = selectedQuestions[currentQuestionIndex];
    
    quizContainer.innerHTML = `
        <h3>Chemistry Quiz</h3>
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${option}"> ${option}
            </label><br>
        `).join('')}
        <button onclick="submitChemistryAnswer()">Submit</button>
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

function submitPhysicsAnswer() {
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
        displayPhysicsQuestion(); // Show the next question
    } else {
        showPhysicsQuizResults(); // Show results after 5 questions
    }
}

function submitChemistryAnswer() {
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
        displayChemistryQuestion(); // Show the next question
    } else {
        showChemistryQuizResults(); // Show results after 5 questions
    }
}


function showPhysicsQuizResults() {
    const quizContainer = document.getElementById('quizContent');
    quizContainer.innerHTML = `
        <h3>Quiz Completed</h3>
        <p>You answered ${score} out of 5 questions correctly.</p>
        <button onclick="startPhysicsQuiz()">Restart Quiz</button>
    `;
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

function showChemistryQuizResults() {
    const quizContainer = document.getElementById('quizContent');
    quizContainer.innerHTML = `
        <h3>Quiz Completed</h3>
        <p>You answered ${score} out of 5 questions correctly.</p>
        <button onclick="startChemistryQuiz()">Restart Quiz</button>
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
