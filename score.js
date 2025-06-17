const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const reset = document.getElementById('reset');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const input = document.getElementById('input');
const header = document.getElementById('header')

header.innerHTML = `  <nav>
      <ul>
        <li><a href="index.html">Caroussel</a></li>
        <li><a href="todolist.html">Todo List</a></li>
        <li><a href="score.html">Score Keeper</a></li>
      </ul>
    </nav>`;

    

// Player 1 ↓
player1.addEventListener('click', function() {
let currentScore1 = Number(score1.textContent);
score1.textContent = currentScore1 + 1;
if (Number(score1.textContent) === Number(input.value)) {
  player1.disabled = true;
  player2.disabled = true;
}
 });


//  Player 2 ↓
player2.addEventListener('click', function() {
let currentScore2 = Number(score2.textContent);
score2.textContent = currentScore2 + 1;

if (Number(score2.textContent) === Number(input.value)) {
  player1.disabled = true;
  player2.disabled = true;
}
  
 });


//  Reset ↓
reset.addEventListener('click', function() {
  score1.textContent = 0;
  score2.textContent = 0;
  player1.disabled = false;
  player2.disabled = false;
});
