<script lang="ts">
  type T = $$Generic;
  export let value: T | undefined = undefined;
  export let label: string = "";
</script>

<option { ...$$restProps } {value}><slot>{label}</slot></option>