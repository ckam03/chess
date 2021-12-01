import Image from 'next/image'
import WhiteKing from '../../images/WhiteKing.png'
import BlackKing from '../../images/BlackKing.png'
enum Color {
    White,
    Black
}

interface IKing {
    color: any;
}
const King: React.FC <IKing> = ({ color }) => {
    let pieceColor: any = color ? BlackKing : WhiteKing
    return (
        <div>
            <Image src={pieceColor} alt="BK" width={64} height={64} />
        </div>
    )
}
export default King