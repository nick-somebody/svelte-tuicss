<script lang="ts">
  import TuiInput from "../components/TuiInput.svelte";

  export let id: string;
  export let label: string;
  export let block: boolean = false;
</script>

<label for={id} class:tui-block-label={ block }>
  { label }
  <TuiInput on:change on:input {id} {...$$restProps} />
</label>