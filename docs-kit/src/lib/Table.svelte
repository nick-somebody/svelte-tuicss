<script>
  import { MildColor, TuiPanel, TuiScreen, TuiTabs } from "svelte-tuicss";
  import Code from "./tables/Code.svelte";
  import Example from "./tables/Example.svelte";

</script>
<TuiScreen res="800" bordered class={`${MildColor.Blue}`}>
  <TuiPanel fullWidth noShadow compact center>
    Tables
  </TuiPanel>
  <TuiTabs tabs={[
    {
      tabName: "example",
      tabTitle: "Example",
      tabPanel: Example
    },
    {
      tabName: "code",
      tabTitle: "Code",
      tabPanel: Code
    }
  ]
  }/>
</TuiScreen>