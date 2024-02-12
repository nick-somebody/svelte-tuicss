<script lang="ts">
  import type { Color, DarkBackground, LightBackground, MildColor } from '../enums';

  export let indeterminate: boolean = false;
  export let label: string = '';
  export let background: DarkBackground | LightBackground | MildColor | Color | undefined =
    undefined;
  export let color: MildColor | Color | undefined = undefined;
  export let progress: number;
  export let barWidth: string;
</script>

<div
  class:tui-progress-bar={true}
  class={`${background ?? ''}`}
  style:width={barWidth}
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuetext={`${progress}%`}
  role="progressbar"
>
  {#if label}
    <span class="tui-progress-label">{label}</span>
  {/if}
  <span
    class:tui-progress={!indeterminate}
    class:tui-indeterminate={indeterminate}
    class={color}
    style:width={`${progress}%`}
  ></span>
</div>
