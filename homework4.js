var questions = [{
    prompt: "What is an ID targeted by?",
    choices: ["@", "$", "#", "."],
    answer: "#"
},
{
    prompt: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Computer System Software", "Computer Syncing Style", "Controlled Style Sheets"],
    answer: "Cascading Style Sheets"
},
{
    prompt: "What is the command to copy on Windows?",
    choices: ["ctrl + x", "ctrl + z", "ctrl + c", "ctrl + v"],
    answer: "ctrl + c"
},
{
    prompt: "Who created JavaScript?",
    choices: ["Abraham Lincoln", "Albert Einstein", "Leonardo Da Vinci", "Brendan Eich"],
    answer: "Brendan Eich"
},
{
    prompt: "How long did it take to create JavaScript?",
    choices: ["2 days", "10 days", "7 days", "15 days"],
    answer: "10 days"
},
];

var quizCounter = 0;
var quiz;
var choice

function element (el) {
    return document.getElementById(el);
}

function showQuestion() {
    quiz = get("quiz");
    if (quizCounter >= questions.length) {
        quiz.innerHtml = "You got " + correct + " of " + questions.length + " questions correct";
        get()
    }
}

$("#startBtn").on("click", function() {
    
    })
    


