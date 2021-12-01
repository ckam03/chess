import Image from 'next/image'
import WhiteKnight from '../../images/WhiteKnight.png'
import BlackKnight from '../../images/BlackKnight.png'

interface IKnight {
    color: any;
}

const Knight: React.FC <IKnight> = ({ color }) => {
    let pieceColor: any = color ? BlackKnight : WhiteKnight
    return (
        <div>
            <Image src={pieceColor} alt="BK" width={56} height={56} />
        </div>
    )
}

export default Knight;