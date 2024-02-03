<script lang="ts">
  import { Color, MildColor } from "../enums";
  import TuiButton from "./TuiButton.svelte";
  import TuiFieldset from "./TuiFieldset.svelte";
  import TuiLegend from "./TuiLegend.svelte";
  export let modalTitle: string;
  let dialog: HTMLDialogElement;

  export let showModal: boolean = false;
  $: if (showModal) { dialog?.showModal(); console.log("asdasdasd ", showModal) };
</script>

<dialog
  bind:this={dialog}
  style:padding={0}
  on:close
>
  <div
    class="tui-modal-container active"
    aria-label={ modalTitle }
    >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="tui-modal active"  role="alertdialog">
      <div class="tui-window red-168 left-align">
        <fieldset class="tui-fieldset">
          <TuiLegend role="presentation">{ modalTitle }</TuiLegend>
          <slot></slot>
          <div class="tui-divider"></div>
          <div class="tui-modal-controls">
            <TuiButton autofocus on:click={() => dialog.close()} class="tui-modal-close-button right" color={MildColor.Cyan} textColor={Color.Black}>
              Close
            </TuiButton>
          </div>
        </fieldset>
      </div>
    </div>

  </div>
</dialog>

<style scoped>
.tui-modal-container {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
.tui-modal-container.active {
  display: flex;
}
.tui-modal {
  display: block;
  position: unset;
  left: unset;
  right: unset;
  top: unset;
}
.tui-modal .tui-fieldset {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 400px;
}
.tui-modal-controls {
  display: flex;
  justify-content: end;
}

</style>