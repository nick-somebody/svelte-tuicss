<script lang="ts">
  import TuiFieldset from "../components/TuiFieldset.svelte";
  import TuiLegend from "../components/TuiLegend.svelte";
  import TuiCheckbox from "../components/TuiCheckbox.svelte";

  type T = $$Generic

  type CheckboxValue = T;
  type Option = {
    label: string;
    value: T;
    disabled?: boolean;
  }

  export let heading: string;
  export let description: string | undefined = undefined;
  export let options: Option[];
  export let group: CheckboxValue[];
</script>

<TuiFieldset { ...$$restProps}>
  <TuiLegend>{ heading}</TuiLegend>
  {#if description}
    <div class="tui-checkbox-description">{ description }</div>
  {/if}
  {#each options as {label, disabled, value}, idx (idx)}
    <label { ...$$restProps } class:tui-checkbox={true} class:disabled>
      { label }
      <input class:tui-input={true} {disabled} { ...$$restProps } type="checkbox" bind:group {value} />
      <span class:disabled></span>
    </label>
  {/each}
</TuiFieldset>


<style scoped>
.tui-checkbox-description {
  padding: 8px 12px 18px;
}
</style>