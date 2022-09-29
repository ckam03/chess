import WhitePawn from "../images/WhitePawn.png"
import Image from "next/image"
import { Pieces } from "./Pieces"

interface IPiece {
  color: boolean
  type: any
}

const Piece = ({ color, type }: IPiece) => {
  return (
    <div>
      <Image src={type} alt="BK" width={64} height={64} />
    </div>
  )
}

export default Piece
