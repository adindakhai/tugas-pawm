// Pool of 20 questions for the Mathematics quiz
const mathQuestions = [
    { question: "What is the derivative of f(x) = 3x²?", options: ["6x", "3x", "6", "x"], answer: "6x", hint: "Use the power rule: derivative of x^n is n*x^(n-1)." },
    { question: "What is the integral of f(x) = x?", options: ["x²/2", "x", "1", "x²"], answer: "x²/2", hint: "The integral of x^n is (x^(n+1))/(n+1)." },
    { question: "Solve for x: 2x + 5 = 11", options: ["x = 3", "x = 6", "x = -3", "x = 4"], answer: "x = 3", hint: "Move constants to one side, then divide by the coefficient of x." },
    { question: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?", options: ["1", "2", "0", "Does not exist"], answer: "2", hint: "Factor the numerator (x² - 1) as (x-1)(x+1)." },
    { question: "What is sin(90°)?", options: ["0", "1", "-1", "0.5"], answer: "1", hint: "The sine of 90° is always 1 in trigonometry." },
    { question: "What is cos(0°)?", options: ["1", "0", "-1", "0.5"], answer: "1", hint: "Cosine of 0° is equal to 1 by definition." },
    { question: "Solve: x² - 4 = 0", options: ["x = 2", "x = -2", "x = ±2", "x = 0"], answer: "x = ±2", hint: "Factor the equation: (x-2)(x+2) = 0." },
    { question: "What is the value of π?", options: ["3.141", "3.14", "22/7", "All of the above"], answer: "All of the above", hint: "All these values are approximate values for π." },
    { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-sin(x)", "tan(x)", "sec(x)"], answer: "cos(x)", hint: "Derivative of sin(x) is cos(x)." },
    { question: "What is the integral of 1/x?", options: ["ln|x|", "1/x²", "x", "log(x)"], answer: "ln|x|", hint: "Integral of 1/x is the natural logarithm." },
    { question: "Solve: log₂(8) = ?", options: ["2", "3", "4", "1"], answer: "3", hint: "2 raised to what power equals 8? 2³ = 8." },
    { question: "What is tan(45°)?", options: ["1", "0", "√2", "-1"], answer: "1", hint: "Tan(45°) is the ratio of sin(45°) to cos(45°)." },
    { question: "Solve: 3x - 4 = 5", options: ["x = 3", "x = 4", "x = 5", "x = 6"], answer: "x = 3", hint: "Add 4 to both sides, then divide by 3." },
    { question: "What is the value of e (Euler's number)?", options: ["2.71", "3.14", "1.62", "1.41"], answer: "2.71", hint: "e is approximately 2.718." },
    { question: "What is the square root of 16?", options: ["4", "8", "2", "6"], answer: "4", hint: "Square of 4 is 16." },
    { question: "Solve: x² + 4x + 4 = 0", options: ["x = -2", "x = 2", "x = ±2", "x = 0"], answer: "x = -2", hint: "Factor it as (x + 2)(x + 2)." },
    { question: "What is sin(30°)?", options: ["0.5", "1", "-0.5", "0"], answer: "0.5", hint: "Sin(30°) is a common trigonometric value." },
    { question: "What is cos(180°)?", options: ["-1", "0", "1", "-0.5"], answer: "-1", hint: "Cos(180°) is negative one." },
    { question: "Solve: 5x - 2 = 3x + 8", options: ["x = 5", "x = 4", "x = 6", "x = 2"], answer: "x = 5", hint: "Move x terms to one side and constants to the other." },
    { question: "What is the derivative of x³?", options: ["3x²", "x²", "2x", "3x"], answer: "3x²", hint: "Use the power rule: derivative of x^n is n*x^(n-1)." }
];

const physicsQuestions = [
    { question: "What is Newton's first law?", options: ["Inertia", "Action-Reaction", "Gravity", "Mass"], answer: "Inertia", hint: "Objects in motion stay in motion, objects at rest stay at rest." },
    { question: "What is the SI unit of force?", options: ["Newton", "Pascal", "Joule", "Watt"], answer: "Newton", hint: "Named after Isaac Newton, related to F = ma." },
    { question: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.6 m/s²"], answer: "9.8 m/s²", hint: "It's approximately 9.8 m/s² on Earth's surface." },
    { question: "What type of energy is stored in a stretched or compressed spring?", options: ["Kinetic energy", "Thermal energy", "Elastic potential energy", "Chemical energy"], answer: "Elastic potential energy", hint: "Energy is stored due to the deformation of the spring." },
    { question: "What is the law of conservation of energy?", options: ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy is always lost as heat"], answer: "Energy cannot be created or destroyed", hint: "Energy changes form, but the total energy remains constant." },
    { question: "What is the formula for kinetic energy?", options: ["KE = 1/2 mv²", "KE = mv", "KE = mg", "KE = 1/2 mgh"], answer: "KE = 1/2 mv²", hint: "Kinetic energy depends on mass and the square of velocity." },
    { question: "Which type of wave is sound?", options: ["Transverse", "Longitudinal", "Electromagnetic", "Mechanical"], answer: "Longitudinal", hint: "Sound travels as compressions and rarefactions in the medium." },
    { question: "What is the speed of light in a vacuum?", options: ["3 x 10^8 m/s", "3 x 10^7 m/s", "1 x 10^8 m/s", "2 x 10^8 m/s"], answer: "3 x 10^8 m/s", hint: "Light's speed in a vacuum is about 300 million meters per second." },
    { question: "What is Ohm's law?", options: ["V = IR", "P = IV", "F = ma", "E = mc²"], answer: "V = IR", hint: "Relates voltage, current, and resistance." },
    { question: "What is the unit of electric charge?", options: ["Volt", "Ampere", "Coulomb", "Ohm"], answer: "Coulomb", hint: "Named after Charles-Augustin de Coulomb, a unit of charge." },
    { question: "Which law describes the relationship between pressure and volume in gases?", options: ["Boyle's Law", "Charles's Law", "Newton's Law", "Ohm's Law"], answer: "Boyle's Law", hint: "At constant temperature, pressure and volume are inversely proportional." },
    { question: "What is the name of the force that opposes the motion of objects through the air?", options: ["Friction", "Tension", "Air resistance", "Gravitational force"], answer: "Air resistance", hint: "It slows down objects moving through the air." },
    { question: "What is the main principle behind Archimedes' principle?", options: ["Buoyancy", "Gravity", "Inertia", "Pressure"], answer: "Buoyancy", hint: "It explains why objects float or sink in a fluid." },
    { question: "Which of the following is a scalar quantity?", options: ["Velocity", "Acceleration", "Displacement", "Speed"], answer: "Speed", hint: "A scalar quantity only has magnitude, not direction." },
    { question: "What is the potential difference measured in?", options: ["Ampere", "Volt", "Joule", "Watt"], answer: "Volt", hint: "The unit of potential difference is named after Alessandro Volta." },
    { question: "What kind of lens can converge light rays?", options: ["Concave", "Convex", "Plane", "Flat"], answer: "Convex", hint: "This type of lens is thicker in the middle and brings light to a focal point." },
    { question: "What is the unit of power?", options: ["Watt", "Joule", "Newton", "Volt"], answer: "Watt", hint: "Power is measured in watts, named after James Watt." },
    { question: "What does the slope of a velocity-time graph represent?", options: ["Displacement", "Acceleration", "Force", "Speed"], answer: "Acceleration", hint: "The slope of velocity vs. time gives the rate of change of velocity." },
    { question: "Which fundamental force is responsible for the structure of the atom?", options: ["Electromagnetic force", "Gravitational force", "Strong nuclear force", "Weak nuclear force"], answer: "Electromagnetic force", hint: "This force keeps electrons in orbit around the nucleus." },
    { question: "What is the formula for work done?", options: ["W = Fd", "W = mg", "W = mv", "W = 1/2 mv²"], answer: "W = Fd", hint: "Work is force applied over a distance." }
];

const chemistryQuestions = [
    { question: "What is the chemical symbol for water?", options: ["H₂O", "CO₂", "O₂", "N₂"], answer: "H₂O", hint: "Water consists of two hydrogen atoms and one oxygen atom." },
    { question: "What is the pH of a neutral solution?", options: ["7", "1", "14", "5"], answer: "7", hint: "A neutral solution has equal concentrations of H⁺ and OH⁻ ions." },
    { question: "Which element has the chemical symbol 'Na'?", options: ["Sodium", "Nitrogen", "Neon", "Nickel"], answer: "Sodium", hint: "It's an alkali metal, commonly found in table salt." },
    { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen", hint: "It makes up about 78% of Earth's atmosphere." },
    { question: "Which subatomic particle has a negative charge?", options: ["Proton", "Electron", "Neutron", "Photon"], answer: "Electron", hint: "Electrons orbit the nucleus of the atom and have a negative charge." },
    { question: "What is the atomic number of carbon?", options: ["12", "6", "8", "4"], answer: "6", hint: "The atomic number of carbon is 6, representing the number of protons in its nucleus." },
    { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "H₂O", "CO₂"], answer: "NaCl", hint: "Table salt is made up of sodium and chloride ions." },
    { question: "Which type of bond involves the sharing of electron pairs between atoms?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], answer: "Covalent", hint: "In this bond, atoms share electrons." },
    { question: "What is the molar mass of water (H₂O)?", options: ["18 g/mol", "16 g/mol", "20 g/mol", "24 g/mol"], answer: "18 g/mol", hint: "Calculate by adding the atomic masses of hydrogen (1) and oxygen (16)." },
    { question: "Which gas is commonly known as laughing gas?", options: ["Nitrogen", "Nitrogen Dioxide", "Nitrous Oxide", "Ozone"], answer: "Nitrous Oxide", hint: "Nitrous oxide is used in anesthesia and is also called 'laughing gas'." },
    { question: "What is the main component of natural gas?", options: ["Propane", "Butane", "Methane", "Ethane"], answer: "Methane", hint: "Methane is the simplest alkane and the primary component of natural gas." },
    { question: "What is the valency of hydrogen?", options: ["1", "2", "3", "4"], answer: "1", hint: "Hydrogen can form one bond by sharing or transferring one electron." },
    { question: "Which process is used to separate a mixture of liquids based on their boiling points?", options: ["Filtration", "Distillation", "Crystallization", "Sublimation"], answer: "Distillation", hint: "This process separates liquids by heating them to their boiling points." },
    { question: "What is the chemical formula for glucose?", options: ["C₆H₁₂O₆", "CH₄", "C₂H₆", "C₇H₁₄O₇"], answer: "C₆H₁₂O₆", hint: "Glucose is a simple sugar with the formula C₆H₁₂O₆." },
    { question: "What is the name of the process by which plants make their food using sunlight?", options: ["Respiration", "Glycolysis", "Photosynthesis", "Fermentation"], answer: "Photosynthesis", hint: "This process converts light energy into chemical energy in plants." },
    { question: "Which element is a noble gas?", options: ["Hydrogen", "Oxygen", "Helium", "Chlorine"], answer: "Helium", hint: "Noble gases are inert and Helium is the second element in the periodic table." },
    { question: "What is the common name for H₂SO₄?", options: ["Sulfuric Acid", "Hydrochloric Acid", "Nitric Acid", "Acetic Acid"], answer: "Sulfuric Acid", hint: "This strong acid is widely used in industry and is known as sulfuric acid." },
    { question: "What is the oxidation state of oxygen in water (H₂O)?", options: ["-1", "-2", "+1", "0"], answer: "-2", hint: "Oxygen in compounds typically has an oxidation state of -2." },
    { question: "What is the chemical formula of ethanol?", options: ["C₂H₅OH", "CH₄", "C₆H₁₂O₆", "C₄H₁₀"], answer: "C₂H₅OH", hint: "Ethanol is the alcohol found in alcoholic beverages." },
    { question: "Which of the following is an alkali metal?", options: ["Potassium", "Calcium", "Iron", "Zinc"], answer: "Potassium", hint: "Alkali metals are in group 1 of the periodic table, and Potassium is one of them." }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let questionResults = [];  // Array to store user's answer and the correct answer

function showMateri() {
    document.getElementById('home').classList.add('hidden');  // Sembunyikan elemen home
    document.getElementById('materi').classList.add('active');  // Tampilkan elemen materi dengan menambahkan kelas 'active'
    document.getElementById('materi').classList.remove('hidden');  // Hapus kelas 'hidden' dari elemen materi
    document.getElementById('latihan').classList.add('hidden');  // Sembunyikan elemen latihan
}

// Fungsi untuk menampilkan halaman Latihan
function showLatihan() {
    document.getElementById('home').classList.add('hidden');  // Sembunyikan elemen home
    document.getElementById('materi').classList.add('hidden');  // Sembunyikan elemen materi
    document.getElementById('latihan').classList.add('active');  // Tampilkan elemen latihan dengan menambahkan kelas 'active'
    document.getElementById('latihan').classList.remove('hidden');  // Hapus kelas 'hidden' dari elemen latihan
}

// Fungsi untuk memuat pelajaran dan materi yang relevan
function loadPelajaran() {
    const pelajaran = document.getElementById('pilihPelajaran').value;  // Ambil pelajaran yang dipilih dari dropdown
    const materiSelect = document.getElementById('pilihMateri');  // Referensi ke dropdown materi
    materiSelect.innerHTML = '';  // Kosongkan opsi sebelumnya di dropdown materi

    let materiOptions = [];  // Buat array untuk menyimpan opsi materi

    // Jika pelajaran adalah matematika, tambahkan opsi materi terkait matematika
    if (pelajaran === 'matematika') {
        materiOptions = [
            { value: 'derivatif', text: 'Derivatif' },
            { value: 'integral', text: 'Integral' }
        ];
    } else if (pelajaran === 'fisika') {
        materiOptions = [
            { value: 'hukumNewton', text: 'Hukum Newton' },
            { value: 'gerakParabola', text: 'Gerak Parabola' }
        ];
    } else if (pelajaran === 'kimia') {
        materiOptions = [
            { value: 'reaksiKimia', text: 'Reaksi Kimia' },
            { value: 'ikatanKimia', text: 'Ikatan Kimia' }
        ];
    }

    // Tambahkan setiap opsi materi ke dropdown materi
    materiOptions.forEach((option) => {
        let opt = document.createElement('option');  // Buat elemen option baru
        opt.value = option.value;  // Setel nilai option
        opt.text = option.text;  // Setel teks yang akan ditampilkan di dropdown
        materiSelect.add(opt);  // Tambahkan option ke dropdown
    });

    loadMateri();  // Panggil fungsi loadMateri untuk menampilkan materi yang dipilih
}

// Fungsi untuk menampilkan halaman Materi
function showMateri() {
    window.location.href = 'materials.html';  // Arahkan pengguna ke halaman materials.html
}

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

function startMathQuiz() {
    questionResults = []; // Reset question results
    const shuffledQuestions = mathQuestions.sort(() => 0.5 - Math.random()); 
    selectedQuestions = shuffledQuestions.slice(0, 5); 
    currentQuestionIndex = 0;
    score = 0;
    displayMathQuestion();
}

function startPhysicsQuiz() {
    questionResults = []; // Reset question results
    const shuffledQuestions = physicsQuestions.sort(() => 0.5 - Math.random()); 
    selectedQuestions = shuffledQuestions.slice(0, 5); 
    currentQuestionIndex = 0;
    score = 0;
    displayPhysicsQuestion();
}

function startChemistryQuiz() {
    questionResults = []; // Reset question results
    const shuffledQuestions = chemistryQuestions.sort(() => 0.5 - Math.random()); 
    selectedQuestions = shuffledQuestions.slice(0, 5); 
    currentQuestionIndex = 0;
    score = 0;
    displayChemistryQuestion();
}


// Function to display a Math question
function displayMathQuestion() {
    const quizContainer = document.getElementById('quizContent');
    const question = selectedQuestions[currentQuestionIndex];

    quizContainer.innerHTML = `
        <div style="position: relative;">  <!-- Wrap the quiz content in a div for positioning -->
            <h3>Mathematics Quiz</h3>
            <p>${question.question}</p>
            ${question.options.map((option) => `
                <label>
                    <input type="radio" name="answer" value="${option}"> ${option}
                </label><br>
            `).join('')}
            
            <!-- Submit Button -->
            <button class="submit-button" onclick="submitMathAnswer()">Submit</button>
            
            <!-- Hint Button (pure icon) -->
            <button class="hint-button" onclick="showHint()">
                <img src="assets/bulb.png" alt="Hint Icon">
            </button>
            
            <!-- Hidden Hint Text -->
            <p id="hint" style="display:none; color:blue; margin-top: 20px;">Hint: ${question.hint}</p>
        </div>
    `;
}

function displayPhysicsQuestion() {
    const quizContainer = document.getElementById('quizContent');
    const question = selectedQuestions[currentQuestionIndex];

    quizContainer.innerHTML = `
        <div style="position: relative;">
            <h3>Physics Quiz</h3>
            <p>${question.question}</p>
            ${question.options.map((option) => `
                <label>
                    <input type="radio" name="answer" value="${option}"> ${option}
                </label><br>
            `).join('')}
            
            <!-- Submit Button -->
            <button class="submit-button" onclick="submitPhysicsAnswer()">Submit</button>

            <!-- Hint Button (pure icon) -->
            <button class="hint-button" onclick="showHint()">
                <img src="assets/bulb.png" alt="Hint Icon">
            </button>
            
            <p id="hint" style="display:none; color:blue; margin-top: 20px;">Hint: ${question.hint}</p>
        </div>
    `;
}

function displayChemistryQuestion() {
    const quizContainer = document.getElementById('quizContent');
    const question = selectedQuestions[currentQuestionIndex];

    quizContainer.innerHTML = `
        <div style="position: relative;">
            <h3>Chemistry Quiz</h3>
            <p>${question.question}</p>
            ${question.options.map((option) => `
                <label>
                    <input type="radio" name="answer" value="${option}"> ${option}
                </label><br>
            `).join('')}
            
            <!-- Submit Button -->
            <button class="submit-button" onclick="submitChemistryAnswer()">Submit</button>

            <!-- Hint Button (pure icon) -->
            <button class="hint-button" onclick="showHint()">
                <img src="assets/bulb.png" alt="Hint Icon">
            </button>
            
            <p id="hint" style="display:none; color:blue; margin-top: 20px;">Hint: ${question.hint}</p>
        </div>
    `;
}

function showHint() {
    const hintElement = document.getElementById('hint');
    hintElement.style.display = 'block';  // Show the hint
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

    // Store the result for this question
    questionResults.push({
        questionNumber: currentQuestionIndex + 1,
        question: selectedQuestions[currentQuestionIndex].question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: userAnswer === correctAnswer
    });

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

    // Store the result for this question
    questionResults.push({
        questionNumber: currentQuestionIndex + 1,
        question: selectedQuestions[currentQuestionIndex].question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: userAnswer === correctAnswer
    });

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

    // Store the result for this question
    questionResults.push({
        questionNumber: currentQuestionIndex + 1,
        question: selectedQuestions[currentQuestionIndex].question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: userAnswer === correctAnswer
    });

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
    
    let resultHTML = `
        <h3>Quiz Completed</h3>
        <p>You answered ${score} out of 5 questions correctly.</p>
        <h4>Review Your Answers:</h4>
        <ul>
    `;

    questionResults.forEach(result => {
        resultHTML += `
            <li>
                <strong>Question ${result.questionNumber}:</strong> ${result.question}<br>
                <strong>Your Answer:</strong> ${result.userAnswer} - ${result.isCorrect ? 'Correct' : 'Incorrect'}<br>
                <strong>Correct Answer:</strong> ${result.correctAnswer}
            </li><br>
        `;
    });

    resultHTML += `</ul>
        <button onclick="startPhysicsQuiz()">Restart Quiz</button>
    `;

    quizContainer.innerHTML = resultHTML;
}

// Function to show the Math quiz results
function showMathQuizResults() {
    const quizContainer = document.getElementById('quizContent');
    
    let resultHTML = `
        <h3>Quiz Completed</h3>
        <p>You answered ${score} out of 5 questions correctly.</p>
        <h4>Review Your Answers:</h4>
        <ul>
    `;

    questionResults.forEach(result => {
        resultHTML += `
            <li>
                <strong>Question ${result.questionNumber}:</strong> ${result.question}<br>
                <strong>Your Answer:</strong> ${result.userAnswer} - ${result.isCorrect ? 'Correct' : 'Incorrect'}<br>
                <strong>Correct Answer:</strong> ${result.correctAnswer}
            </li><br>
        `;
    });

    resultHTML += `</ul>
        <button onclick="startMathQuiz()">Restart Quiz</button>
    `;

    quizContainer.innerHTML = resultHTML;
}

function showChemistryQuizResults() {
    const quizContainer = document.getElementById('quizContent');
    
    let resultHTML = `
        <h3>Quiz Completed</h3>
        <p>You answered ${score} out of 5 questions correctly.</p>
        <h4>Review Your Answers:</h4>
        <ul>
    `;

    questionResults.forEach(result => {
        resultHTML += `
            <li>
                <strong>Question ${result.questionNumber}:</strong> ${result.question}<br>
                <strong>Your Answer:</strong> ${result.userAnswer} - ${result.isCorrect ? 'Correct' : 'Incorrect'}<br>
                <strong>Correct Answer:</strong> ${result.correctAnswer}
            </li><br>
        `;
    });

    resultHTML += `</ul>
        <button onclick="startChemistryQuiz()">Restart Quiz</button>
    `;

    quizContainer.innerHTML = resultHTML;
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
