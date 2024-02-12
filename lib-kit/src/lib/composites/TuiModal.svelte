<script lang="ts">
  import TuiButton from '../components/TuiButton.svelte';
  import TuiModalBase from '../components/TuiModalBase.svelte';

  export let modalTitle: string = '';

  let showModal = false;
</script>

<TuiButton on:click={() => (showModal = !showModal)}
  ><slot name="button">Open modal</slot></TuiButton
>

<TuiModalBase
  {modalTitle}
  bind:showModal
  on:close={() => {
    showModal = false;
  }}
>
  <slot />
</TuiModalBase>
