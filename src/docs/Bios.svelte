<script lang="ts">
  import TuiPanel from "../lib/components/TuiPanel.svelte";
import TuiScreen from "../lib/components/TuiScreen.svelte";
import TuiTabs from "../lib/composites/TuiTabs.svelte";
  import Tab1 from "./tabs/Tab1.svelte";
  import TableTab from "./tabs/TableTab.svelte";

</script>

<TuiScreen res="800" bordered class="white-168">
  <TuiPanel fullWidth noShadow compact center>
    BIOS

  </TuiPanel>
  <TuiTabs tabs={[
    {
      tabName: "main",
      tabTitle: "Main",
      tabPanel: TableTab
    },
    {
      tabName: "exit",
      tabTitle: "Exit",
      tabPanel: Tab1
    }
  ]
  }/>
  
  <div class="tui-statusbar absolute cyan-168">
    <ul>
      <li><a href="#!"><span class="white-255-text">F1</span> Help</a></li>
      <li><a href="#!"><span class="white-255-text">↑↓</span> Select Item</a></li>
      <li><a href="#!"><span class="white-255-text">-/+</span> Change Values</a></li>
      <li><a href="#!"><span class="white-255-text">F9</span> Setup Defaults</a></li>
      <br />
      <li><a href="#!"><span class="white-255-text">Esc</span> Exit</a></li>
      <li><a href="#!"><span class="white-255-text">←→</span> Select Menu</a></li>
      <li><a href="#!"><span class="white-255-text">Enter</span> Select Sub-Menu</a></li>
      <li><a href="#!"><span class="white-255-text">F10</span> Save and Exit</a></li>
    </ul>
  </div>
</TuiScreen>