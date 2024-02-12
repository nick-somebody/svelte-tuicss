<script lang="ts">
  export let disabled: boolean = false;
</script>

<fieldset {...$$restProps} class:tui-fieldset={true} class:disabled {disabled}>
  <slot />
</fieldset>
