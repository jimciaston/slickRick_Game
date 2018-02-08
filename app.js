var arrow = document.getElementById ('arrow');
var para = document.getElementById ('para');
var nextBtn = document.querySelector ('button');
var list = document.getElementById ('list_');
var submit = document.querySelector('submit');

const questions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
}];



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
          'Let the games begin'
        ]

        para.innerHTML = arr[counter]; //loops through each arr value
        counter ++; //moves to next question

        if(counter >= arr.length){
            counter = 0;
            gameStart();
        }
    });



}
function gameStart(){
    nextBtn.style.display = 'block';
    arrow.style.display = 'none';


    let question1 = [
        'I believe I can fly',
        'I can touch the sky',
        'I hangout with bunnies'
    ];
//sets button for question
    nextBtn.addEventListener('click', function(){
        para.innerHTML = question1[counter];
        counter ++;
        if (counter >= question1.length){
            nextBtn.style.display = 'none';
            list.style.display = 'block';

            submit.style.display = 'block';
        }
    });

}

textForward();
