<script lang="ts">
  import { Color, MildColor } from '../enums';

  export let code: string;
  export let color: Color | MildColor | undefined = undefined;
  export let textColor: Color | MildColor | undefined = undefined;
  export let dark: boolean | undefined = undefined;

  const getClasses = (classList: string, dark?: boolean) => {
    const classes = classList.split(' ');
    if (color) {
      classes.push(color);
    } else {
      classes.push(dark ? MildColor.Black : MildColor.White);
    }
    if (textColor) {
      classes.push(`${textColor}-text`);
    } else {
      classes.push(`${dark ? MildColor.Cyan : MildColor.Black}-text`);
    }
    return classes.join(' ');
  };

  $: classes = getClasses($$restProps.class ?? '', dark);
</script>

<pre class:tui-code={true} class={classes} {...$$restProps}>
<code role="figure">{code}</code>
</pre>

<style scoped>
  pre.tui-code {
    margin: 0;
    border: 2px solid black;
    border-radius: 2px;
    padding: 18px 10px;
  }
  pre.tui-code > code {
    white-space: pre;
    font-family: monospace;
  }
</style>
