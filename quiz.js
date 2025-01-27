const questions = [
    {
        question: "What is your primary interest in college?",
        options: ["Engineering", "Medical", "Arts & Humanities", "Business", "Law", "Other"]
    },
    {
        question: "What type of college are you interested in?",
        options: ["Private", "Government", "Top-tier", "Local"]
    },
    {
        question: "What are your grade expectations?",
        options: ["Above 80%", "70-80%", "60-70%", "Below 60%"]
    },
    {
        question: "Have you decided on a specific college?",
        options: ["Yes", "No", "Not Sure"]
    }
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("quiz-content").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        ${question.options.map((option, index) => `
            <div>
                <input type="radio" name="answer" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label>
            </div>
        `).join('')}
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    const answer = selectedOption.value;
    console.log("Answer:", answer); // For debugging, you can remove this later

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showForm();
    }
}

function showForm() {
    document.getElementById("quiz-content").classList.add("hidden");
    document.getElementById("form-container").classList.remove("hidden");
}

document.getElementById("request-call-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your request has been submitted! An expert will contact you soon.");
    // Here you can add further functionality to send the form data to your server
});
