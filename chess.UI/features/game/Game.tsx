import { useState } from "react"
import { Pieces } from "../../components/Pieces"
import Board from "../board/Board"

export default function Game() {
  const [pieces, setPieces] = useState(Pieces)
  const [move, setMove] = useState<position>()

  function handleMove(newMove: position) {
    for (let [_, value] of pieces) {
      if (value.toString() === newMove.toString()) {
        //value = newMove;
      }
      console.log(value);
    }
    
  }

  return (
    <div>
      <Board pieces={Pieces} move={handleMove} />
    </div>
  )
}
