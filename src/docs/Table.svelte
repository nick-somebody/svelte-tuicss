<script>
  import TuiPanel from "../lib/components/TuiPanel.svelte";
  import TuiScreen from "../lib/components/TuiScreen.svelte";
  import TuiTabs from "../lib/composites/TuiTabs.svelte";
  import { MildColor } from "../lib/enums";
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