<script>
  import Icon from "./icon.svelte";
  let iconColour = "#ffb133";
</script>

<header>
  <div class="header">
    <a href="/" class="logo">
      <div class="icon-container"><Icon bind:colour={iconColour}/></div>
      <p class="name poppins-bold">Jack M.</p>
    </a>

    <nav>
      <a href="/projects"><p class="poppins-bold">All Projects</p></a>
    </nav>
  </div>
</header>

<style>
  header{
    --header-height: 3.75rem;
    --header-padding: calc(0.75rem / 2);

    width: 100%;
    height: var(--header-height);
    padding: var(--header-padding) 0;
  }

  .header{
    width: 90%;
    margin: auto;
    max-width: 600px;
    height: calc(var(--header-height) - 2 * var(--header-padding));
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    height: 100%;
    width: min-content;
    display: flex;
    gap: .5rem;
    transition: .125s ease-out;
  }

  .logo:active,
  .logo:focus{
    transform: scale(0.9);
  }

  .logo > .name{
    width: max-content;
    display: flex;
    align-items: center;
    font-size: medium;
    color: var(--navbar-logo-text);
    text-decoration: underline solid var(--navbar-logo-underline) var(--underline-size);
  }

  .icon-container{
    height: calc(var(--header-height) - 2 * var(--header-padding));
    width: calc(var(--header-height) - 2 * var(--header-padding));
  }

  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }

  nav > a > *{
    font-size: medium;
    color: var(--navbar-text);
    text-decoration: none;
    min-height: calc(var(--header-height) - 3 * var(--header-padding));
    min-width: 4rem;
    padding: 0 .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: var(--border-radius);
    transition: .125s ease-out;
  }

  nav > a > *:active,
  nav > a > *:focus{
    transform: scale(0.9);
  }

  nav > a > *:hover{
    text-decoration: underline solid var(--navbar-logo-underline) var(--underline-size);
  }



</style>