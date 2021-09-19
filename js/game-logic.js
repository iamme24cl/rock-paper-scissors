// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;
let playerOneWins;
let playerTwoWins;

function setPlayerMoves(player, type1, value1, type2, value2, type3, value3) {
  const validMoves = ['rock', 'paper', 'scissors'];

  if (type1 === undefined || type2 === undefined || type3 === undefined) {
    return;
  }
  if (value1 === undefined || value2 === undefined || value3 === undefined) {
    return;
  }

  if ((value1 < 1 || value1 > 99) || (value2 < 1 || value2 > 99) || (value3 < 1 || value3 > 99)) {
    return;
  }

  if ((value1 + value2 + value3) > 99) {
    return;
  }

  if (validMoves.includes(type1.toLowerCase()) && validMoves.includes(type2.toLowerCase()) && validMoves.includes(type3.toLowerCase())) {
    if (player === 'Player One') {
      playerOneMoveOneType = type1    
      playerOneMoveOneValue = value1
      playerOneMoveTwoType = type2  
      playerOneMoveTwoValue = value2 
      playerOneMoveThreeType = type3   
      playerOneMoveThreeValue = value3 
    } else if (player === 'Player Two') {
      playerTwoMoveOneType = type1   
      playerTwoMoveOneValue = value1 
      playerTwoMoveTwoType = type2   
      playerTwoMoveTwoValue = value2 
      playerTwoMoveThreeType = type3   
      playerTwoMoveThreeValue = value3 
    }
  }   
}

function getRoundWinner(roundNumber) {
  switch(roundNumber) {
    case 1:
      return getMoveWinner(playerOneMoveOneType,
                           playerOneMoveOneValue,
                           playerTwoMoveOneType,
                           playerTwoMoveOneValue);
    case 2:
      return getMoveWinner(playerOneMoveTwoType,
                           playerOneMoveTwoValue,
                           playerTwoMoveTwoType,
                           playerTwoMoveTwoValue);
    case 3:
      return getMoveWinner(playerOneMoveThreeType,
                           playerOneMoveThreeValue,
                           playerTwoMoveThreeType,
                           playerTwoMoveThreeValue);
    default:
      return null;
  }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
  if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
    return null;
  }

  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }

  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else if (playerOneMoveType === 'paper') {
    if (playerTwoMoveType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else {
    if (playerTwoMoveType === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
}

function getGameWinner() {
  if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }
  playerOneWins = 0;
  playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  addWin(roundOneWinner);
  addWin(roundTwoWinner);
  addWin(roundThreeWinner);
  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

function addWin(winner) {
  if (winner === 'Player One') {
    playerOneWins = (playerOneWins + 1) || 1;
  } else if (winner === 'Player Two') {
    playerTwoWins = (playerTwoWins + 1) || 1;
  }
}

function setComputerMoves() {
  const moves = ['rock', 'paper', 'scissors'];
  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];
  const moveOneValue = Math.floor(Math.random() * 96) + 1;
  const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;
  setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
                 moveTwoValue, moveThreeType, moveThreeValue);
}


