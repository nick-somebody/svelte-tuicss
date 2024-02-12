<script>
  import { MildColor, TuiPanel, TuiScreen, TuiTabs } from "svelte-tuicss";
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