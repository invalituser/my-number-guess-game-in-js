let randomNumber = Math.ceil(Math.random()*100)
console.log(randomNumber);
let chance = 10;

function chekingNum(){
    let guessedNum = Number(document.getElementById('input').value)
    console.log(guessedNum)
    let helpingtxt = document.getElementById('helpingtxt')
    let chancesDisplay = document.getElementById('left')

    //if statements
    if(chance>0){
        if(guessedNum == randomNumber){
        helpingtxt.textContent = "🎉 Correct! You guessed the number!"
        helpingtxt.style.color = "green";
        disableGame();
    } else if(guessedNum < randomNumber){
        helpingtxt.textContent = "📉 Too low! Try again.";
        helpingtxt.style.color = "red";
        chance--;
    } else if(guessedNum > randomNumber){
        helpingtxt.textContent = "📈 Too high! Try again.";
        helpingtxt.style.color = "orange"
        chance--;
        
    } 
    chancesDisplay.textContent = `chances left: ${chance}`;
    if(chance == 0 && guessedNum!=randomNumber){
        helpingtxt.textContent = `❌ Game over! The number was ${randomNumber}.`
        disableGame();
    }
   
    }
}
function disableGame() {
  document.getElementById('input').disabled = true;
}