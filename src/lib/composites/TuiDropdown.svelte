
<script lang="ts">
  export let label: string = "";
</script>

<li { ...$$restProps } class:tui-dropdown={true}>
  <slot name="label"><span>{ label }</span></slot>
  <div class="tui-dropdown-content">
    <ul>
      <slot></slot>
    </ul>
  </div>
</li>

<style scoped>
.tui-dropdown:hover > .tui-dropdown-content {
  display: block;
}
</style>