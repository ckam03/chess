import { useState } from "react"
import Square from "./Square"
import Piece from "../../components/Piece"
import { StaticImageData } from "next/image"

const RANKS: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"]
const FILES: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"]

enum squareColor {
  LIGHT = "bg-gray-100",
  DARK = "bg-green-700",
}

type Square = {
  color: squareColor
  location: position
  piece?: any
}

interface boardProps {
  move?: any,
  pieces: any
}

const setPiece = ([j,i]: position, pieces: Map<StaticImageData, position>) => {
  const pieceLocations: any = []
  for (let [key, value] of pieces) {
    const pieceLocation: boolean = j === value[1] && j === value[0]
    const pieceIsHere = pieceLocation ? <Piece type={key} /> : null
    pieceLocations.push(pieceIsHere)
  }
  return pieceLocations
}


export default function Board({ pieces, move }: boardProps) {
  let squares: Square[] = []
  const [selectedSquare, setSelectedSquare] = useState<Square>()

  for (let i = RANKS.length - 1; i >= 0; i--) {
    for (let j = 0; j < FILES.length; j++) {
      const setColor: squareColor =
        (i + j) % 2 === 0 ? squareColor.DARK : squareColor.LIGHT

      squares.push({
        color: setColor,
        location: [FILES[j], RANKS[i]],
        piece: setPiece([FILES[j], RANKS[i]], pieces),
      })
    }
  }
  
  function handleMove(piece: piece, newPosition: position) {
    
  }
  const handleSelected = (square: Square) => {
    if (square.piece != null) {
      console.log(square.location)
      handleMove(square.piece, ["E","3"])
    }
    return setSelectedSquare(square);
  }

  console.log(selectedSquare?.location.join('').toString());

  /*
  if selected update piece location to new selected square
  */
  
  function handleUpdatePiece() {
    
  }

  return (
    <div className="grid grid-cols-8">
      {squares.map((square: Square) => {
        return (
          <Square
            key={square.location.join("").toString()}
            handleSelected={() => handleSelected(square)}
            isSelected={square.location.join("").toString() === selectedSquare?.location.toString()}
            squareColor={square.color}
            location={square.location.join("")}
          >
            {square.piece}
          </Square>
        )
      })}
    </div>
  )
}
