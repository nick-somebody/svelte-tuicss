<script lang="ts">
  export let withSpace: boolean = true;
</script>

{#if withSpace}
  <hr class="tui-divider" {...$$restProps} />
{:else}
  <div class="tui-divider" {...$$restProps} role="separator"></div>
{/if}
