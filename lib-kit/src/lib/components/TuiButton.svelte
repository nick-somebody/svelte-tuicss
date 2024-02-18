<script lang="ts">
  import { Color, MildColor } from '$lib/enums.js';
  export let color: Color | MildColor | undefined = undefined;
  export let textColor: Color | MildColor | undefined = undefined;
  export let light: boolean | undefined = undefined;
  export let disabled: boolean | undefined = undefined;
  export let fullWidth: boolean | undefined = undefined;

  const deriveClasses = (classList?: string) => {
    const classes: string[] = classList?.split(' ') ?? [];
    if (color) {
      classes.push(color);
    }
    if (textColor) {
      classes.push(`${textColor}-text`);
    }
    return classes.join(' ');
  };

  $: classes = deriveClasses($$restProps.class);
</script>

<button
  {...$$restProps}
  {disabled}
  class={classes}
  class:tui-button={true}
  class:fill={fullWidth}
  class:light
  class:disabled
  on:click
>
  <slot />
  <div class="tui-button-inner"></div>
</button>

<style scoped>
  button.tui-button .tui-button-inner {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  button.tui-button:focus .tui-button-inner {
    border-left: 8px solid white;
    border-right: 8px solid white;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
  button.tui-button.light:focus {
    color: rgb(100, 0, 100) !important;
  }
  button.tui-button.light:focus .tui-button-inner {
    border-left: 8px solid black;
    border-right: 8px solid black;
  }
  button.tui-button {
    position: relative;
  }
  button.tui-button.fill {
    width: 100%;
  }
</style>
