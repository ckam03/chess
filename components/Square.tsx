import Piece from "./Piece"
import WhitePawn from "../images/WhitePawn.png"
import { Pieces } from "./Pieces"
import { useState } from "react"
import PieceMove from "./PieceMove"

interface ISquare {
  squareColor: squareColor
  location: position
  children: React.ReactNode
}

enum squareColor {
  LIGHT = "bg-gray-100",
  DARK = "bg-green-700",
}

const Square: React.FC<ISquare> = (props) => {
  const [color, setColor] = useState<string>("bg-green-700")
  const [selected, setSelected] = useState<boolean>(false)

  const handleSelected = () => {}

  return (
    <div
      onClick={() => {
        setSelected(!selected)
        console.log(props.children)
      }}
      className={`w-24 h-24 border border-black flex items-center justify-center 
      ${props.squareColor}`}
    >
      <span className="hidden">{props.location}</span>
      {selected && <PieceMove />}
      <div>{props.children}</div>
    </div>
  )
}

export default Square
