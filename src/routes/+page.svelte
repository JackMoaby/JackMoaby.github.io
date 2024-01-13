<script>

</script>

<div class="background-gradient alert">
  <p>Temporary Page</p>
  <p>More things coming in the future</p>
</div>

<style>
  .alert{
    height: 100dvh;
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: xx-large;
    text-align: center;
  }

  .background-gradient {
    background: var(--background-linear-gradient);
    background-size: 400% 400%;

    -webkit-animation: background 12s ease infinite;
    -moz-animation: background 12s ease infinite;
    -o-animation: background 12s ease infinite;
    animation: background 12s ease infinite;
  }

  @-webkit-keyframes background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @-moz-keyframes background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @-o-keyframes background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @keyframes background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
</style>