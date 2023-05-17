interface IPieceMove {
  selected: boolean
  location: string
}

const PieceMove = ({ selected }: IPieceMove) => {
  return (
    <div
      className={`absolute w-24 h-24 bg-green-300 opacity-60 ${
        selected ? "bg-green-300" : "bg-green-100"
      }`}
    >Selected</div>
  )
}

export default PieceMove
