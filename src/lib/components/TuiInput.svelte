<script lang="ts">
  type T = $$Generic;

  export let value: T | undefined = undefined;
</script>

<input
  bind:value
  class:tui-input={true}
  class:disabled={$$restProps.disabled}
  {...$$restProps}
  on:change
  on:input
/>