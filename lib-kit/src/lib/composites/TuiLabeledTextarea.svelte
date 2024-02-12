<script lang="ts">
  import TuiTextarea from '../components/TuiTextarea.svelte';

  export let id: string;
  export let label: string;
  export let block: boolean = false;
</script>

<label for={id} class:tui-block-label={block}>
  {label}
  <TuiTextarea on:change on:input {id} {...$$restProps} />
</label>
