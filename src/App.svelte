<script lang="ts">
  import TuiBackground from './lib/components/TuiBackground.svelte';
  import { Background } from "./lib/enums"
  import TuiGrid from './lib/components/TuiGrid.svelte';
  import Buttons from './docs/Buttons.svelte';
  import Charts from './docs/Charts.svelte';
  import Inputs from './docs/Inputs.svelte';
  import Layouts from './docs/Layouts.svelte';
  import Modals from './docs/Modals.svelte';
  import Navigation from './docs/Navigation.svelte';
  import Table from './docs/Table.svelte'
  import Bios from './docs/Bios.svelte';
  import TuiPanel from './lib/components/TuiPanel.svelte';
</script>

<main>

  <TuiBackground color={Background.BlueWhite}>
    <TuiGrid>
      <TuiPanel fullWidth style="margin:28px 0;">
        <h1 class="center" aria-label="React TUI">
          ===========react-tuicss===========
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