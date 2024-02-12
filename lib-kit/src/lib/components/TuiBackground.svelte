<script lang="ts">
  import { Background, LightBackground, DarkBackground } from '../enums';
  export let color: Background | LightBackground | DarkBackground;
</script>

<div class={color}>
  <slot />
</div>
