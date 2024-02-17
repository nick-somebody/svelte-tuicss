<script lang="ts">
  import { base } from "$app/paths";
  import { TuiPanel, TuiScreen, TuiTabs } from "svelte-tuicss";
  import Example from "./Bios/Example.svelte";
  import Code from "./Bios/Code.svelte";
</script>

<TuiScreen res="800" bordered class="white-168">
  <TuiPanel fullWidth noShadow compact center>BIOS</TuiPanel>
  <TuiTabs
    tabs={[
      {
        tabName: "example",
        tabTitle: "Example",
        tabPanel: Example,
      },
      {
        tabName: "code",
        tabTitle: "Code",
        tabPanel: Code,
      },
    ]}
  />

  <div class="tui-statusbar absolute cyan-168">
    <ul>
      <li><a href={base}><span class="white-255-text">F1</span> Help</a></li>
      <li>
        <a href={base}><span class="white-255-text">↑↓</span> Select Item</a>
      </li>
      <li>
        <a href={base}><span class="white-255-text">-/+</span> Change Values</a>
      </li>
      <li>
        <a href={base}><span class="white-255-text">F9</span> Setup Defaults</a>
      </li>
      <br />
      <li><a href={base}><span class="white-255-text">Esc</span> Exit</a></li>
      <li>
        <a href={base}><span class="white-255-text">←→</span> Select Menu</a>
      </li>
      <li>
        <a href={base}
          ><span class="white-255-text">Enter</span> Select Sub-Menu</a
        >
      </li>
      <li>
        <a href={base}><span class="white-255-text">F10</span> Save and Exit</a>
      </li>
    </ul>
  </div>
</TuiScreen>
