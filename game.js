const questions = [
  {
    question: "Who is known as the father of judo?",
    options: ["Jigoro Kano", "Mitsuyo Maeda", "Masahiko Kimura", "Yasuhiro Yamashita"],
    answer: "Jigoro Kano"
  },
  {
    question: "What does 'judo' mean?",
    options: ["The way of the sword", "The gentle way", "The art of grappling", "The path to victory"],
    answer: "The gentle way"
  },
  {
    question: "Which country is judo originated from?",
    options: ["Japan", "China", "Korea", "Brazil"],
    answer: "Japan"
  },
  {
    question: "What is the highest rank in judo?",
    options: ["Black belt", "Brown belt", "Red belt", "White belt"],
    answer: "Red belt"
  },
  {
    question: "Which of the following is not a judo throw?",
    options: ["Seoi-nage", "Uchi-mata", "Ko-uchi-gari", "Karate-chop"],
    answer: "Karate-chop"
  },
  {
    question: "What is the judo uniform called?",
    options: ["Kimono", "Gi", "Hakama", "Obi"],
    answer: "Gi"
  },
  {
    question: "Which of the following is a judo competition technique?",
    options: ["Ippon", "Sudoku", "Kamikaze", "Sensei"],
    answer: "Ippon"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => {
      checkAnswer(option);
    });
    optionsElement.appendChild(button);
  });

  resultElement.innerText = ''; // Clear previous result
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const resultElement = document.getElementById('result');
  const optionsElement = document.getElementById('options');
  
  const isCorrect = selectedOption === currentQuestion.answer;
  if (isCorrect) {
    score++;
    resultElement.innerText = "Correct!";
    resultElement.style.color = "green";
  } else {
    resultElement.innerText = "Wrong!";
    resultElement.style.color = "red";
  }

  optionsElement.innerHTML = '';
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(displayQuestion, 1000); // Delay before showing next question
  } else {
    showResult();
  }
}

function showResult() {
  const resultElement = document.getElementById('result');
  resultElement.innerText = `Your score: ${score} out of ${questions.length}`;
}

displayQuestion();
