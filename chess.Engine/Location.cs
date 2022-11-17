namespace chess.Engine;

public record Location(int File, Rank Rank);

public enum Rank
{
    A, B, C, D, E, F, G, H
}
