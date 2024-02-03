<script>

  import TuiTBody from "../../lib/components/table/TuiTBody.svelte";
  import TuiTHead from "../../lib/components/table/TuiTHead.svelte";
  import TuiTable from "../../lib/components/table/TuiTable.svelte";
  import TuiTd from "../../lib/components/table/TuiTd.svelte";
  import TuiTh from "../../lib/components/table/TuiTh.svelte";
  import TuiTr from "../../lib/components/table/TuiTr.svelte";
  import { TableRowColor } from "../../lib/enums";

</script>

<TuiTable stripeColor={TableRowColor.Purple} hoverColor={TableRowColor.Cyan}>
  <TuiTHead>
    <TuiTr>
      <TuiTh>Name</TuiTh>
      <TuiTh>Age</TuiTh>
      <TuiTh>Job</TuiTh>
      <TuiTh>Email</TuiTh>
      <TuiTh>Phone</TuiTh>
      <TuiTh>Nationality</TuiTh>
    </TuiTr>
  </TuiTHead>
  <TuiTBody>
    <TuiTr>
      <TuiTd>Steve</TuiTd>
      <TuiTd>40</TuiTd>
      <TuiTd>Designer</TuiTd>
      <TuiTd>steve@house.com.au</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>Australia</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Fred</TuiTd>
      <TuiTd>55</TuiTd>
      <TuiTd>Engineer</TuiTd>
      <TuiTd>fred@gnail.com</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>Australia</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Gregor</TuiTd>
      <TuiTd>25</TuiTd>
      <TuiTd>Grad</TuiTd>
      <TuiTd>greg-audio@dynamite.com.au</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>Japan</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Harry</TuiTd>
      <TuiTd>43</TuiTd>
      <TuiTd>Manager</TuiTd>
      <TuiTd>harryhoudini@magic.com.au</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>Australia</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Phillip</TuiTd>
      <TuiTd>43</TuiTd>
      <TuiTd>Manager</TuiTd>
      <TuiTd>get-your-phil@house.com.au</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>New Zealand</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Jackson</TuiTd>
      <TuiTd>43</TuiTd>
      <TuiTd>Manager</TuiTd>
      <TuiTd>crackson@huouse.com.au</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>Australia</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Bradley</TuiTd>
      <TuiTd>43</TuiTd>
      <TuiTd>Manager</TuiTd>
      <TuiTd>brad-remembers1231@house.com.au</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>China</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Harry</TuiTd>
      <TuiTd>43</TuiTd>
      <TuiTd>Manager</TuiTd>
      <TuiTd>harryhoudini@magic.com.au</TuiTd>
      <TuiTd>04123123123</TuiTd>
      <TuiTd>Spain</TuiTd>
    </TuiTr>
  </TuiTBody>
</TuiTable>