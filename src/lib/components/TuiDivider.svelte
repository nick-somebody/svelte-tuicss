<script lang="ts">
  let withSpace: boolean = true;
</script>

<svelte:element this={ withSpace ? 'hr' : 'div' } class="tui-divider" { ...$$restProps }></svelte:element>