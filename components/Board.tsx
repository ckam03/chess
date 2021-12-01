import Knight from "./Piece/Knight";
import Square from "./Square";
import Piece from "./Piece/Piece";
import Pawn from "./Piece/Pawn";
import { Pieces } from "./Piece/Pieces";

//check if square has piece
//each piece needs to hold the location?

const handleInitBoard = ([i, j]: position, notation: any) => {
  //set the color of each square
  const setColor: boolean = (i + j) % 2 === 0;
  //iterate through the pieces array and check where each piece is placed
  const piecesMap = Pieces.map((piece,index) => {

    const pieceLocation: boolean = (i === piece.file && j === piece.rank);
    const isPieceHere: any = pieceLocation ? piece.piece : null;
    return isPieceHere;
  })

  return (
    <div className="flex items-center justify-center">
      <Square color={setColor}>
        {piecesMap}
        <span className="hidden">{notation}</span>
      </Square>
    </div>
  );
};

const Board = () => {
  const ranks: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const files: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let squares: any[] = [];

  for (let i = ranks.length - 1; i >= 0; i--) {
    for (let j = 0; j < files.length; j++) {  
        squares.push(handleInitBoard([i, j], files[j] + ranks[i]));      
    }
  }
  return <div className="grid grid-cols-8 w-full h-full">{squares}</div>;
};
export default Board;
