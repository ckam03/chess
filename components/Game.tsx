import { useState } from "react"
import Board from "./Board"
import { Pieces } from "./Pieces"

const Game = () => {
  const whiteHasTurn: boolean = true

  const [pieces, setPieces] = useState(Pieces)

  const handleMove = () => {
    //click piece.  Find the location in the map. Click new square. Update map
    for (let [key, value] of Pieces) {
      //const pieceLocation: boolean = i === key[1] && j === key[0]
      //const pieceIsHere = pieceLocation ? <Piece piece={value} /> : null
    }
  }

  return (
    <div>
      <Board />
    </div>
  )
}

export default Game
