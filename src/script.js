const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
	let choiceIndex = Math.round(Math.random() * 2)

	return choices[choiceIndex]
}

function playRound(playerSelection, computerSelection) {
	let _playerSelection = choices.indexOf(playerSelection.toLowerCase())
	let _computerSelection = choices.indexOf(computerSelection.toLowerCase())

	if (_playerSelection === _computerSelection) {
		return null
	} else if (_playerSelection < _computerSelection) {
		return _computerSelection - _playerSelection !== 1;
	} else {
		return _playerSelection - _computerSelection === 1;
	}
}

function game() {
	let compWins = 0
	let humanWins = 0

	for (i = 5; i > 0; i--) {
		let roundResult = playRound("rock", getComputerChoice())
		if (roundResult) {
			humanWins++
		} else {
			if (roundResult == null) {
				compWins--
				humanWins--
			} else {
				compWins++
			}
		}
	}

	if (compWins === humanWins) {
		console.log("Tie! Going again...")
		game()
	} else if (compWins > humanWins) {
		console.log("You lose!")
	} else {
		console.log("You win!")
	}
}


game()
