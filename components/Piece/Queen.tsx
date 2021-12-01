import Image from 'next/image'
import WhiteQueen from '../../images/WhiteQueen.png'
import BlackQueen from '../../images/BlackQueen.png'

interface IQueen {
    color: any
}

enum colors {
    White,
    Black
}
const Queen: React.FC <IQueen> = ({ color }) => {
    let pieceColor: any = color ? BlackQueen : WhiteQueen
    return (
        <div>
            <Image src={pieceColor} alt="BK" width={64} height={64} />
        </div>
    )
}
export default Queen