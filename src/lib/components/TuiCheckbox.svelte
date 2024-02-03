<script lang="ts">
  type T = $$Generic;
  export let label: string = "";
  export let value: T;
  export let group: T[] | undefined = undefined;
  export let disabled: boolean = false;
</script>

<label { ...$$restProps } class:tui-checkbox={true} class:disabled>
  <slot name="label">{ label }</slot>
  <input class:tui-input={true} {disabled} { ...$$restProps } type="checkbox" bind:group {value} />
  <span class:disabled></span>
</label>

<style scoped>
.tui-checkbox {
  padding-left: 39px;
  border-left: 6px double transparent;
  border-right: 6px double transparent;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}

.tui-checkbox:focus-within {
  border-color: white;
}
</style>