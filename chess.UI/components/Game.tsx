import { useState } from "react"
import Board from "./Board"
import { Pieces } from "./Pieces"

enum color {
  white,
  black
}

interface Player {
  player: color
  hasTurn(): boolean
}

const playerWhite: Player = {
  player: color.white,
  hasTurn() {
    return true
  }
}
const playerBlack: Player = {
  player: color.black,
  hasTurn() {
    return false
  }
}
const Game = () => {
  const [pieces, setPieces] = useState(Pieces)

  const handleMove = (oldPosition: position, newMove: position) => {
    //click piece.  Find the location in the map. Click new square. Update map
    for (let [key, value] of pieces) {
      if (oldPosition == key) {
        //delete Object.assign()
        console.log(key);
        
      }
      //const pieceLocation: boolean = i === key[1] && j === key[0]
      //const pieceIsHere = pieceLocation ? <Piece piece={value} /> : null
    }
  }

  if (playerWhite.hasTurn()) {
    handleMove(["E","2"],["E","4"])
  }

  return (
    <div>
      <Board pieces={pieces} />
    </div>
  )
}

export default Game
