<script>
    import TuiPanel from "../lib/components/TuiPanel.svelte";
    import TuiScreen from "../lib/components/TuiScreen.svelte";
    import TuiTabs from "../lib/composites/TuiTabs.svelte";
    import Code from "./charts/Code.svelte";
    import Example from "./charts/Example.svelte";

</script>

<TuiScreen res="800" bordered class="white-168">
  <TuiPanel fullWidth noShadow compact center>
    Charts

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