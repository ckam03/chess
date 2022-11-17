using chess.Engine.Interfaces;
using Spectre.Console;

namespace chess.Engine;

public class Board
{
	//Dictionary<Location, IPiece> pieces = new();
	public Board()
	{
		var board = new Grid();
		board.AddColumns(8);
        AnsiConsole.Write(new Columns(
            new Text("1"),
            new Text("2")
        ));
		//board.AddRow(new string[] { "A", "B", "C", "D", "E", "F", "G", "H" });
        AnsiConsole.Write(board);
	}
}
