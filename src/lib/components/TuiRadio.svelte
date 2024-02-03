<script lang="ts">
  type T = $$Generic;

  export let label: string = "";
  export let value: T;
  export let disabled: boolean = false;
  export let group: T;
</script>

<label { ...$$restProps } class:tui-radio={true} class:disabled={disabled}>
  <slot name="label">{label}</slot>
  <input class:tui-input={true} { ...$$restProps } {disabled} bind:group={group} type="radio" {value} />
  <span class:disabled={ disabled }></span>
</label>

<style scoped>
.tui-radio {
  padding-left: 39px;
  border-left: 6px double transparent;
  border-right: 6px double transparent;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}

.tui-radio:focus-within {
  border-color: white;
}
</style>