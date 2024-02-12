<script lang="ts">
  type ColSize = {
    offset?: number;
    width?: number;
  };
  export let s: ColSize | undefined = undefined;
  export let m: ColSize | undefined = undefined;
  export let l: ColSize | undefined = undefined;

  const sizes: ['s', 'm', 'l'] = ['s', 'm', 'l'];

  $: classes = ((args: { s?: ColSize; m?: ColSize; l?: ColSize }): string => {
    const result: string[] = [];
    sizes.forEach((s) => {
      const size = args[s];
      if (size?.offset) {
        result.push(`offset-${s}${size.offset}`);
      }
      if (size?.width) {
        result.push(`${s}${size.width}`);
      }
    });
    return result.join(' ');
  })({ s, m, l });
</script>

<div class:col={true} class={classes}>
  <slot />
</div>
