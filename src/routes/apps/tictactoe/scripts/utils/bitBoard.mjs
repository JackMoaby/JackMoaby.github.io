/**
 * BitBoard Class:
 * Represents a 3x3 game board using a 32-bit integers
 */
class BitBoard {
  /**
   * Constructor:
   * Initializes with an empty or filled bitboard
   * Inputs larger than max-size are trimmed
   */
  constructor(board){
    if (board){this.board = board % 513} 
    else {this.board = 0}
  }

  /**
   * setBoard:
   * Sets the board to a value
   * @param {number} value to initialise to
   */
  setBoard(board){
    this.board = board % 513;
  }

  /**
   * clearBoard:
   * Resets the board to an empty state
   */
  clearBoard() {
    this.board = 0;
  }

  /**
   * setBit:
   * Sets the specified bit at the given row and column to 1
   * @param {number} row - The row index (0 to 2)
   * @param {number} column - The column index (0 to 2)
   */
  setBit(row, column){
    this.board |= 1 << (row * 3 + column);
  }

  /**
   * setBitIndex:
   * Sets the specified bit at the given row and column to 1
   * @param {number} index - index in the 3x3 grid
   */
  setBitIndex(index){
    this.board |= 1 << index;
  }

  /**
   * unsetBit:
   * Sets the specified bit at the given row and column to 0
   * @param {number} row - The row index (0 to 2)
   * @param {number} column - The column index (0 to 2)
   */
  unsetBit(row, column){
    this.board &= ~(1 << (row * 3 + column));
  }

  /**
   * unsetBitIndex:
   * Sets the specified bit at the given row and column to 0
   * @param {number} index - index in the 3x3 grid
   */
  unsetBitIndex(index){
    this.board &= ~(1 << index);
  }

  /**
   * getBit:
   * Retrieves the value of the specified bit at the given row and column
   * @param {number} row - The row index (0 to 2)
   * @param {number} column - The column index (0 to 2)
   * @returns {boolean} - The value of the specified bit (true if set, false if unset)
   */
  getBit(row, column){
    return (this.board & (1 << (row * 3 + column))) !== 0;
  }

  /**
   * getBitIndex:
   * Retrieves the value of the specified bit at the given index
   * @param {number} index - the index of the target bit
   * @returns {boolean} - The value of the specified bit (true if set, false if unset)
   */

  getBitIndex(index){
    return (this.board & (1 << index)) !== 0;
  }

  /**
   * logBoard:
   * Logs the entire bitboard to the console with some nice formatting
   */
  logBoard(){
    let board = Array.from({ length: 3 }, (_, row) =>
      Array.from({ length: 3 }, (_, col) => this.getBit(row, col) ? "1" : "0")
    );

    console.table(board);
  }
}

export { BitBoard };