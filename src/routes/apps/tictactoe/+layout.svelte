<script>
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';

  const mobileScreenWidth = 800

  let innerWidth = Infinity;
  let isScreenBig = innerWidth >= mobileScreenWidth
  let prevScreenBig = null;

  $: {
    if (isScreenBig !== prevScreenBig) {
      if (isScreenBig){
        if (browser) goto("/apps/tictactoe/desktop");
      } else {
        if (browser) goto("/apps/tictactoe/mobile");
      }
    }
    prevScreenBig = isScreenBig;
  }

  $: isScreenBig = innerWidth >= mobileScreenWidth;
</script>

<svelte:window bind:innerWidth />
<slot></slot>