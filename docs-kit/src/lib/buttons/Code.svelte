<script>
  import { TuiCode } from "svelte-tuicss";
</script>

<div style:padding="14px">

<TuiCode dark code={ `<TuiButton>Button</TuiButton>
<TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
<TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
<TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
<TuiButton fullWidth>Focused</TuiButton>` } />
</div>