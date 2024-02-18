<script lang="ts">
  import type { TableRowColor } from '../$lib/enums.js';

  export let hoverColor: TableRowColor | undefined = undefined;
  export let stripeColor: TableRowColor | undefined = undefined;
  export let grid: boolean = false;
  const classMaker = (hover?: TableRowColor, stripe?: TableRowColor) => {
    const classes: string[] = [];
    if (hover) {
      classes.push(`hovered-${hover}`);
    }
    if (stripe) {
      classes.push(`striped-${stripe}`);
    }
    return classes.join(' ');
  };

  $: classes = classMaker(hoverColor, stripeColor);
</script>

<table {...$$restProps} class:tui-table={!grid} class:tui-table-grid={grid} class={classes}>
  <slot />
</table>
