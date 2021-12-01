import Image from 'next/image'
import WhitePawn from '../../images/WhitePawn.png'
import BlackPawn from '../../images/BlackPawn.png'

interface IPawn {
    color: any
}
const Pawn: React.FC <IPawn> = ({ color }) => {
    let pieceColor: any = color ? BlackPawn : WhitePawn
    return (
        <div>
            <Image src={pieceColor} alt="BK" width={64} height={64} />
        </div>
    )
}
export default Pawn;