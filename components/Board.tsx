import React from "react";
import Knight from "./Knight";
import Square from "./Square";
import Piece from "./Piece";

interface IBoard {
  piecePosition: position;
}

function renderSquares(
  [i, j]: position,
  [piecePositionX, piecePositionY]: position
) {
  const color = (i + j) % 2 === 0;
  const pieceIsHere = i === piecePositionX && j === piecePositionY;
  const piece = pieceIsHere ? <Piece /> : null;
  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <Square color={color}>{piece}</Square>
    </div>
  );
}

export default function Board({ piecePosition }: IBoard) {
  const numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const squares = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      squares.push(renderSquares([i, j], piecePosition));
    }
  }
  return (
    <div className="text-3xl w-[40rem] h-[40rem] border-2">
      <div className="grid grid-cols-8 w-full h-full">{squares}</div>
    </div>
  );
}
