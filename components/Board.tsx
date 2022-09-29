import Square from "./Square"
// import Piece from "./Piece"
import { Pieces } from "./Pieces"
import Piece from "./Piece"
import { useState } from "react"
// import WhitePawn from "../images/WhitePawn.png"
// import { useState } from "react"


// // interface Piece {
// //   location: position
// //   image: any
// // }

// interface IBoard {
//   pieces: any[]
// }

// let piecesArray = [...Pieces]

// const setPiece = ([j, i]: any) => {
//   const pieceMap = piecesArray.map((piece) => {
//     const pieceLocation: boolean = i === piece.file && j === piece.rank
//     const pieceIsHere = pieceLocation ? <Piece piece={piece.piece} /> : null
//     return pieceIsHere
//   })
//   return pieceMap
// }
// const Board = ({ pieces }: IBoard) => {
//   let squares: Square[] = []

//   //const [pieces, setPieces] = useState()

//   for (let i = RANKS.length - 1; i >= 0; i--) {
//     for (let j = 0; j < FILES.length; j++) {
//       const setColor: boolean = (i + j) % 2 === 0

//       squares.push({
//         color: setColor,
//         location: [FILES[j], RANKS[i]],
//         piece: setPiece([FILES[j], RANKS[i]]),
//       })
//     }
//   }

//   return (
//     <div className="grid grid-cols-8">
//       {squares.map((square: Square, index: number) => {
//         return (
//           <Square
//             key={index.toString()}
//             color={square.color}
//             location={square.location}
//           >
//             {square.piece}
//           </Square>
//         )
//       })}
//     </div>
//   )
// }

// export default Board

const setPiece = ([j, i]: position) => {
  for (let [key, value] of Pieces) {
    const pieceLocation: boolean = i === key[1] && j === key[0]
    //const pieceIsHere = pieceLocation ? <Piece piece={value} /> : null
  }
  // const pieceMap = piecesArray.map((piece) => {
  //   const pieceLocation: boolean = i === piece.file && j === piece.rank
  //   const pieceIsHere = pieceLocation ? <Piece piece={piece.piece} /> : null
  //   return pieceIsHere
  // })
  // return pieceMap
}


interface ISquare {
  color: squareColor
  location: position
  piece?: any
}

const RANKS: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"]
const FILES: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"]

//const pieces = new Map<position, Piece>() 

enum squareColor {
  LIGHT = "bg-gray-100",
  DARK = "bg-green-700"
}

interface IBoard {
  pieces: any[]
}

const Board = () => {
  const [selectedSquare, setSelectedSquare] = useState<string>()
  let squares: ISquare[] = []

  for (let i = RANKS.length - 1; i >= 0; i--) {
    for (let j = 0; j < FILES.length; j++) {
        const setColor: squareColor = (i + j) % 2 === 0 ? squareColor.DARK : squareColor.LIGHT
        squares.push({
          color: setColor,
          location: [FILES[j], RANKS[i]],
        })
    }
  }
  return (
    <div className="grid grid-cols-8">
           {squares.map((square: ISquare, index: number) => {
            return (
              <Square                
                key={index.toString()}
                squareColor={square.color}
                location={square.location}
              >
                {/* {square.piece} */}
              </Square>
            )
          })}
        </div>
  )
}

export default Board
