import Image from 'next/image'
import WhiteRook from '../../images/WhiteRook.png'
import BlackRook from '../../images/BlackRook.png'

enum Color {
    White,
    Black
}

interface IRook {
    color: any
}
const Rook: React.FC <IRook> = ({ color }) => {
    let pieceColor: any = color ? BlackRook : WhiteRook
    return (
        <div>
            <Image src={pieceColor} alt="BK" width={64} height={64} />
        </div>
    )
}
export default Rook