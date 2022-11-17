using Spectre.Console;

namespace chess.Engine;

public class Program
{
    public static void Main(string[] args)
    {
        if (AnsiConsole.Confirm("Start new game?"))
        {
            AnsiConsole.MarkupLine("Initializing board");

            var game = new Game();
            game.CreateBoard();
        }
    }
}