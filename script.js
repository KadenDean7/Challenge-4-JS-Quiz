//query selctors
var startBtn = document.querySelector(".card-button");
var highscoreBtn = document.querySelector("#highscore");
var timeEl = document.querySelector("#timer");
var paraEl = document.querySelector("#body-paragraph");
//querey selectors for question and answer elements
var questionEl = document.querySelector("#question");
var answerOneEl = document.querySelector("#answerOne");
var answerTwoEl = document.querySelector("#answerTwo");
var answerThreeEl = document.querySelector("#answerThree");
var answerFourEl = document.querySelector("#answerFour");

//variables
var timeLeft = 60;
var userScore = 0;
var currentQuestion = 0;

//questions
const quizQuestions = [{
    question: "Is JavaScript object oriented?",
    answers: {
        a: "Yes JavaScript is object oriented.",
        b: "No JavaScript is not object oriented.",
        c: "What does that mean?",
        d: "JavaScript is a functional programming language."
    },
    correctAnswer: "a"
},
{
    question:"How can a datatype be declared to be a constant type?",
    answers: {
        a: "const",
        b: "var",
        c: "let",
        d: "constant"
    },
    correctAnswer: "d"
},
{
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: {
        a:"stringify()",
        b: "parse()",
        c: "convert()",
        d: "None of the above"
    },
    correctAnswer: "a"

}
//need to add more questions


];

//on button press show questions && start timer
function startQuiz(){
    //the timer interval var (pulled this from the lesson)
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0){
            //stop the interval 
            clearInterval(timerInterval);
        }
    }, 1000)

    codingQuiz();

}

function codingQuiz(){

    //removes the p and the start button from the screen
    paraEl.textContent = "";
    startBtn.textContent = "";
    appendQuestion(currentQuestion);

}

function appendQuestion(currentQuestion){
    //updates the text content for each of the elements to their corresponding parts in the object inside the array quizQuestions
    questionEl.textContent = quizQuestions[currentQuestion].question;
    answerOneEl.textContent = quizQuestions[currentQuestion].answers.a;
    answerTwoEl.textContent = quizQuestions[currentQuestion].answers.b;
    answerThreeEl.textContent = quizQuestions[currentQuestion].answers.c;
    answerFourEl.textContent = quizQuestions[currentQuestion].answers.d;

}
 
//shows the previos scores
function showScores(){
    console.log("Hello World!")
    //use local storage to keep track of the score and show them on a leaderboard

}

//get start button press
startBtn.addEventListener("click", startQuiz);
highscoreBtn.addEventListener("click", showScores);

//event listener for the answer buttons
answerOneEl.addEventListener("click", function(){
    //is correct pulls the correct answer from the current question
    var isCorrect = quizQuestions[currentQuestion].correctAnswer;

    //if isCorrect is equal to letter choice A increases score by 10 if the answer is wrong the time decreases by 5 seconds
    if(isCorrect === "a"){
        userScore = userScore + 10;
    }else {
        timeLeft = timeLeft - 5;
    }

    //changes value of current question in so the array can update with next question
    currentQuestion++;
    appendQuestion(currentQuestion);
});

answerTwoEl.addEventListener("click", function(){
    var isCorrect = quizQuestions[currentQuestion].correctAnswer;

    if(isCorrect === "b"){
        userScore = userScore + 10;
    }else{
        timeLeft = timeLeft - 5;
    }

    currentQuestion++;
    appendQuestion(currentQuestion);
});

answerThreeEl.addEventListener("click", function(){
    var isCorrect = quizQuestions[currentQuestion].correctAnswer;

    if(isCorrect === "c"){
        userScore = userScore + 10;
    
    }else{
        timeLeft = timeLeft - 5;
    }

    currentQuestion++;
    appendQuestion(currentQuestion);
});

answerFourEl.addEventListener("click", function(){
    var isCorrect = quizQuestions[currentQuestion].correctAnswer;

    if(isCorrect === "d"){
        userScore = userScore + 10;
    
    }else{
        timeLeft = timeLeft - 5;
    }

    currentQuestion++;
    appendQuestion(currentQuestion);
})
