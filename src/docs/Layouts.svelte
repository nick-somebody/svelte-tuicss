<script>
  import TuiPanel from "../lib/components/TuiPanel.svelte";
  import TuiScreen from "../lib/components/TuiScreen.svelte";
  import TuiTabs from "../lib/composites/TuiTabs.svelte";
    import { MildColor } from "../lib/enums";
  import Code from "./layouts/Code.svelte";
  import Example from "./layouts/Example.svelte";
</script>

<TuiScreen res="800" bordered class={`${MildColor.White}`}>
  <TuiPanel fullWidth noShadow compact center>
    Layouts
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