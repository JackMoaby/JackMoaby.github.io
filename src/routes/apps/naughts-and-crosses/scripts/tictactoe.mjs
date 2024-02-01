import { BitBoard } from "./utils/bitBoard.mjs";

class TicTacToe{
  constructor(){
    this.crossBoard = new BitBoard();
    this.naughtBoard = new BitBoard();
    this.turntomove = "cross";

    this.winMasks = [7, 56, 448, 73, 146, 292, 84, 273];
    this.gameEnd = 0;
  }

  reset(){
    this.crossBoard.clearBoard();
    this.naughtBoard.clearBoard();
    this.turntomove = "cross";
    this.gameEnd = 0;
  }

  getAvailableMoves(){
    const availabilityBitBoard = new BitBoard(~(this.crossBoard.board | this.naughtBoard.board));
    return availabilityBitBoard;
  }

  makeMove(row, column){
    if (this.gameEnd !== 0) return false;
    if (!this.getAvailableMoves().getBit(row, column)) return false;

    const currentPlayer = this.turntomove;
    if (currentPlayer == "cross"){
      this.crossBoard.setBit(row, column);
      this.turntomove = "naught";
    } else if (currentPlayer == "naught"){
      this.naughtBoard.setBit(row, column);
      this.turntomove = "cross";
    };

    this.checkForEnd();
    return true;
  }

  checkForEnd(){
    const availableMoves = this.getAvailableMoves();
    if (availableMoves.board === -512) this.gameEnd = 2;

    for (let i = 0; i < this.winMasks.length; i++){
      if ((this.naughtBoard.board & this.winMasks[i]) === this.winMasks[i]){
        this.gameEnd = -1;
      }
      if ((this.crossBoard.board & this.winMasks[i]) === this.winMasks[i]){
        this.gameEnd = 1;
      }
    }
  }
}

export { TicTacToe }