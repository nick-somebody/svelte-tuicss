<script lang="ts">
  import TuiFieldset from "../components/TuiFieldset.svelte";
  import TuiLegend from "../components/TuiLegend.svelte";

  export let heading: string = "";
  export let description: string = "";
</script>


<form {...$$restProps}>
  <TuiFieldset>
    <TuiLegend>
      { heading }
    </TuiLegend>
    {#if description}
      <div class="tui-inputset-description">
        { description }
      </div>
    {/if}
    <slot></slot>
  </TuiFieldset>
</form>

<style>
  form {
    color: white;
  }
</style>