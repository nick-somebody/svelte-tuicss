<script>
  import TuiCode from "../lib/components/TuiCode.svelte";
  import TuiModal from "../lib/composites/TuiModal.svelte";

</script>


<TuiModal modalTitle="modal">
  <div>The best modal is this one<br>believe me.</div>
  <div>The best modal</div>
</TuiModal>

<TuiCode dark code={`<TuiModal modalTitle="modal">
  <div>The best modal</div>
  <div>The best modal</div>
</TuiModal>`} />