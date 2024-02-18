<script lang="ts">
  import { Position } from '$lib/enums.js';

  export let buttonText: string = '';
  export let position: Position = Position.Relative;
  let active: boolean = false;
</script>

<nav class={`tui-sidenav-container ${position}`}>
  <div class="relative">
    <ul class:open={active} class="absolute">
      <li class="tui-sidenav-li">
        <button class="tui-sidenav-button" on:click={() => (active = !active)}
          >{active ? 'x' : '≡'}{buttonText}</button
        >
        {#if active}
          <nav class="tui-sidenav active absolute">
            <ul>
              <slot />
            </ul>
          </nav>
        {/if}
      </li>
    </ul>
  </div>
</nav>

<style scoped>
  .tui-sidenav-container {
    width: 24px;
  }
  .tui-sidenav.absolute {
    top: unset;
    height: auto;
  }
  .tui-sidenav ul {
    margin-top: 0;
  }
  .tui-sidenav ul li {
    margin: 0;
  }
  .tui-sidenav-button {
    line-height: 24px;
    height: 27px;
    border-radius: 0;
    border-left: none;
    border-right: 2px solid black;
    border-top: none;
    border-bottom: 2px solid black;
  }
  .tui-sidenav-li {
    padding: 0;
    margin-left: 0;
  }
</style>
