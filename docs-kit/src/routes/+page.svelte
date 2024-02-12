<script lang="ts">
  import { Background, TuiBackground, TuiGrid, TuiPanel } from "svelte-tuicss";
  import Buttons from "$lib/Buttons.svelte";
  import Charts from "$lib/Charts.svelte";
  import Inputs from "$lib/Inputs.svelte";
  import Layouts from "$lib/Layouts.svelte";
  import Modals from "$lib/Modals.svelte";
  import Navigation from "$lib/Navigation.svelte";
  import Table from "$lib/Table.svelte";
  import Bios from "$lib/Bios.svelte";
</script>

<main>
  <TuiBackground color={Background.BlueWhite}>
    <TuiGrid>
      <TuiPanel fullWidth style="margin:28px 0;">
        <h1 class="center" aria-label="svelte-tuicss">
          ===========svelte-tuicss===========
        </h1>
      </TuiPanel>
    </TuiGrid>
    <TuiGrid>
      <div class="examples">
        <Buttons />
        <Charts />
        <Inputs />
        <Layouts />
        <Modals />
        <Navigation />
        <Table />
        <Bios />
      </div>
    </TuiGrid>
  </TuiBackground>
</main>

<style scoped>
  .examples {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
