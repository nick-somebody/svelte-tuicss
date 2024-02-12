<script lang="ts">
  import TuiFieldset from './TuiFieldset.svelte';
  import TuiLegend from './TuiLegend.svelte';

  let basic: boolean = false;
  let heading: string = '';
</script>

<div class:tui-window={true} {...$$restProps}>
  {#if basic}
    <slot />
  {:else}
    <TuiFieldset title={heading} role="presentation">
      {#if heading}
        <TuiLegend role="presentation">{heading}</TuiLegend>
      {/if}
      <slot />
    </TuiFieldset>
  {/if}
</div>
