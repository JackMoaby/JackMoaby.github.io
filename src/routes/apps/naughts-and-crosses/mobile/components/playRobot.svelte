<script>
  import { fade } from 'svelte/transition';
  import { TicTacToe } from "../../scripts/tictactoe.mjs";
  import { Engine } from "../../scripts/engine.mjs";

  import LeftArrow from "../../assets/leftArrow.svelte";
  import TictactoeO from "../../assets/tictactoeO.svelte";
  import TictactoeX from "../../assets/tictactoeX.svelte";

  export let appState;
  const changeState = (state) => {appState = state };

  const game = new TicTacToe();
  const engine = new Engine();
  let boardState = [];
  let engineEvaluation = 0;
  let engineBestMove = 0;
  let gameOverState;

  const gameReset = () => {
    game.reset();
    boardState = [];
    gameOverState = 0;
    engineEvaluation = 0;
    engineBestMove = 0;
  }; gameReset();

  const playEngineMove = (bestMoveIndex, isCurrentPlayerCross) => {
    const engineMoveColumn = bestMoveIndex % 3;
    const engineMoveRow = (bestMoveIndex - engineMoveColumn) / 3;

    game.makeMove(engineMoveRow, engineMoveColumn);
    boardState[bestMoveIndex] = isCurrentPlayerCross ? "cross" : "naught";
  }

  const playMove = (row, column) => {
    const currentPlayer = game.turntomove;
    const nextPlayerIsCross = currentPlayer === "cross" ? false : true;
    const moveSuccess = game.makeMove(row, column);
    const moveIndex = row * 3 + column;

    if (moveSuccess) {
      boardState[moveIndex] = currentPlayer;
      const engineResult = engine.evaluate(
        game.naughtBoard,
        game.crossBoard,
        nextPlayerIsCross
      );

      engineEvaluation = engineResult.evaluation;
      engineBestMove = engineResult.move;

      if (game.gameEnd === 0) playEngineMove(engineBestMove, nextPlayerIsCross);

      if (game.gameEnd === -1) gameOverState = "Nought Won";
      if (game.gameEnd === 1) gameOverState = "Cross Won";
      if (game.gameEnd === 2) gameOverState = "Draw";
    }
  }
</script>

<div class="container">
  <button class="return" on:click={() => {changeState("home")}}>
    <div><LeftArrow /></div>
  </button>

  <div class="board-container">
    <div class="eval" style="--engine-eval: {engineEvaluation}">
      <div class="eval-naught"></div>
      <div class="eval-cross"></div>
    </div>
    <div class="board">
      {#each {length: 3} as _, row}
          {#each {length: 3} as _, column}
            <button class="square" 
              on:click={() => {playMove(row, column)}} 
              class:left={column === 0} 
              class:right={column === 2} 
              class:top={row === 0} 
              class:bottom={row === 2}
            >
              {#if boardState[row * 3 + column] === "naught"}
                <div transition:fade={{ duration: 125 }}><TictactoeO /></div>
              {:else if boardState[row * 3 + column] === "cross"}
                <div transition:fade={{ duration: 125 }}><TictactoeX /></div>
              {/if}
            </button>
          {/each}
      {/each}
    </div>
  </div>
  
  {#if gameOverState}
    <div class="modal" transition:fade={{ duration: 125 }}>
      <p class="poppins-semibold">{gameOverState}</p>
      <button on:click={() => {gameReset()}}>
        <p class="poppins-bold">Play Again</p>
      </button>
    </div>
  {/if}
</div>
<style>
  .container{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .modal{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 6rem;
    width: 90%;
    z-index: 999;
    background-color: var(--board-modal-background);
    color: var(--white);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .modal > button{
    height: 3rem;
    width: 90%;
    margin: auto;
    border-radius: var(--border-radius);
    background-color: var(--board-modal-button);
  }

  .modal > p{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--board-modal-title-colour);
  }

  .return{
    position: absolute;
    top: .5rem;
    left: .5rem;
    border-radius: var(--border-radius);
    background: var(--board-arrow-background);
    padding: 0.125rem;
    height: 4rem;
    width: 4rem;
    transition: .25s ease-in-out;
  }

  .return > div{
    height: 100%;
    width: 100%;
    border: 2px solid var(--white);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: x-large;
  }

  .return:focus,
  .return:active{
    transform: scale(0.9);
  }


  .board-container{
    width: 100%;
    height: min-content;
    display: grid;
    grid-template-columns: 2rem calc(100% - 2rem);
    place-items: center;
  }

  .eval{
    --engine-eval: 0;
    height: 100%;
    width: 1rem;
    margin-left: auto;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .eval-cross{
    height: calc((var(--engine-eval) + 1) * 50%);
    width: 100%;
    background-color: var(--board-X-colour);
  }

  .eval-naught{
    height: calc(100% - ((var(--engine-eval) + 1) * 50%));
    width: 100%;
    background-color: var(--board-O-colour);
    transition: .125s ease-in-out;
  }

  

  .board{
    width: 90%;
    margin: auto;
    aspect-ratio: 1/1;
    display: grid;
    grid-template-columns: 33.333% 33.333% 33.333%;
    grid-template-rows: 33.333% 33.333% 33.333%;
    position: relative;
  }

  .board > .square{
    border: var(--board-line-width) solid var(--board-line-colour);
  }

  .board > .square.left{
    border-left-style: none;
  }

  .board > .square.right{
    border-right-style: none;
  }

  .board > .square.top{
    border-top-style: none;
  }

  .board > .square.bottom{
    border-bottom-style: none;
  }
</style>