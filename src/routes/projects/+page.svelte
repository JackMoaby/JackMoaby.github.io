<script>
  import Project from "./project.svelte";

  const projects = [
    {
      "name": "Noughts & Crosses Evaluation Bar",
      "desc": "With a fast αβ-search to evaluate positions (in JS)",
      "imag": "./projects/NoughtsAndCrossesEvalBar.png",
      "href": "/apps/naughts-and-crosses",
      "tags": ["2024", "FUNNY"]
    },
  ]
</script>

<div class="project-container">
  {#each projects as project}
    <Project bind:project={project} />
  {/each}
</div>

<style>
  .project-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    margin: 2rem auto 0 auto;
    gap: 0.5rem;
  }  
</style>