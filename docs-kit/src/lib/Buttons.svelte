<script>
  import { TuiPanel, TuiScreen, TuiTabs } from "svelte-tuicss";
  import Code from "./buttons/Code.svelte";
  import Example from "./buttons/Example.svelte";
</script>

<TuiScreen res="800" bordered class="white-168">
  <TuiPanel fullWidth noShadow compact center>
    Buttons

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
