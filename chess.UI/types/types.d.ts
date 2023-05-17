type position =  [ x: string, y: string ]

type piece = {
  image: StaticImageData
  currentSquare: position
  color: color
}

type color = {
  LIGHT: "bg-gray-100"
  DARK: "bg-green-700"
}
type IPiece = {
  color: color
  piece: string
}
