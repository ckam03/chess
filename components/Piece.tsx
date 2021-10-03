import Image from 'next/image'

import WhiteKnight from '../images/WhiteKnight.png'

export default function Piece() {
    return (
        <div>
            <Image src={WhiteKnight} alt="BK" width={64} height={64} />
        </div>
    )
}