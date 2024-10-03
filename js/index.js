const handOptions = {
	rock: "/images/Rock.png",
	paper: "/images/Paper.png",
	scissors: "/images/Scissors.png",
}

let score = 0

const pickUserHand = (hand) => {
	let hands = document.querySelector(".hands")
	hands.style.display = "none"

	let contest = document.querySelector(".contest")
	contest.style.display = "flex"

	// set user Image
	document.getElementById("userPickImage").src = handOptions[hand]

	pickComputerHand(hand)
}

const pickComputerHand = (hand) => {
	let hands = ["rock", "paper", "scissors"]
	let cpHand = hands[Math.floor(Math.random() * hands.length)]

	// set computer image
	document.getElementById("computerPickImage").src = handOptions[cpHand]

	referee(hand, cpHand)
}

// This is the correct score variable

const referee = (userHand, cpHand) => {
	console.log("User hand:", userHand)
	console.log("Computer hand:", cpHand)

	if (userHand == "paper" && cpHand == "scissors") {
		setDecision("YOU LOSE!")
		score -= 1
		setScore(score)
	} else if (userHand == "paper" && cpHand == "rock") {
		setDecision("YOU WIN!")
		score += 1
		setScore(score)
	} else if (userHand == "paper" && cpHand == "paper") {
		setDecision("It's a tie!")
	} else if (userHand == "rock" && cpHand == "scissors") {
		setDecision("YOU WIN!")
		score += 1
		setScore(score)
	} else if (userHand == "rock" && cpHand == "paper") {
		setDecision("YOU LOSE!")
		score -= 1
		setScore(score)
	} else if (userHand == "rock" && cpHand == "rock") {
		setDecision("It's a tie!")
	} else if (userHand == "scissors" && cpHand == "scissors") {
		setDecision("It's a tie!")
	} else if (userHand == "scissors" && cpHand == "rock") {
		setDecision("YOU LOSE!")
		score -= 1
		setScore(score)
	} else if (userHand == "scissors" && cpHand == "paper") {
		setDecision("YOU WIN!")
		score += 1
		setScore(score)
	} else {
		console.log("No condition matched! Check your logic.")
	}
}

const setDecision = (decision) => {
	console.log(decision) // This should work now
}

const setScore = (currentScore) => {
	console.log(currentScore) // This should work now with the correct 'score' variable
}
