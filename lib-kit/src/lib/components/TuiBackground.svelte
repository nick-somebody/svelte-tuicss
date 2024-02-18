<script lang="ts">
  import type { Background, LightBackground, DarkBackground } from '$lib/enums.js';
  export let color: Background | LightBackground | DarkBackground;
</script>

<div class={color}>
  <slot />
</div>
