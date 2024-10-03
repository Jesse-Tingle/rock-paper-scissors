const handOptions = {
	rock: "/images/Rock.png",
	paper: "/images/Paper.png",
	scissors: "/images/Scissors.png",
}

const pickUserHand = (hand) => {
	console.log(hand)
	// hide the current page
	// show the next page with the hand you picked
	let hands = document.querySelector(".hands")
	hands.style.display = "none"

	//show the next page with the hand you picked
	let contest = document.querySelector(".contest")
	contest.style.display = "flex"

	//set the user pick

	document.getElementById("userPickImage").src = handOptions[hand]
}
