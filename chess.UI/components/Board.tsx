import Square from "./Square"
import Piece from "./Piece"
import { StaticImageData } from "next/image"
import { useState } from "react"

interface ISquare {
  color: squareColor
  location: position
  piece?: any
}

const RANKS: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"]
const FILES: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"]

enum squareColor {
  LIGHT = "bg-gray-100",
  DARK = "bg-green-700",
}

interface IBoard {
  pieces: Map<position, StaticImageData>
  move?: any
}

const setPiece = ([j, i]: position, pieces: Map<position, StaticImageData>) => {
  const pieceLocations: any = []
  for (let [key, value] of pieces) {
    const pieceLocation: boolean = i === key[1] && j === key[0]
    const pieceIsHere = pieceLocation ? <Piece type={value} /> : null
    pieceLocations.push(pieceIsHere)
  }
  return pieceLocations
}

const Board = ({ pieces }: IBoard) => {
  let squares: ISquare[] = []
  const [selectedSquare, setSelectedSquare] = useState<string>()

  for (let i = RANKS.length - 1; i >= 0; i--) {
    for (let j = 0; j < FILES.length; j++) {
      const setColor: squareColor = (i + j) % 2 === 0 
        ? squareColor.DARK 
        : squareColor.LIGHT
        
      squares.push({
        color: setColor,
        location: [FILES[j], RANKS[i]],
        piece: setPiece([FILES[j], RANKS[i]], pieces),
      })
    }
  }

  const handleSelected = (location: position) => setSelectedSquare(location.join("").toString())

  //const [selectedSquareId, setSelectedSquareId] = useState();
//.map(square => <Square isSelected={square.id === selectedSquareId}/>)
//you'll need to pass down a function to update the selected square ID when a square is clicked but that's conceptually what you need to do.
  return (
    <div className="grid grid-cols-8">
      {squares.map((square: ISquare, index: number) => {
        return (
            <Square
              key={square.location.join("").toString()}
              handleSelected={handleSelected}
              isSelected={square.location.join("").toString() === selectedSquare}
              squareColor={square.color}
              location={square.location}
            >
              {square.piece}
            </Square>
        )
      })}
    </div>
  )
}

export default Board
