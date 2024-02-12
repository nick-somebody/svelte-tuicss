<script lang="ts">
  type T = $$Generic; /* eslint-disable-line no-undef */

  export let value: T | undefined = undefined;
</script>

<select bind:value {...$$restProps} class:tui-input={true} class:disabled={$$restProps.disabled}>
  <slot />
</select>
