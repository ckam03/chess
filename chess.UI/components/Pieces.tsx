import WhitePawn from '../images/WhitePawn.png'
import WhiteRook from '../images/WhiteRook.png'
import WhiteBishop from '../images/WhiteBishop.png'
import WhiteKnight from '../images/WhiteKnight.png'
import WhiteQueen from '../images/WhiteQueen.png'
import WhiteKing from '../images/WhiteKing.png'

import BlackPawn from '../images/BlackPawn.png'
import BlackRook from '../images/BlackRook.png'
import BlackBishop from '../images/BlackBishop.png'
import BlackKnight from '../images/BlackKnight.png'
import BlackQueen from '../images/BlackQueen.png'
import BlackKing from '../images/BlackKing.png'
import { StaticImageData } from 'next/image'


export const Pieces = new Map<StaticImageData, position>([
  [WhitePawn,["A","2"]],
  [WhitePawn,["B","2"]],
  [WhitePawn,["C","2"]],
  [WhitePawn,["D","2"]],
  [WhitePawn,["E","2"]],
  [WhitePawn,["F","2"]],
  [WhitePawn,["G","2"]],
  [WhitePawn,["H","2"]],
  [WhiteRook,["A","1"]],
  [WhiteRook,["H","1"]],
  [WhiteBishop,["C","1"]],
  [WhiteBishop,["F","1"]],
  [WhiteKnight,["G","1"]],
  [WhiteKnight,["B","1"]],
  [WhiteKing,["E","1"]],
  [WhiteQueen,["D","1"]],
  [BlackPawn,["A","7"]],
  [BlackPawn,["B","7"]],
  [BlackPawn,["C","7"]],
  [BlackPawn,["D","7"]],
  [BlackPawn,["E","7"]],
  [BlackPawn,["F","7"]],
  [BlackPawn,["G","7"]],
  [BlackPawn,["H","7"]],
  [BlackRook,["A","8"]],
  [BlackRook,["H","8"]],
  [BlackBishop,["C","8"]],
  [BlackBishop,["F","8"]],
  [BlackKnight,["G","8"]],
  [BlackKnight,["B","8"]],
  [BlackKing,["E","8"]],
  [BlackQueen,["D","8"]],
])

// export const Pieces = new Map<position, StaticImageData>([
//   [["A", "2"], WhitePawn],
//   [["B", "2"], WhitePawn],
//   [["C", "2"], WhitePawn],
//   [["D", "2"], WhitePawn],
//   [["E", "2"], WhitePawn],
//   [["F", "2"], WhitePawn],
//   [["G", "2"], WhitePawn],
//   [["H", "2"], WhitePawn],
//   [["A", "1"], WhiteRook],
//   [["H", "1"], WhiteRook],
//   [["C", "1"], WhiteBishop],
//   [["F", "1"], WhiteBishop],
//   [["G", "1"], WhiteKnight],
//   [["B", "1"], WhiteKnight],
//   [["E", "1"], WhiteKing],
//   [["D", "1"], WhiteQueen],
//   [["A", "7"], BlackPawn],
//   [["B", "7"], BlackPawn],
//   [["C", "7"], BlackPawn],
//   [["D", "7"], BlackPawn],
//   [["E", "7"], BlackPawn],
//   [["F", "7"], BlackPawn],
//   [["G", "7"], BlackPawn],
//   [["H", "7"], BlackPawn],
//   [["A", "8"], BlackRook],
//   [["H", "8"], BlackRook],
//   [["C", "8"], BlackBishop],
//   [["F", "8"], BlackBishop],
//   [["G", "8"], BlackKnight],
//   [["B", "8"], BlackKnight],
//   [["E", "8"], BlackKing],
//   [["D", "8"], BlackQueen],
// ])

