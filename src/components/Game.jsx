import { useState } from "react";
import { Board } from "./Board";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  const handlePlay = (nextSquare) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory([...history, nextSquare]);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Go to the next # ${move}`;
    } else {
      description = "Go to start the game";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="md:flex justify-center gap-3 m-10">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div>
        <ol className="border border-gray-500 p-2 mt-5">{moves}</ol>
      </div>
    </div>
  );
};
