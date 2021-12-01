import Image from 'next/image'
import WhiteKnight from '../images/WhiteKnight.png'
import WhitePawn from '../images/WhitePawn.png'
import BlackKnight from '../images/BlackKnight.png'
import WhiteBishop from "../images/WhiteBishop.png"

interface IPiece {
    currentSquare: any
    piece: any
}
export default function Piece() {
    return (
        <div>
            <Image src={WhiteKnight} alt="BK" width={64} height={64} />
        </div>
    )
}