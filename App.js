import React, { useState } from "react";
import "./App.css";
import "./tic.css";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));

    setWinner(null);
    setXIsNext(true);
  };

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    calculateWinner(newBoard);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        console.log(squares[a], squares);
        return;
      }
    }

    if (squares.every((square) => square !== null)) {
      setWinner("draw");
    }
  };

  const renderSquare = (index) => {
    return (
      <button
        className="square"
        style={{ backgroundColor: winner ? "yellow" : "green" }}
        onClick={() => handleClick(index)}
      >
        {console.log(winner, board, index)}
        {board[index]}
      </button>
    );
  };

  const status = () => {
    if (winner) {
      if (winner === "draw") {
        return "It's a draw!";
      } else {
        console.log(winner);
        return `Congrats:${winner} `;
      }
    } else {
      return `Next player: ${xIsNext ? "X" : "O"}`;
    }
  };

  return (
    <div className="game">
      <div className="game_board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="game_result">
        <div>{status()}</div>
      </div>
      <div></div>
    </div>
  );
};

export default Game;
