<script lang="ts">
  type T = $$Generic; /* eslint-disable-line no-undef */

  export let value: T | undefined = undefined;
  export let disabled: boolean = false;
</script>

<input
  bind:value
  class:tui-input={true}
  class:disabled
  {disabled}
  {...$$restProps}
  on:change
  on:input
/>
