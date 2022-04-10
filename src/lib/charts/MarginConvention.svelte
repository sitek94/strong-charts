<script lang="ts">
  import type { Margin } from './charts.types'

  export let margin: Margin
</script>

<g transform="translate({margin.left},{margin.top})">
  <slot />
</g>
