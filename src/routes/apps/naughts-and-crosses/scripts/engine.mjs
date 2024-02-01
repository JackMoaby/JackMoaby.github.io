import { BitBoard } from "./utils/bitBoard.mjs";

class Engine{
  /**
   * Constructor:
   * Initialises all the data used within the engine
   * such as bitboard masks for won / winning positions
   */
  constructor(){
    this.winMasks = [7, 56, 448, 73, 146, 292, 84, 273];
    this.winMaskCount = this.winMasks.length;
  };

  /**
   * staticEval:
   * returns a static positional evaluation based on the current position
   * @param {BitBoard} naughtBoard
   * @param {BitBoard} crossBoard 
   * @returns {Number} -1 < evaluation 1, where 1 is better for cross
   */
  staticEval(naughtBoard, crossBoard){
    for (let i = 0; i < this.winMaskCount; i++){
      if ((crossBoard.board & this.winMasks[i]) === this.winMasks[i]) return 1;
      if ((naughtBoard.board & this.winMasks[i]) === this.winMasks[i]) return -1;
    };
    
    return 0;
  };

  /**
   * generateLegalMoves:
   * Generates every possible move given a specific board state
   * @param {BitBoard} naughtBoard 
   * @param {BitBoard} crossBoard 
   * @returns {Array} indexes of legal next moves
   */
  getLegalMoves(naughtBoard, crossBoard){
    const availableBitBoard = new BitBoard(~(naughtBoard.board | crossBoard.board))
    const availableMoves = [];
    for (let i = 0; i < 9; i++){
      if (availableBitBoard.getBitIndex(i)){
        availableMoves.push(i);
      };
    }

    return availableMoves;
  }


  /**
   * evalPosition:
   * evaluates the position through tree search and alpha beta pruning 
   * @param {BitBoard} naughtBoard - bitboard representation of naught
   * @param {BitBoard} crossBoard - bitboard representation of cross
   * @param {Boolean} isCrossToMove - true if cross has the next turn
   * @param {Number} depth depth is 9 for full tree search 
   * @param {Number} alpha minimum value
   * @param {Number} beta maximum value
   * @returns 
   */
  evalPosition(naughtBoard, crossBoard, isCrossToMove, depth=9, alpha=-Infinity, beta=Infinity) {
    const legalMoves = this.getLegalMoves(naughtBoard, crossBoard);
    const staticEval = this.staticEval(naughtBoard, crossBoard);

    if (depth === 0 || staticEval !== 0 || legalMoves.length === 0) {
      return [staticEval, null];
    }

    if (isCrossToMove) {
      let value = -Infinity;
      let bestMove = null;

      for (let i = 0, l = legalMoves.length; i < l; i++) {
          const currentMove = legalMoves[i];
          crossBoard.setBitIndex(currentMove);

          const evaluation = this.evalPosition(naughtBoard, crossBoard, false, depth - 1, alpha, beta);
          if (evaluation[0] > value) {
            value = evaluation[0];
            bestMove = currentMove;
          }

          alpha = Math.max(alpha, value);
          crossBoard.unsetBitIndex(currentMove);

          if (beta <= alpha) break;
      }

      return [value, bestMove];
    } else {
      let value = Infinity;
      let bestMove = null;

      for (let i = 0, l = legalMoves.length; i < l; i++) {
        const currentMove = legalMoves[i];
        naughtBoard.setBitIndex(currentMove);

        const evaluation = this.evalPosition(naughtBoard, crossBoard, true, depth - 1, alpha, beta);
        if (evaluation[0] < value) {
            value = evaluation[0];
            bestMove = currentMove;
        }

        beta = Math.min(beta, value);
        naughtBoard.unsetBitIndex(currentMove);

        if (beta <= alpha) break;
      }

      return [value, bestMove];
    }
  };

  /**
   * evaluate:
   * Wrapper function to simplify use of the evaluatePosition function
   * @param {BitBoard} naughtBoard - bitboard representation of naught
   * @param {BitBoard} crossBoard - bitboard representation of cross
   * @param {Boolean} isCrossToMove - true if cross has the next turn
   */
  evaluate(naughtBoard, crossBoard, isCrossToMove){
    const [evaluation, move] = this.evalPosition(naughtBoard, crossBoard, isCrossToMove);
    return {"move": move, "evaluation": evaluation}
  }
};

export { Engine };