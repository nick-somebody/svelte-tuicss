<script lang="ts">
  import TuiFieldset from '../components/TuiFieldset.svelte';
  import TuiLegend from '../components/TuiLegend.svelte';
  import TuiRadio from '../components/TuiRadio.svelte';

  type T = $$Generic; /* eslint-disable-line no-undef */

  type Option = {
    label: string;
    value: T;
    disabled?: boolean;
  };

  export let heading: string;
  export let description: string | undefined = undefined;
  export let options: Option[];
  export let selected: T;
</script>

<TuiFieldset {...$$restProps}>
  <TuiLegend>{heading}</TuiLegend>
  {#if description}
    <div data-testid="tui-radio-description" class="tui-radio-description">{description}</div>
  {/if}
  {#each options as opt, idx (idx)}
    <TuiRadio label={opt.label} value={opt.value} bind:group={selected} disabled={opt.disabled} />
  {/each}
</TuiFieldset>

<style scoped>
  .tui-radio-description {
    padding: 8px 12px 18px;
  }
</style>
