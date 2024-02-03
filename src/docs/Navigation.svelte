<script lang="ts">
  import TuiCode from "../lib/components/TuiCode.svelte";
  import TuiMenuItem from "../lib/components/TuiMenuItem.svelte";
    import TuiScreen from "../lib/components/TuiScreen.svelte";
  import TuiWindow from "../lib/components/TuiWindow.svelte";
  import TuiDatetime from "../lib/composites/TuiDatetime.svelte";
  import TuiDropdown from "../lib/composites/TuiDropdown.svelte";
  import TuiNavbar from "../lib/composites/TuiNavbar.svelte";
  import TuiSidenav from "../lib/composites/TuiSidenav.svelte";
    import { Position } from "../lib/enums";

</script>
<h3>Navigation</h3>
<TuiScreen res="800" bordered class="tui-bg-blue-black">
  <TuiNavbar position={Position.Relative}>
    <TuiSidenav position={Position.Relative}>
      <TuiMenuItem  href="#!">
        <span class="red-168-text">O</span>pen
        <span class="tui-shortcut">ctrl+o</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        OS Shell
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span class="red-168-text">C</span>opy
        <span class="tui-shortcut">ctrl+c</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span class="red-168-text">P</span>aste
        <span class="tui-shortcut">ctrl+v</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        Cut
        <span class="tui-shortcut">ctrl+x</span>
      </TuiMenuItem>
      <div class="tui-black-divider"></div>
      <TuiMenuItem href="#!">
        Insert
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        Delete
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        Go...
      </TuiMenuItem>
      <div class="tui-black-divider"></div>
      <TuiMenuItem href="#!">
        <span class="red-168-text">S</span>earch
        <span class="tui-shortcut">ctrl+p</span>
      </TuiMenuItem>
      <div class="tui-black-divider"></div>
      <TuiMenuItem href="#!">
        Exit <span class="tui-shortcut">F10</span>
      </TuiMenuItem>
    </TuiSidenav>
    <TuiDropdown>
      <div slot="label"><span class="red-168-text">F</span>ile</div>
      <TuiMenuItem on:click={ () => {}}>
        <span class="red-168-text">N</span>ew
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span class="red-168-text">O</span>pen...
        <span class="tui-shortcut">F3</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span class="red-168-text">S</span>ave
        <span class="tui-shortcut">F2</span>
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        S<span class="red-168-text">a</span>ve as...
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        Save a<span class="red-168-text">l</span>l
      </TuiMenuItem>
      <div class="tui-black-divider"></div>
  
      <TuiDropdown block>
        <div slot="label">
          <span class="right">►</span>
          <span class="red-168-text">M</span>ore
        </div>
        <TuiMenuItem href="#!">
          <span class="red-168-text">C</span>hange dir...
        </TuiMenuItem>
        <TuiMenuItem href="#!">
          <span class="red-168-text">P</span>rint
        </TuiMenuItem>
        <TuiMenuItem href="#!">
          <span class="red-168-text">D</span>OS shell
        </TuiMenuItem>
      </TuiDropdown>
  
      <div class="tui-black-divider"></div>
      <TuiMenuItem href="#!">
        <span class="red-168-text">Q</span>uit
        <span class="tui-shortcut">F10</span>
      </TuiMenuItem>
    </TuiDropdown>
    <TuiDatetime slot="end" formatString="dd MMM yyyy hh:mm:ss " />
  </TuiNavbar>
  <div style:padding-top={"14px"}>

  </div>
  <TuiCode dark code={`<TuiNavbar>
  <TuiSidenav slot="sidenav">
    <TuiMenuItem href="#!">
      <span class="red-168-text">O</span>pen
      <span class="tui-shortcut">ctrl+o</span>
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      OS Shell
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      <span class="red-168-text">C</span>opy
      <span class="tui-shortcut">ctrl+c</span>
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      <span class="red-168-text">P</span>aste
      <span class="tui-shortcut">ctrl+v</span>
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      Cut
      <span class="tui-shortcut">ctrl+x</span>
    </TuiMenuItem>
    <div class="tui-black-divider"></div>
    <TuiMenuItem href="#!">
      Insert
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      Delete
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      Go...
    </TuiMenuItem>
    <div class="tui-black-divider"></div>
    <TuiMenuItem href="#!">
      <span class="red-168-text">S</span>earch
      <span class="tui-shortcut">ctrl+p</span>
    </TuiMenuItem>
    <div class="tui-black-divider"></div>
    <TuiMenuItem href="#!">
      Exit <span class="tui-shortcut">F10</span>
    </TuiMenuItem>
  </TuiSidenav>
  <TuiDropdown>
    <div slot="label"><span class="red-168-text">F</span>ile</div>
    <TuiMenuItem on:click={ () => {}}>
      <span class="red-168-text">N</span>ew
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      <span class="red-168-text">O</span>pen...
      <span class="tui-shortcut">F3</span>
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      <span class="red-168-text">S</span>ave
      <span class="tui-shortcut">F2</span>
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      S<span class="red-168-text">a</span>ve as...
    </TuiMenuItem>
    <TuiMenuItem href="#!">
      Save a<span class="red-168-text">l</span>l
    </TuiMenuItem>
    <div class="tui-black-divider"></div>

    <TuiDropdown block>
      <div slot="label">
        <span class="right">►</span>
        <span class="red-168-text">M</span>ore
      </div>
      <TuiMenuItem href="#!">
        <span class="red-168-text">C</span>hange dir...
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span class="red-168-text">P</span>rint
      </TuiMenuItem>
      <TuiMenuItem href="#!">
        <span class="red-168-text">D</span>OS shell
      </TuiMenuItem>
    </TuiDropdown>

    <div class="tui-black-divider"></div>
    <TuiMenuItem href="#!">
      <span class="red-168-text">Q</span>uit
      <span class="tui-shortcut">F10</span>
    </TuiMenuItem>
  </TuiDropdown>
  <TuiDatetime formatString="dd MMM yyyy hh:mm:ss " />
</TuiNavbar>

<TuiWindow>
  <div>asdsadasd</div>
  <div>asd</div>
  <div>asd</div>
  <div>asda</div>
  <div>sd</div>
</TuiWindow>
<TuiWindow>
  <div>asdsadasd</div>
  <div>asd</div>
  <div>asd</div>
  <div>asda</div>
  <div>sd</div>
</TuiWindow>
<TuiWindow>
  <div>asdsadasd</div>
  <div>asd</div>
  <div>asd</div>
  <div>asda</div>
  <div>sd</div>
</TuiWindow>`} />
</TuiScreen>
