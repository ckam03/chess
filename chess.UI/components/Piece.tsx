import WhitePawn from "../images/WhitePawn.png"
import Image from "next/image"
import { Pieces } from "./Pieces"

enum Color {
  WHITE, BLACK
}

interface IPiece {
  type: any
  // currentSquare: number
  // color: Color
}

const Piece = ({ type }: IPiece) => {
  return (
    <div>
      <Image src={type} alt="BK" width={64} height={64} />
    </div>
  )
}

export default Piece
