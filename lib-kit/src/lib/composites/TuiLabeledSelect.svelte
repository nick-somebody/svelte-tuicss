<script lang="ts">
  import TuiSelect from '../components/TuiSelect.svelte';

  export let id: string;
  export let label: string;
  export let block: boolean = false;
</script>

<label for={id} class:tui-block-label={block}>
  {label}
  <TuiSelect on:change on:input {id} {...$$restProps}>
    <slot />
  </TuiSelect>
</label>
