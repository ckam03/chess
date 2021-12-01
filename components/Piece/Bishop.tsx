import Image from 'next/image'
import WhiteBishop from '../../images/WhiteBishop.png'
import BlackBishop from '../../images/BlackBishop.png'

enum Color {
    White,
    Black
}

interface IBishop {
    color: any
}
const Bishop: React.FC <IBishop> = ({ color }) => {
    let pieceColor: any = color ? BlackBishop : WhiteBishop
    return (
        <div>
            <Image src={pieceColor} alt="BK" width={64} height={64} />
        </div>
    )
}
export default Bishop