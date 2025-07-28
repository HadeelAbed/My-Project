"use strict";

// selecting elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El = document.querySelector("#score--0");
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');


const dicEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores,currentScore,activeplayer,playing;

//starting condition
const init = function(){

 scores=[0,0];
 currentScore =0;
 activeplayer=0;
 playing = true;

  score0El.textContent=0;
  score1El.textContent=0;

  dicEl.classList.add('hidden');
  current0El.textContent = 0;  
  current1El.textContent = 0; 
   player0El.classList.remove('player--winner');
   player1El.classList.remove('player--winner');
   player0El.classList.add('player--active');
   player1El.classList.remove('player--active');
}
init();

const switchplayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore=0;
     activeplayer=activeplayer ===0  ?1 : 0;
     //عند الانتقال ل اللاعب التاني انتقال اللون 
     //toggle اذا الكلاس موجود تحذفه اذا مش موجود تضيفه
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
}; 

//Roling dice functionality
btnRoll.addEventListener('click',function(){
  if(playing ){
    //1.Generating a random dice roll
    const dice =Math.trunc(Math.random() *6) + 1;

    //2.Display dice
    dicEl.classList.remove('hidden')
    dicEl.src=`dic-${dice}.png`;

    //3.Check for rolled 1:if  ture
    if(dice!==1){
      //Add dice to current score
      currentScore+=dice;
      document.getElementById(`current--${activeplayer}`).textContent=currentScore
      //current0El.textContent=currentScore;n  نفس السطر يلي فوق يلي فوق افضل
    } else {
     //switch to next player
      switchplayer();

    }
    }
});
btnHold.addEventListener('click',function(){
   if(playing ){
  //1 Add cirrent score to active player's score
    scores[activeplayer] +=currentScore;
    // scores[1]= scores[1]+ currentScore
    document.getElementById(`score--${activeplayer}`).textContent= scores[activeplayer];
  //2 Check if player's score is >=100
  if (scores[activeplayer] >= 100){
     //Finish the game
    playing = false;
    dicEl.classList.add('hidden');
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
  } else{
      //Switch to the next player
      switchplayer();
  }
}
});

btnNew.addEventListener('click',init);