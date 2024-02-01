<script>
  import { slide } from 'svelte/transition';

  import Home from "./components/home.svelte";
  import PlayRobot from "./components/playRobot.svelte";
  import PlayHuman from "./components/playHuman.svelte";
  import "./mobile.css";


  let appState = "home";
</script>

<div class="background-wrapper">
  {#if appState === "home"}
    <section class="app" 
      in:slide={{ delay: 250, duration: 250, axis: "x"}}
      out:slide={{ duration: 250, axis: "x" }}
    >
      <Home bind:appState={appState} />
    </section>
  {:else if appState == "robot"}
    <section class="app" 
      in:slide={{ delay: 250, duration: 250, axis: "x"}}
      out:slide={{ duration: 250, axis: "x"}}
    >
      <PlayRobot bind:appState={appState}/>
    </section>
  {:else if appState == "friend"}
    <section class="app" 
      in:slide={{ delay: 250, duration: 250, axis: "x"}}
      out:slide={{ duration: 250, axis: "x"}}
    >
      <PlayHuman bind:appState={appState} />
    </section>
  {/if}
</div>


<style>
  div.background-wrapper{
    height: 100dvh;
    width: 100%;
    background: var(--dark-teal);
  }

  section.app{
    height: 100%;
    width: 100%;
    background-color: var(--white);
    position: relative;
  }
</style>