<script>
  import TuiButton from "../../lib/components/TuiButton.svelte";


  import TuiFieldset from "../../lib/components/TuiFieldset.svelte";
  import TuiLegend from "../../lib/components/TuiLegend.svelte";
  import { Color, MildColor } from "../../lib/enums";

</script>
<div style="padding: 14px">
  <TuiButton>Button</TuiButton>
  <TuiButton color={ Color.Yellow} textColor={ Color.Black } light>Button</TuiButton>
  <TuiButton fullWidth color={ MildColor.Orange } textColor={ Color.White }>Custom</TuiButton>
  <TuiButton fullWidth disabled={ true } color={ MildColor.Red }>Disabled</TuiButton>
  <TuiButton fullWidth>Focused</TuiButton>
  
</div>