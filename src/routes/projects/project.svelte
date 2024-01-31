<script>
  export let project = {};
</script>

<a href="{project.href}" class="project">
  <div class="project-image">
    <img src="{project.imag}" alt="Jack M. Projects">
  </div>
  <div class="project-text">
    <p class="title poppins-bold">{project.name}</p>
    <p class="description poppins-medium">{project.desc}</p>
    <div class="tags">
      {#each project.tags as tag}
        <p class="tag poppins-semibold">{tag}</p>
      {/each}
    </div>
  </div>
</a>

<style>
  .project{
    --project-height: 6rem;
    --project-border: 2px;
    --project-hover-movement: 6px;
    --project-image-padding: 0.5rem;
    --project-text-padding: 0.5rem;
    --project-tag-height: 1.5rem;
    --project-tag-width: 6rem;

    min-height: var(--project-height);
    width: 100%;
    display: grid;
    grid-template-columns: var(--project-height) calc(100% - var(--project-height));
    place-items: center;
    border-radius: var(--border-radius);
    border: var(--project-border) solid var(--project-border-colour);
    transition: .125s;
  }

  .project:hover{
    transform: translate(var(--project-hover-movement), calc(-1 * var(--project-hover-movement)));
    box-shadow: calc(-1 * var(--project-hover-movement)) var(--project-hover-movement) 0px 0px var(--project-hover-colour);
    border-color: var(--project-hover-colour);
  }

  .project:focus,
  .project:active{
    transform: none;
    box-shadow: none;
    border-color: var(--project-hover-colour);
  }

  .project-image{
    height: calc(var(--project-height) - 2 * var(--project-border));
    width: calc(var(--project-height) - 2 * var(--project-border));
    padding: var(--project-image-padding);
  }

  .project-image > img{
    height: calc(var(--project-height) - 2 * var(--project-image-padding) - 2 * var(--project-border));
    width: calc(var(--project-height) - 2 * var(--project-image-padding) - 2 * var(--project-border));
    border-radius: var(--border-radius);
  }

  .project-text{
    display: flex;
    flex-direction: column;
    padding: var(--project-text-padding) 0;
    width: 100%;
  }

  .project-text > .title{
    font-size: large;
  }

  .project-text > .description{
    font-size: medium;
  }

  .project-text > .tags{
    width: 100%;
    height: var(--project-tag-height);
    margin-top: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: .5rem;
  }

  .project-text > .tags > .tag{
    height: var(--project-tag-height);
    min-width: var(--project-tag-width);
    background-color: var(--project-tag-colour);
    color: var(--project-tag-text);
    padding: .25rem;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>