<script lang="ts">
  export let header: string = "";
  export let fullWidth: boolean = false;
  export let noShadow: boolean = false;
  export let compact: boolean = false;
  export let center: boolean = false;
</script>

<div
  class="tui-panel"
  class:tui-no-shadow={noShadow}
  class:center
  class:full-width={fullWidth}
  { ...$$restProps }>
  {#if header}
    <div class="tui-panel-header">
      { header }
    </div>
  {/if}
  <div class:tui-panel-content={!compact}>
    <slot></slot>
  </div>
</div>