# Rock, Paper, Scissors

## 🔗 Live Demo (https://rock-paper-scissors-jt.netlify.app/)

![preview](./design/desktop-preview.jpg)

A responsive interactive game built with HTML, CSS, and JavaScript. The app lets users play Rock, Paper, Scissors against a computer opponent while dynamically updating choices, results, and score through DOM-based UI interactions.

## Overview

This app lets users play Rock, Paper, Scissors against a computer opponent that randomly selects its move each round. After the player makes a choice, the game reveals both selections, determines the winner, displays the result, and updates the score.

The goal of this project was to build a polished, interactive browser game that combines simple game logic with responsive layout, clear visual feedback, and smooth user interaction.

## Features

- Play Rock, Paper, Scissors against the computer
- Randomized computer selection each round
- Score tracking during the session
- Visual feedback for wins, losses, and ties
- Responsive layout
- Rules modal for quick reference

## Game Rules

The winner is determined by the classic Rock, Paper, Scissors rules:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

If the player wins, their score increases by 1.  
If the computer wins, the player’s score decreases by 1.  
If both choices match, the round is a tie.

## Built With

- HTML5
- CSS3
- JavaScript

## What I Learned

This project helped me practice connecting JavaScript logic to visual UI updates. I worked with event-driven programming, random number generation, conditional logic, and updating DOM elements based on user interaction.

One of the main challenges was organizing the game flow so that each round clearly handled:

1. the user’s selected choice,
2. the computer’s random choice,
3. the result comparison,
4. and the score update.

I also gained more experience translating a static design into a responsive web layout.

## Future Improvements

Some improvements I would like to make include:

- Refactor the game logic into smaller reusable functions
- Replace inline click handlers with JavaScript event listeners
- Improve keyboard accessibility
- Add persistent score tracking with `localStorage`
- Add a reset score button
- Add animations between game states
- Add unit tests for the game result logic
- Deploy the project with GitHub Pages, Netlify, or Vercel

## Getting Started

To run this project locally:

```bash
git clone https://github.com/Jesse-Tingle/rock-paper-scissors.git
cd rock-paper-scissors
open index.html