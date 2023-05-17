interface ISquare {
  squareColor: squareColor
  location: position
  isSelected: boolean
  handleSelected: any
  children: React.ReactNode
}

enum squareColor {
  LIGHT = "bg-gray-100",
  DARK = "bg-green-700",
}

export default function Square(props: ISquare) {
  return (
    <div
      onClick={() => props.handleSelected(props.location)}
      className={`w-24 h-24 border border-black flex items-center justify-center 
      ${props.isSelected ? "bg-yellow-500" : props.squareColor}`}
    >
      <span className="hidden">{props.location}</span>
      <span>{props.children}</span>
    </div>
  )
}

