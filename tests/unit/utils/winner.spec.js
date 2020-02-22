import winner from "@/utils/winner";
import winningCombinations from "../fixtures/winning-combinations";

describe("winner function", () => {
  it("should return no winner for empty squares", () => {
    // Given
    const squares = Array(9).fill(null);

    //When
    const { player, positions } = winner(squares);

    // Then
    expect(player).toBeNull();
    expect(positions).toEqual([]);
  });

  it("should return no winner for a draw game", () => {
    // Given
    const squares = ["O", "X", "O", "O", "O", "X", "X", "O", "X"];

    //When
    const { player, positions } = winner(squares);

    // Then
    expect(player).toBe(null);
    expect(positions).toEqual([]);
  });

  it("should return X as a winner and the winning positions", () => {
    // Given
    winningCombinations.forEach(([squares, winningCombination]) => {
      //When
      const { player, positions } = winner(squares);

      // Then
      expect(player).toBe("X");
      expect(positions).toEqual(winningCombination);
    });
  });
});
