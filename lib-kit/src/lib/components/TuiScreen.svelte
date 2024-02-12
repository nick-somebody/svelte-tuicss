<script lang="ts">
  export let bordered: boolean = false;
  export let centered: boolean = false;
  export let res: '640' | '800' | '1024' | '' = '';
</script>

<div
  {...$$restProps}
  class:bordered
  class:centered
  class:tui-screen-640-480={res === '640'}
  class:tui-screen-800-600={res === '800'}
  class:tui-screen-1024-768={res === '1024'}
>
  <slot />
</div>

<style scoped>
  div {
    overflow: auto;
  }
</style>
