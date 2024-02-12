<script>
  import { Color, MildColor, TuiCode } from "svelte-tuicss";
</script>

<h2 class="center">Code</h2>
      <h3>Dark</h3>
      <TuiCode dark code={`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`} />
      <h3>Light</h3>
      <TuiCode code={`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`} />
      <h3>Custom</h3>
      <TuiCode color={ Color.White } textColor={MildColor.Blue} code={`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`} />