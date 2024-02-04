// let list = document.querySelector(".choices-list")
// let playBtn = document.querySelector("#play-btn")
// list.addEventListener("click", function (event) {
// 	console.log("called")
// 	switch (event.target.parentNode.id) {
// 		case "rock":
// 			updateSelection(0)
// 			break
// 		case "paper":
// 			updateSelection(1)
// 			break
// 		case "scissors":
// 			updateSelection(2)
// 			break
// 	}
// })
//
// playBtn.addEventListener("click", function() {
//
// })
//
// function updateSelection(index) {
// 	for (let i = 0; i < list.children.length; i++) {
// 			list.children[i].classList.remove("selected-choice")
// 	}
//
// 	list.children[index].classList.add("selected-choice")
// 	selectedChoiceIndex = index
// }
//
// const choices = ["rock", "paper", "scissors"]
//
// function getComputerChoice() {
// 	let choiceIndex = Math.round(Math.random() * 2)
// 	return choices[choiceIndex]
// }
//
// function playRound(playerSelection, computerSelection) {
// 	let _playerSelection = choices.indexOf(playerSelection.toLowerCase())
// 	let _computerSelection = choices.indexOf(computerSelection.toLowerCase())
//
// 	if (_playerSelection === _computerSelection) {
// 		return null
// 	} else if (_playerSelection < _computerSelection) {
// 		return _computerSelection - _playerSelection !== 1;
// 	} else {
// 		return _playerSelection - _computerSelection === 1;
// 	}
// }

let score = 0
let roundCount = 0
const choicesList = document.querySelector(".choices-list")
const choices = choicesList.children
const playBtn = document.querySelector("#play-btn")
const scoreText = document.querySelector("#score > strong")

choicesList.addEventListener("click", function (event) {
	updateSelection(Array.from(choices).indexOf(event.target.parentNode))
})

playBtn.addEventListener("click", function (event) {
	roundCount++
	let result = playRound();

	if (result) {
		score++
	} else {
		score--
	}

	scoreText.textContent = `${score} / ${roundCount}`

	if (roundCount === 5) {
		if (score < 3) {
			alert("You Lose!")
		} else {
			alert("You Win!")
		}

		roundCount = score = 0
	}
})

function getHumanSelection() {
	for (let i = 0; i < choices.length; i++) {
		if (choices[i].classList.contains(".selected-choice")) {
			return i;
		}
	}

	return 0;
}

function getRandomChoice() {
	return Math.round(Math.random() * 2)
}

// rock paper scissors

function isWinner(play, response) {
	if (response === play) {
		return null
	}

	return response - play === 1;
}

function updateSelection(index) {
	if (index === -1) {
		return
	}

	for (let i = 0; i < choices.length; i++) {
		choices[i].classList.remove("selected-choice")
	}

	choices[index].classList.add("selected-choice")
}

function playRound() {
	return isWinner(getHumanSelection(), getRandomChoice())
}