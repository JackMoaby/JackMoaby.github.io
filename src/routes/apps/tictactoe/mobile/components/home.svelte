<script>
  import TictactoeO from "../../assets/tictactoeO.svelte";
  import TictactoeX from "../../assets/tictactoeX.svelte";

  export let appState;

  const changeState = (state) => {appState = state};
</script>

<div class="home">
  <div class="title">
    <p class="poppins-bold header">Noughts & Crosses</p>
    <p class="poppins-medium">With An Evaluation Bar</p>
  </div>

  <div class="board-container">
    <div class="fake-eval"><p class="poppins-medium">M1</p></div>
    <div class="board">
      <div class="square left top"><TictactoeX /></div>
      <div class="square top"><TictactoeO /></div>
      <div class="square right top"><TictactoeX /></div>
      <div class="square left"></div>
      <div class="square"><TictactoeO /></div>
      <div class="square right"></div>
      <div class="square left bottom"><TictactoeO /></div>
      <div class="square bottom"></div>
      <div class="square right bottom"><TictactoeX /></div>
    </div>
  </div>

  <div class="options">
    <button on:click={() => {changeState("robot")}}>
      <div><p class="poppins-semibold">Play A Robot</p></div>
    </button>
    <button on:click={() => {changeState("friend")}}>
      <div><p class="poppins-semibold">Play A Friend</p></div>
    </button>
  </div>
</div>

<style>
  div.home{
    height: 100dvh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
  }

  .title{
    height: 12rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: .5rem;
    color: var(--home-title-colour);
    user-select: none;
  }

  .title > .header{
    font-size: xxx-large;
    text-decoration: underline 4px var(--home-title-underline);
  }

  .board-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1/1;
    gap: 0.25rem;
  }

  .board-container > .fake-eval{
    height: 100%;
    width: 1rem;
    border-radius: var(--border-radius);
    background-color: var(--board-fake-eval-colour);
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 0.5rem;
    color: var(--board-fake-eval-text);
  }

  .board-container > .fake-eval > p{
    transform: rotate(90deg);
  }

  .board{
    width: 100%;
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

  .options{
    height: 12rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .options > button{
    height: 4rem;
    width: 100%;
    border-radius: var(--border-radius);
    background: var(--home-button-background);
    color: var(--home-button-colour);
    padding: 0.125rem;
  }

  .options > button:focus,
  .options > button:active{
    transform: scale(0.9);
  }

  .options > button > div{
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
</style>