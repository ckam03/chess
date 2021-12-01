interface ISquare {
  color: boolean;
  //isOccupied: boolean;
  //location: position;
}


const Square: React.FC<ISquare> = ({ color, children }) => {
  const Colors = {
    Black: "#3F6212",
    White: "#F1F5F9",
  }
  //const squareColor = color ? Colors.Black : Colors.White;
  return (
    <div
      //style={{ backgroundColor: squareColor }}
      className={`flex items-center justify-center w-full h-20 ${color ? "bg-green-700" : "bg-gray-100" }`}
    >
      {children}
    </div>
  );
};
export default Square;
