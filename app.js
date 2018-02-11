var arrow = document.getElementById ('arrow');
var para = document.getElementById ('para');
var nextBtn = document.querySelector ('button');

var inputs = document.getElementById ('inputs'); //inputs
var submit = document.getElementById('submit');
var form = document.querySelector('form');
var user_guess = document.getElementById('user_guess');
//questions for SlickRick
const questions = [
    {
    hints: [
        'I believe I can fly',
        'I can touch the sky',
        'I hangout with bunnies'
    ],

    correctAnswer: 'MICHAEL JORDAN'

    },
    {
        hints: ['Play me when youre bored',
        'Black and blue? More like Black and Red',
        'Only for the stratigic minded'
    ],
        correctAnswer: 'CHECKERS'

    },
    {
        hints: [
            'Always carry me around with you',
            'But you may forget where you put me sometimes',
            'Give me your money'
    ],
        correctAnswer: 'Wallet'

    }

];
let cute = Math.floor(Math.random()*questions.length);
console.log(questions[cute])

let counter = 0; //question number

function textForward (){
    arrow.addEventListener('click', function(){
//opening lines
        var arr = [

          'Are you Ready to play the Game',
          'Here is how it works',
          'Im going to say three things',
          'You will try to guess what Im thinking of',
          'Guess wrong and you are out',
          'Guess right and you get to continue playing',
          'simple.. ? right..? ',
          'Let get started then',
          'Here are your 3 hints !'
        ]

        para.innerHTML = arr[counter]; //loops through each arr value
        counter ++; //moves to next question

        if(counter >= arr.length){
            counter = 0;
            newQuestion();
        }
    });
};

//starts game

function newQuestion(){
    nextBtn.style.display = 'block';
    arrow.style.display = 'none';

//generates random question out of array
    let randomNum = Math.floor(Math.random()* questions.length);//produces random number !
    let randomQuestion = questions[randomNum];
    let hints = randomQuestion.hints;
    let answer = randomQuestion.correctAnswer;

    //sets button for question

        nextBtn.addEventListener('click', function(){
        para.innerHTML = hints[counter];
        counter++;
            if (counter > hints.length){
                para.innerHTML = 'What Am I Thinking?';
                nextBtn.style.display = 'none';
                inputs.style.display = 'block';
                counter = 0; //resets counter
            };
        });
    };






textForward();
