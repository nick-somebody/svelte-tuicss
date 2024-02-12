<script lang="ts">
  import { TuiTBody, TuiTable, TuiTd, TuiTr } from "svelte-tuicss";
</script>

<TuiTable grid>
  <TuiTBody>
    <TuiTr>
      <TuiTd rowSpan={2} width="60%" class="blue-168-text">
        <br />System Time.........:<input type="text" class="tui-input white-168 black-text input-width" value="[09:21:30]" />
        <br />System Date.........:<input type="text" class="tui-input white-168 black-text input-width" value="[15/09/1994]" />
        <br />
        <br />Legacy Diskette A...:<input type="text" class="tui-input white-168 black-text input-width" value="[1.44/1.25 MB]" />
        <br />Legacy Diskette B...:<input type="text" class="tui-input white-168 black-text input-width" value="[disabled]" />
        <br />
        <br />Primary Master......:<input type="text" class="tui-input white-168 black-text input-width" value="[None]" />
        <br />Primary Slave.......:<input type="text" class="tui-input white-168 black-text input-width" value="[None]" />
        <br />Secondary Master....:<input type="text" class="tui-input white-168 black-text input-width" value="[CD-ROM]" />
        <br />Secondary Slave.....:<input type="text" class="tui-input white-168 black-text input-width" value="[None]" />
        <br />
        <br />Keyboard Features...:<input type="text" class="tui-input white-168 black-text input-width" value="[Enter]" />
        <br />
        <br />System Memory.......:<input type="text" class="tui-input white-168 black-text input-width" value="[640 KB]" />
        <br />Extended Memory.....:<input type="text" class="tui-input white-168 black-text input-width" value="[3568410 KB]" />
        <br />Boot-time Diagnostic:<input type="text" class="tui-input white-168 black-text input-width" value="[Enabled]" />
      </TuiTd>
      <TuiTd width="40%" class="center">Item Specified Help</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd width="25" height="448px">
        <br />&#60;Tab&#62;, &#60;Shift-Tab&#62; or &#60;Enter&#62; selects field.
      </TuiTd>
    </TuiTr>
  </TuiTBody>
</TuiTable>