<script lang="ts">
  import { Position } from "../enums";

  export let position: Position = Position.Relative;
</script>

<nav class={`tui-nav ${position}`}>
  <div class="tui-nav-section">
    <slot />
  </div>
  <div class="tui-nav-section">
    <slot name="end" />
  </div>
</nav>

<style scoped>
nav.tui-nav.tui-nav {
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  gap: 4px;
}
.tui-nav-section {
  display: flex;
}
</style>