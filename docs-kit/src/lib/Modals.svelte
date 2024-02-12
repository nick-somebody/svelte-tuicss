<script lang="ts">
  import { TuiCode, TuiModal } from "svelte-tuicss";
</script>


<TuiModal modalTitle="modal">
  <div>The best modal is this one<br>believe me.</div>
  <div>The best modal</div>
</TuiModal>

<TuiCode dark code={`<TuiModal modalTitle="modal">
  <div>The best modal</div>
  <div>The best modal</div>
</TuiModal>`} />