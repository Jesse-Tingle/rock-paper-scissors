const HANDS = Object.freeze({
	ROCK: "rock",
	PAPER: "paper",
	SCISSORS: "scissors",
  });
  
  const HAND_IMAGES = Object.freeze({
	[HANDS.ROCK]: "/images/Rock.png",
	[HANDS.PAPER]: "/images/Paper.png",
	[HANDS.SCISSORS]: "/images/Scissors.png",
  });
  
  const OUTCOME = Object.freeze({
	WIN: "win",
	LOSE: "lose",
	TIE: "tie",
  });
  
  const SCORE_STEP = Object.freeze({
	[OUTCOME.WIN]: 1,
	[OUTCOME.LOSE]: -1,
	[OUTCOME.TIE]: 0,
  });
  
  const RESULT_TEXT = Object.freeze({
	[OUTCOME.WIN]: "YOU WIN!",
	[OUTCOME.LOSE]: "YOU LOSE!",
	[OUTCOME.TIE]: "It's a tie!",
  });
  
  const BEATS = Object.freeze({
	[HANDS.ROCK]: HANDS.SCISSORS,
	[HANDS.PAPER]: HANDS.ROCK,
	[HANDS.SCISSORS]: HANDS.PAPER,
  });
  
  const state = {
	score: 0,
  };
  
  const ui = {
	handsScreen: document.querySelector(".hands"),
	contestScreen: document.querySelector(".contest"),
	userPickImage: document.getElementById("userPickImage"),
	computerPickImage: document.getElementById("computerPickImage"),
	decisionText: document.querySelector(".decision h1"),
	scoreText: document.querySelector(".score h1"),
  };
  
  function startRound(userHand) {
	if (!HAND_IMAGES[userHand]) return;
  
	ui.handsScreen.style.display = "none";
	ui.contestScreen.style.display = "flex";
  
	const computerHand = getRandomHand();
	const result = getRoundResult(userHand, computerHand);
  
	renderPicks(userHand, computerHand);
	updateScore(result);
	renderDecision(result);
  }
  
  function getRandomHand() {
	const hands = Object.values(HANDS);
	return hands[Math.floor(Math.random() * hands.length)];
  }
  
  function getRoundResult(userHand, computerHand) {
	if (userHand === computerHand) return OUTCOME.TIE;
	return BEATS[userHand] === computerHand ? OUTCOME.WIN : OUTCOME.LOSE;
  }
  
  function renderPicks(userHand, computerHand) {
	ui.userPickImage.src = HAND_IMAGES[userHand];
	ui.computerPickImage.src = HAND_IMAGES[computerHand];
  }
  
  function updateScore(result) {
	state.score += SCORE_STEP[result];
	ui.scoreText.innerText = state.score;
  }
  
  function renderDecision(result) {
	ui.decisionText.textContent = RESULT_TEXT[result];
  }
  
  function restartGame() {
	ui.contestScreen.style.display = "none";
	ui.handsScreen.style.display = "flex";
  }
  
  // Keep compatibility with existing onclick handlers in HTML.
  window.pickUserHand = startRound;
  window.restartGame = restartGame;