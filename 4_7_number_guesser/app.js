


// Game values
let min = 1,
	max =10,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min
maxNum.textContent = max

// Game over event listener

game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again'){
		window.location.reload()
	}
})

//Listen for guess
guessBtn.addEventListener('click', function(){
	let guess = parseInt(guessInput.value)

	// Validate
	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`Please enter a number between ${min} and ${max}`, 'red')

	} else{

		// Check if won
		if(guess === winningNum){
			gameOver(true, `${winningNum} is correct!, YOU WIN`)

		} else{
			// Lost
			guessesLeft-=1

			if(guessesLeft === 0){
				// Game over
				gameOver(false, `Game over, you lost, the correct number was, ${winningNum}`)

			} else{
				// Game Continues
				// Change  border color
				guessInput.style.borderColor = 'red'
				// Clear input
				guessInput.value = ''
				// Tell users the guesses left
				setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')

			}
		}
	}


})


// Game Over
function gameOver(won, msg){
	let color
	// if won is equal true then color equal green else color equal red
	won === true ? color = 'green' : color = 'red'
	// Disable Input
	guessInput.disabled = true
	// Change border color
	guessInput.style.borderColor = color
	// Set text color
	message.style.color = color
	// set message
	setMessage(msg)

	// Play again
	guessBtn.value = 'Play Again'
	guessBtn.className+='play-again' 
}

function getRandomNum(min, max){
	return Math.floor(Math.random()*(max-min+1)+min)

}

// Set message
function setMessage(msg, color){
	message.style.color = color
	message.textContent = msg
}
















