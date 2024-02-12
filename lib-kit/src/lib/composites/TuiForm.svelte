<script lang="ts">
  import TuiFieldset from '../components/TuiFieldset.svelte';
  import TuiLegend from '../components/TuiLegend.svelte';

  export let heading: string = '';
  export let description: string = '';
</script>

<form {...$$restProps}>
  <TuiFieldset>
    <TuiLegend>
      {heading}
    </TuiLegend>
    {#if description}
      <div data-testid="tui-inputset-description" class="tui-inputset-description">
        {description}
      </div>
    {/if}
    <slot />
  </TuiFieldset>
</form>

<style>
  form {
    color: white;
  }
</style>
