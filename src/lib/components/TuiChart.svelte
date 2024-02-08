<script lang="ts">
  import { ChartColor } from "../enums";
  import { defaultScaler, type ValueFunction } from "../helpers";

  export let size: { width: string, height: string };
  export let values: { label: string, value: number }[];
  export let labels: string[] = [];
  export let valueScaler: ValueFunction = defaultScaler;
  export let valueFormatter: ValueFunction = defaultScaler;
  export let minValue: number = 0;
  export let maxValue: number = 100;
  export let horizontal: boolean = false;

  const colors: string[] = Object.values(ChartColor);

  $: hasLabels = labels.length > 0;
</script>

<div
  role="figure"
  class:tui-chart-horizontal={horizontal}
  class:tui-chart-vertical={!horizontal}
  style:width={ size.width }
  style:height={ size.height }
  { ...$$restProps }
>
  <div
    class:tui-chart-display={true}
    class:no-x-axis={!hasLabels}
    class:no-y-axis={!hasLabels}
  >
    {#each values as { value, label }, idx (`value-shape-${idx}`) }
      <div
        role="meter"
        tabIndex={0}
        aria-valuenow={ value }
        aria-valuemin={ minValue ?? 0 }
        aria-valuemax={ maxValue ?? 100 }
        aria-valuetext={ valueFormatter(value) }
        aria-label={label}
        class:tui-chart-value={true}
        class={ `${colors[idx % colors.length]}` }
        style:height={ !horizontal ? valueScaler(value) : "unset" }
        style:width={ horizontal ? valueScaler(value) : "unset" }
      >
        { valueFormatter(value) }
      </div>
    {/each}
  </div>
  {#if hasLabels}
    <div data-testid="chart-y-axis" class:tui-chart-y-axis={true} class:tui-chart-vertical-axis={!horizontal}>
      {#if horizontal}
        {#each values as {label}, idx (idx)}
          <div data-testid="chart-y-axis-value-legend" class="tui-chart-legend">{ label }</div>
        {/each}
      {:else}
        {#each labels as label, idx (idx)}
          <div data-testid="chart-y-axis-label-legend"  class="tui-chart-legend">{ label }</div>
        {/each}
      {/if}
    </div>
    <div data-testid="chart-x-axis" class="tui-chart-x-axis">
      {#if horizontal}
        {#each labels as label, idx (idx)}
          <div data-testid="chart-y-axis-label-legend"  class="tui-chart-legend">{ label }</div>
        {/each}
      {:else}
        {#each values as {label}, idx (idx)}
          <div data-testid="chart-y-axis-value-legend"  class="tui-chart-legend">{ label }</div>
        {/each}
      {/if}
    </div>
  {/if}
</div>

<style scoped>
.tui-chart-vertical,
.tui-chart-horizontal {
  color: white;
}
.tui-chart-vertical-axis {
  flex-direction: column-reverse;
}
</style>